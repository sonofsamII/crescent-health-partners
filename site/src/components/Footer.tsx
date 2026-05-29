import Link from "next/link";
import { CLINIC, LOCATIONS, HOURS } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-12 sm:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-rose)] text-[var(--color-rose)]">
                <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor"><path d="M22 16a10 10 0 1 1-7.07-9.6A8 8 0 1 0 22 16Z" /></svg>
              </span>
              <div>
                <div className="font-serif text-[18px] text-[var(--color-ink)]">Crescent Health Partners</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-muted)]">Wound &amp; Medical Clinic</div>
              </div>
            </div>
            <p className="max-w-[36ch] text-[14.5px] leading-relaxed text-[var(--color-muted)]">
              Nurse-practitioner-owned wound care, occupational health, and
              wellness clinic serving Sumter, Columbia, and the surrounding
              South Carolina midlands.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Care</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/services/wound-care" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">Wound Care</Link></li>
              <li><Link href="/services/dot-physicals" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">DOT Physicals</Link></li>
              <li><Link href="/services/drug-testing" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">Drug Testing</Link></li>
              <li><Link href="/services" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">All services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Practice</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/about" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">About</Link></li>
              <li><Link href="/locations" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">Locations</Link></li>
              <li><Link href="/insurance" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">Insurance</Link></li>
              <li><Link href="/patient-resources" className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">Resources</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow mb-5">Contact &amp; Hours</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href={`tel:${CLINIC.phone}`} className="font-mono text-[15px] text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">
                  {CLINIC.phoneDisplay}
                </a>
                <span className="text-[var(--color-muted)]"> · fax {CLINIC.faxDisplay}</span>
              </li>
              <li><a href={`mailto:${CLINIC.email}`} className="text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]">{CLINIC.email}</a></li>
              <li className="mt-3 border-t border-[var(--color-border)] pt-3 text-[var(--color-muted)]">
                {HOURS.filter(h => h.hours !== "Closed")[0]?.day}–{HOURS.filter(h => h.hours !== "Closed").at(-1)?.day}: <span className="font-mono">8:30 AM – 5:00 PM</span><br/>
                Sat &amp; Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-14" />

        <div className="grid gap-8 text-[13.5px] md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <address key={loc.id} className="not-italic">
              <div className="eyebrow mb-3">{loc.name}</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                target="_blank"
                rel="noopener"
                className="block font-serif text-[16px] leading-relaxed text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]"
              >
                {loc.street}<br/>
                {loc.city}, {loc.state} {loc.zip}
              </a>
              {loc.notes && <div className="mt-2 text-[12.5px] text-[var(--color-muted)]">{loc.notes}</div>}
            </address>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)] md:flex-row md:items-center md:justify-between font-mono">
          <p>© {new Date().getFullYear()} Crescent Health Partners, LLC · All rights reserved</p>
          <p>NPI 1568207702 · Sumter · Columbia · SC</p>
        </div>
      </div>
    </footer>
  );
}
