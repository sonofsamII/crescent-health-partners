import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CLINIC, LOCATIONS, HOURS } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Locations — Sumter and Columbia, South Carolina",
  description:
    "Visit Crescent Health Partners at 212 Broad St., Sumter, SC or 7356 Garners Ferry Road, Suite 127, Columbia, SC. Walk-ins welcome. Mon–Fri 8:30 AM – 5 PM.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Locations</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Two clinics.<br/>
            <span className="h-serif text-[var(--color-rose)]">One phone number</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[var(--color-muted)] leading-relaxed text-lg">
            Same team, same approach, two cities. Walk-ins welcome at both —
            calling ahead just means a shorter wait.
          </p>
          <a
            href={`tel:${CLINIC.phone}`}
            className="mt-8 inline-block font-mono text-2xl text-[var(--color-plum)] hover:text-[var(--color-rose)]"
          >
            {CLINIC.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <Reveal key={loc.id}>
              <article id={loc.id} className="card p-8 h-full">
                <div className="eyebrow mb-3">{loc.name}</div>
                <h2 className="font-display text-2xl text-[var(--color-plum)] mb-2 leading-tight">
                  {loc.city}, {loc.state}
                </h2>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                  target="_blank"
                  rel="noopener"
                  className="block text-[var(--color-plum)] hover:text-[var(--color-rose)] leading-relaxed mb-4"
                >
                  {loc.street}<br/>
                  {loc.city}, {loc.state} {loc.zip}
                </a>
                {loc.notes && (
                  <p className="text-sm text-[var(--color-muted)] mb-6 italic">{loc.notes}</p>
                )}

                <div className="border-t border-[var(--color-border)] pt-5 mt-6">
                  <div className="eyebrow mb-3">Hours</div>
                  <ul className="space-y-1.5 text-sm">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span className="text-[var(--color-ink)]">{h.day}</span>
                        <span className="font-mono text-[var(--color-muted)]">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[var(--color-border)] pt-5 mt-6">
                  <div className="eyebrow mb-3">Get directions</div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded border border-[var(--color-border)]">
                    <iframe
                      title={`Map of ${loc.name}`}
                      src={`https://www.google.com/maps?q=${loc.mapsQuery}&output=embed`}
                      loading="lazy"
                      className="h-full w-full"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
