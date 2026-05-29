import Link from "next/link";
import { CLINIC, LOCATIONS, HOURS } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[--color-border] bg-[--color-linen-warm]">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--color-rose] text-[--color-rose]">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M22 16a10 10 0 1 1-7.07-9.6A8 8 0 1 0 22 16Z" /></svg>
              </span>
              <div>
                <div className="font-display text-base font-medium text-[--color-plum]">Crescent Health Partners</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--color-muted]">Wound &amp; Medical Clinic</div>
              </div>
            </div>
            <p className="text-[--color-muted] leading-relaxed text-sm max-w-[36ch]">
              Nurse-practitioner-owned wound care, occupational health, and
              wellness clinic. <span className="h-serif">Your PINK Partners in health.</span>
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-4">Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/wound-care" className="text-[--color-ink] hover:text-[--color-rose]">Wound Care</Link></li>
              <li><Link href="/services/dot-physicals" className="text-[--color-ink] hover:text-[--color-rose]">DOT Physicals</Link></li>
              <li><Link href="/services/drug-testing" className="text-[--color-ink] hover:text-[--color-rose]">Drug Testing</Link></li>
              <li><Link href="/services" className="text-[--color-ink] hover:text-[--color-rose]">All services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-4">Practice</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[--color-ink] hover:text-[--color-rose]">About</Link></li>
              <li><Link href="/locations" className="text-[--color-ink] hover:text-[--color-rose]">Locations</Link></li>
              <li><Link href="/insurance" className="text-[--color-ink] hover:text-[--color-rose]">Insurance</Link></li>
              <li><Link href="/patient-resources" className="text-[--color-ink] hover:text-[--color-rose]">Resources</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow mb-4">Contact &amp; Hours</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${CLINIC.phone}`} className="font-mono text-[--color-plum] hover:text-[--color-rose]">
                  {CLINIC.phoneDisplay}
                </a>
                <span className="text-[--color-muted]"> · fax {CLINIC.faxDisplay}</span>
              </li>
              <li><a href={`mailto:${CLINIC.email}`} className="text-[--color-ink] hover:text-[--color-rose]">{CLINIC.email}</a></li>
              <li className="text-[--color-muted] pt-2 border-t border-[--color-border] mt-3">
                {HOURS.filter(h => h.hours !== "Closed")[0]?.day}–{HOURS.filter(h => h.hours !== "Closed").at(-1)?.day}: <span className="font-mono">8:30 AM – 5:00 PM</span><br/>
                Sat &amp; Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-12" />

        <div className="grid gap-8 md:grid-cols-2 text-sm">
          {LOCATIONS.map((loc) => (
            <address key={loc.id} className="not-italic">
              <div className="eyebrow mb-2">{loc.name}</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                target="_blank"
                rel="noopener"
                className="block text-[--color-plum] hover:text-[--color-rose]"
              >
                {loc.street}<br/>
                {loc.city}, {loc.state} {loc.zip}
              </a>
              {loc.notes && <div className="mt-2 text-[--color-muted] text-[13px]">{loc.notes}</div>}
            </address>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[--color-border] pt-6 text-xs text-[--color-muted] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Crescent Health Partners, LLC · All rights reserved</p>
          <p className="h-serif text-sm text-[--color-plum]">It&apos;s your time to live your best life.</p>
        </div>
      </div>
    </footer>
  );
}
