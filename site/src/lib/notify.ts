/**
 * Notification helpers — graceful-degrade pattern.
 *
 * Each channel returns an OK/error result. The route handler always logs and
 * always returns success to the user as long as the request was valid. If a
 * downstream service isn't wired (no env vars), we skip cleanly and return
 * { ok: false, skipped: true }. Nothing throws.
 */
import twilio from "twilio";
import { Client as HubSpotClient } from "@hubspot/api-client";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts/models/Filter";
import { AssociationSpecAssociationCategoryEnum } from "@hubspot/api-client/lib/codegen/crm/deals/models/AssociationSpec";

// ── Twilio ──────────────────────────────────────────────────────────────

export type SmsResult =
  | { ok: true; sid: string }
  | { ok: false; error: string; skipped?: boolean };

export async function sendOwnerSms(opts: {
  body: string;
  skip?: boolean;
}): Promise<SmsResult> {
  if (opts.skip) return { ok: false, error: "skipped via header", skipped: true };
  const apiKeySid = process.env.TWILIO_API_KEY_SID;
  const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.OWNER_PHONE;
  if (!accountSid || !from || !to) {
    return { ok: false, error: "Twilio not configured", skipped: true };
  }
  try {
    const client = apiKeySid && apiKeySecret
      ? twilio(apiKeySid, apiKeySecret, { accountSid })
      : twilio(accountSid, authToken!);
    const msg = await client.messages.create({ from, to, body: opts.body });
    return { ok: true, sid: msg.sid };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// ── Email (Resend or Workspace SMTP — placeholder for now) ──────────────

export type EmailResult =
  | { ok: true; id?: string }
  | { ok: false; error: string; skipped?: boolean };

export async function sendEmail(opts: {
  subject: string;
  text: string;
  html?: string;
}): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_EMAIL;
  const from = process.env.NOTIFY_FROM ?? "Crescent Health <noreply@crescenthealthpartners.com>";
  if (!apiKey || !to) {
    return { ok: false, error: "Resend not configured", skipped: true };
  }
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: opts.subject,
        text: opts.text,
        html: opts.html ?? `<pre style="font-family:ui-monospace,SFMono-Regular,monospace;white-space:pre-wrap">${opts.text}</pre>`,
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return { ok: false, error: `Resend ${r.status}: ${t}` };
    }
    const j = await r.json();
    return { ok: true, id: j.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// ── HubSpot ─────────────────────────────────────────────────────────────

export interface HubSpotContactInput {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  address?: string;
  lifecyclestage?: string;
  lead_source?: string;
  notes?: string;
}

export interface HubSpotDealInput {
  dealname: string;
  amount?: number;
  dealstage?: string;
  pipeline?: string;
}

export type HubSpotResult =
  | { ok: true; contactId: string; dealId?: string }
  | { ok: false; error: string; skipped?: boolean };

function getHubSpotClient(): HubSpotClient | null {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) return null;
  return new HubSpotClient({ accessToken: token });
}

async function upsertContact(
  client: HubSpotClient,
  input: HubSpotContactInput
): Promise<string> {
  const properties: Record<string, string> = {
    email: input.email,
    lifecyclestage: input.lifecyclestage ?? "lead",
    hs_lead_status: "NEW",
  };
  if (input.firstname) properties.firstname = input.firstname;
  if (input.lastname) properties.lastname = input.lastname;
  if (input.phone) properties.phone = input.phone;
  if (input.address) properties.address = input.address;
  if (input.lead_source) properties.hs_analytics_source = "OTHER_CAMPAIGNS";

  try {
    const created = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    return created.id;
  } catch (err) {
    const status = (err as { code?: number }).code;
    if (status === 409) {
      const existing = await client.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              { propertyName: "email", operator: FilterOperatorEnum.Eq, value: input.email },
            ],
          },
        ],
        properties: ["email"],
        limit: 1,
        after: "0",
        sorts: [],
      });
      if (existing.results.length > 0) {
        const id = existing.results[0].id;
        await client.crm.contacts.basicApi.update(id, { properties });
        return id;
      }
    }
    throw err;
  }
}

export async function pushToHubSpot(input: {
  contact: HubSpotContactInput;
  deal?: HubSpotDealInput;
}): Promise<HubSpotResult> {
  const client = getHubSpotClient();
  if (!client) return { ok: false, error: "HUBSPOT_TOKEN missing", skipped: true };
  try {
    const contactId = await upsertContact(client, input.contact);

    let dealId: string | undefined;
    if (input.deal) {
      const dealProps: Record<string, string> = {
        dealname: input.deal.dealname,
        pipeline: input.deal.pipeline ?? "default",
        dealstage: input.deal.dealstage ?? "appointmentscheduled",
      };
      if (typeof input.deal.amount === "number") {
        dealProps.amount = String(input.deal.amount);
      }
      try {
        const dealRes = await client.crm.deals.basicApi.create({
          properties: dealProps,
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: AssociationSpecAssociationCategoryEnum.HubspotDefined,
                  associationTypeId: 3,
                },
              ],
            },
          ],
        });
        dealId = dealRes.id;
      } catch (dealErr) {
        console.error("[HubSpot] deal create failed", dealErr);
      }
    }
    return { ok: true, contactId, dealId };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
