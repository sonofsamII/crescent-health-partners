import { NextResponse } from "next/server";
import { pushToHubSpot, sendOwnerSms, sendEmail } from "@/lib/notify";

export const runtime = "nodejs";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  reason?: string;
  callbackTime?: string;
  message?: string;
  location?: string;
  // Honeypot field — bots fill it; real users don't.
  company?: string;
}

export async function POST(request: Request) {
  const stamp = new Date().toISOString();

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — if filled, silently succeed without sending anything.
  if (body.company) {
    return NextResponse.json({ ok: true, receivedAt: stamp, message: "ok" });
  }

  // Minimal validation
  if (!body.firstName || !body.lastName || !body.email || !body.phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Always log so we have a record even if downstream services are down.
  console.log(`[CONTACT ${stamp}]`, JSON.stringify(body));

  // Skip header for smoke tests so we don't blast Sam's phone.
  const skipSms = request.headers.get("x-skip-sms") === "true";

  const fullName = `${body.firstName} ${body.lastName}`.trim();
  const summary =
    `NEW CONTACT — ${fullName} · ${body.reason ?? "no reason"} · ` +
    `${body.location ?? "no location"} · ${body.phone} · ${body.email}` +
    (body.callbackTime ? ` · callback ${body.callbackTime}` : "") +
    (body.message ? ` · "${body.message.slice(0, 140)}"` : "");

  const [sms, hs, mail] = await Promise.all([
    sendOwnerSms({ body: summary, skip: skipSms }),
    pushToHubSpot({
      contact: {
        email: body.email,
        firstname: body.firstName,
        lastname: body.lastName,
        phone: body.phone,
        lifecyclestage: "lead",
        lead_source: "crescenthealthpartners.com",
        notes: [body.reason, body.message, body.callbackTime, body.location]
          .filter(Boolean)
          .join(" · "),
      },
      deal: {
        dealname: `${fullName} — ${body.reason ?? "inquiry"}`,
        dealstage: "appointmentscheduled",
        pipeline: "default",
      },
    }),
    sendEmail({
      subject: `Crescent Health — new contact: ${fullName}`,
      text: summary,
    }),
  ]);

  if (!sms.ok) console.error("[CONTACT sms]", sms);
  if (!hs.ok) console.error("[CONTACT hubspot]", hs);
  if (!mail.ok) console.error("[CONTACT email]", mail);

  // Gracefully degrade — form always returns success to the user as long as
  // we logged it. The dashboard / phone / email / HubSpot are all fallbacks.
  return NextResponse.json({
    ok: true,
    receivedAt: stamp,
    message: "We'll be in touch the next business day.",
    sms,
    hubspot: hs,
    email: mail,
  });
}
