import Link from "next/link";
import { CLINIC } from "@/data/clinic";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-[--color-border] bg-[--color-linen]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" aria-label={`${CLINIC.name} — Home`} className="flex items-center gap-3">
          <span aria-hidden className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[--color-rose] text-[--color-rose]">
            {/* crescent mark — simple SVG, no logo file dependency */}
            <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M22 16a10 10 0 1 1-7.07-9.6A8 8 0 1 0 22 16Z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-medium tracking-tight text-[--color-plum]">Crescent Health Partners</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[--color-muted]">Wound &amp; Medical Clinic</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-[14px] font-medium text-[--color-muted] md:flex">
          <li><Link href="/services" className="hover:text-[--color-plum] transition-colors">Services</Link></li>
          <li><Link href="/about" className="hover:text-[--color-plum] transition-colors">About</Link></li>
          <li><Link href="/locations" className="hover:text-[--color-plum] transition-colors">Locations</Link></li>
          <li><Link href="/insurance" className="hover:text-[--color-plum] transition-colors">Insurance</Link></li>
          <li><Link href="/patient-resources" className="hover:text-[--color-plum] transition-colors">Resources</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden text-sm font-mono text-[--color-plum] hover:text-[--color-rose] transition-colors sm:inline"
          >
            {CLINIC.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-[--color-rose] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[--color-rose-deep] transition-colors rounded-full"
          >
            Request appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
