"use client";
import Link from "next/link";
import { useState } from "react";
import { CLINIC } from "@/data/clinic";

/*
 * v0.2 Nav — epionebh/emilmd inspired:
 *   - sticky white top bar with hairline border-bottom
 *   - logo left
 *   - centered horizontal links, with Services dropdown
 *   - right-side multi-CTA: phone + "Request appointment"
 *   - mobile hamburger collapse
 */

const SERVICE_LINKS = [
  { href: "/services/wound-care", label: "Wound Care" },
  { href: "/services/dot-physicals", label: "DOT Physicals" },
  { href: "/services/drug-testing", label: "Drug Testing" },
  { href: "/services", label: "All services" },
];

const PRIMARY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/insurance", label: "Insurance" },
  { href: "/patient-resources", label: "Resources" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[--color-border] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 sm:px-10">
        {/* Logo */}
        <Link href="/" aria-label={`${CLINIC.name} — Home`} className="flex shrink-0 items-center gap-3">
          <span aria-hidden className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[--color-rose] text-[--color-rose]">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M22 16a10 10 0 1 1-7.07-9.6A8 8 0 1 0 22 16Z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-[18px] font-medium tracking-tight text-[--color-ink]">Crescent Health Partners</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[--color-muted]">Wound &amp; Medical Clinic</span>
          </span>
        </Link>

        {/* Center links — desktop only */}
        <ul className="hidden items-center gap-8 text-[14px] font-medium text-[--color-ink] lg:flex">
          <li
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[--color-rose-deep]"
            >
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {svcOpen && (
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                role="menu"
              >
                <ul className="min-w-[220px] rounded-md border border-[--color-border] bg-white py-2 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.25)]">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-5 py-2.5 text-[14px] text-[--color-ink] transition-colors hover:bg-[--color-cream] hover:text-[--color-rose-deep]"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {PRIMARY_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-[--color-rose-deep]">{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden items-center gap-2 text-[13px] font-mono tracking-tight text-[--color-ink] hover:text-[--color-rose-deep] sm:inline-flex"
            aria-label={`Call ${CLINIC.phoneDisplay}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {CLINIC.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="btn btn-primary hidden sm:inline-flex"
          >
            Request appointment
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[--color-border] text-[--color-ink] lg:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[--color-border] bg-white lg:hidden">
          <ul className="mx-auto max-w-[1400px] divide-y divide-[--color-border] px-6 py-2 sm:px-10">
            {[...SERVICE_LINKS, ...PRIMARY_LINKS, { href: "/contact", label: "Request appointment" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[15px] text-[--color-ink] hover:text-[--color-rose-deep]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-3.5">
              <a href={`tel:${CLINIC.phone}`} className="font-mono text-[15px] text-[--color-rose-deep]">
                Call {CLINIC.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
