import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CLINIC, LOCATIONS, HOURS } from "@/data/clinic";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request an appointment or ask a question",
  description:
    "Call (803) 883-4033 or send us your info. Two clinics: Sumter (212 Broad St) and Columbia (7356 Garners Ferry Road). Walk-ins welcome.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Contact</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Walk in. Call.<br/>
            <span className="h-serif text-[var(--color-rose)]">Or tell us about it</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[var(--color-muted)] leading-relaxed text-lg">
            Phone is fastest for same-day care. The form below is for anything that
            isn&apos;t urgent — appointment requests, questions about coverage,
            employer drug-screen accounts, or letting us know about a wound that&apos;s
            been bothering you for a while.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-5 space-y-10">
            <Reveal>
              <div className="card p-7">
                <div className="eyebrow mb-3">Call us</div>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="block font-mono text-2xl text-[var(--color-plum)] hover:text-[var(--color-rose)]"
                >
                  {CLINIC.phoneDisplay}
                </a>
                <div className="mt-1 font-mono text-sm text-[var(--color-muted)]">
                  Fax {CLINIC.faxDisplay}
                </div>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="mt-4 block text-[var(--color-ink)] hover:text-[var(--color-rose)]"
                >
                  {CLINIC.email}
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="card p-7">
                <div className="eyebrow mb-3">Hours</div>
                <ul className="space-y-1.5 text-sm">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 border-b border-[var(--color-border)] py-1.5 last:border-0">
                      <span className="text-[var(--color-ink)]">{h.day}</span>
                      <span className="font-mono text-[var(--color-muted)]">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card p-7">
                <div className="eyebrow mb-3">Locations</div>
                <div className="space-y-5 text-sm">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.id}>
                      <div className="font-display text-base text-[var(--color-plum)]">{loc.name}</div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                        target="_blank"
                        rel="noopener"
                        className="text-[var(--color-ink)] hover:text-[var(--color-rose)] block leading-relaxed"
                      >
                        {loc.street}<br/>
                        {loc.city}, {loc.state} {loc.zip}
                      </a>
                      {loc.notes && (
                        <div className="text-[12px] text-[var(--color-muted)] mt-1 italic">{loc.notes}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>

          <div className="md:col-span-7">
            <Reveal>
              <div className="card p-8 md:p-10">
                <div className="eyebrow mb-3">Send a message</div>
                <h2 className="font-display text-3xl text-[var(--color-plum)] leading-tight mb-2">
                  Tell us what you need.
                </h2>
                <p className="text-[var(--color-muted)] mb-8">
                  We&apos;ll call or email back the next business day. For
                  urgent care needs, call <a href={`tel:${CLINIC.phone}`} className="text-[var(--color-rose)] hover:text-[var(--color-rose-deep)]">{CLINIC.phoneDisplay}</a>.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
