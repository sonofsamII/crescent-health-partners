import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { HERO_SERVICES } from "@/data/services";
import { CLINIC, LOCATIONS, PROVIDERS } from "@/data/clinic";

/*
 * v0.2 Homepage — epionebh/emilmd-aligned section order:
 *   1. Hero (full-bleed video)
 *   2. Service columns — 4-card pillars (Wound Care, DOT, Drug Testing, Primary Care)
 *   3. Meet your providers — 2-card grid with placeholder photos
 *   4. What we treat — horizontal scrolling serif italic list
 *   5. Testimonials marquee (PLACEHOLDER copy clearly marked)
 *   6. Two locations
 *   7. Insurance & payment
 *   8. Final CTA band
 */

/* ───────── Section data ───────── */

const PILLARS = [
  {
    title: "Wound Care",
    href: "/services/wound-care",
    line: "Diabetic ulcers, venous stasis, post-surgical wounds. NAWCO-certified. The wounds other clinics couldn't close.",
  },
  {
    title: "DOT Physicals",
    href: "/services/dot-physicals",
    line: "Same-day certification by full-time DOT examiners. Truck parking on site. Faster than urgent care.",
  },
  {
    title: "Drug Testing",
    href: "/services/drug-testing",
    line: "CLIA lab. DOT chain-of-custody and non-DOT panels. Pre-employment, random, post-accident.",
  },
  {
    title: "Primary Care",
    href: "/services",
    line: "Wellness panels, weight loss, IV hydration, walk-in labs. A full clinic behind the specialty.",
  },
];

const CONDITIONS_TREATED = [
  "Chronic wounds",
  "Diabetic foot ulcers",
  "Venous stasis ulcers",
  "Arterial / ischemic ulcers",
  "Pressure injuries",
  "Surgical dehiscence",
  "Atypical wounds",
  "Burns",
  "DOT compliance",
  "Pre-employment screens",
  "Sports physicals",
  "Wellness panels",
  "Medical weight loss",
  "IV hydration",
  "Flu / COVID / RSV testing",
  "Walk-in labs",
  "Pregnancy testing",
  "Paternity / chain-of-custody DNA",
];

// PLACEHOLDER testimonials — clearly marked. Swap in real reviews when collected.
const TESTIMONIALS = [
  {
    quote:
      "Three years of trying to heal a diabetic ulcer at the hospital. Three weeks at Crescent and it was finally closed. The whole team treated me like a person, not a chart.",
    name: "Marcus T.",
    context: "Wound care patient",
    placeholder: true,
  },
  {
    quote:
      "Walked in for a DOT physical, was out in 25 minutes with my certification. Lisa is the most efficient nurse practitioner I've ever met.",
    name: "James L.",
    context: "Commercial driver",
    placeholder: true,
  },
  {
    quote:
      "I drive an hour from Manning. Worth every minute. They explain everything, the office is calm, and the prices are honest.",
    name: "Wanda B.",
    context: "Primary care patient",
    placeholder: true,
  },
  {
    quote:
      "After two surgeries that didn't fully heal, my surgeon sent me here. Kim and Lisa knew exactly what to do. Six weeks later I was back to normal.",
    name: "Trevor C.",
    context: "Post-surgical wound care",
    placeholder: true,
  },
  {
    quote:
      "They take Medicare, they take walk-ins, and they treat you like a neighbor. We need 10 more clinics like this in Sumter.",
    name: "Karen W.",
    context: "Long-time patient",
    placeholder: true,
  },
];

/* ───────── Provider helpers ───────── */

function initialsFor(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0]!.charAt(0);
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

/* ───────── Page ───────── */

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ───── 2. Service pillars ───── */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-32">
          <Reveal className="mx-auto mb-16 max-w-[640px] text-center">
            <div className="eyebrow mb-4">What we do</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              Four pillars. <em>One practice.</em>
            </h2>
            <p className="prose-body mx-auto mt-6 max-w-[52ch]">
              We are a full primary-care clinic with a specialty in wound care
              and the occupational-health services Sumter and Columbia need.
            </p>
          </Reveal>

          <div className="grid gap-px border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="bg-white">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between gap-6 p-9 transition-colors hover:bg-[var(--color-cream)]"
                >
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.32em] text-[var(--color-muted)]">0{i + 1}</div>
                    <h3
                      className="mt-4 font-serif text-[28px] text-[var(--color-ink)]"
                      style={{ lineHeight: 1.15, letterSpacing: "0.005em" }}
                    >
                      {p.title}
                    </h3>
                    <p className="prose-body mt-4 text-[15px]">{p.line}</p>
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink)] transition-transform group-hover:translate-x-1"
                  >
                    Learn more <span>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. Meet your providers ───── */}
      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-32">
          <Reveal className="mb-16">
            <div className="eyebrow mb-4">Meet your providers</div>
            <h2 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              Two nurse practitioners. <em>Sixty-four years</em> at the bedside.
            </h2>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            {PROVIDERS.map((p) => (
              <Reveal key={p.id}>
                <article className="grid gap-7 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <div className="provider-photo">
                    <div className="provider-photo-initials" aria-hidden>
                      {initialsFor(p.name)}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                      {p.role}
                    </div>
                    <h3 className="mt-3 font-serif text-[26px] text-[var(--color-ink)]" style={{ lineHeight: 1.15 }}>
                      {p.name}
                    </h3>
                    <div className="mt-1 font-mono text-[12px] text-[var(--color-rose-deep)]">{p.credentials}</div>
                    <p className="prose-body mt-5 text-[15px]">{p.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.specialties.map((sp) => (
                        <span
                          key={sp}
                          className="rounded-full border border-[var(--color-border-strong)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink)]"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]"
            >
              Read the full story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───── 4. What we treat — horizontal scroll list ───── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-paper)] py-20 sm:py-24">
        <Reveal className="mx-auto mb-10 max-w-[1400px] px-6 sm:px-10">
          <div className="eyebrow mb-4">What we treat</div>
          <h2 className="h-display max-w-[24ch]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            From a stalled wound to a routine refill —{" "}
            <em>we handle it.</em>
          </h2>
        </Reveal>
        <div className="scroll-x-hide overflow-x-auto">
          <div className="mx-auto flex max-w-none gap-x-12 px-6 sm:px-10" style={{ width: "max-content" }}>
            {CONDITIONS_TREATED.map((c) => (
              <span
                key={c}
                className="font-serif italic text-[var(--color-ink)]"
                style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)", whiteSpace: "nowrap", lineHeight: 1.4 }}
              >
                {c}<span className="ml-12 text-[var(--color-rose)] not-italic" aria-hidden>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. Testimonials marquee (PLACEHOLDER) ───── */}
      <section className="bg-[var(--color-cream-deep)] py-28 sm:py-32">
        <Reveal className="mx-auto mb-14 max-w-[1400px] px-6 text-center sm:px-10">
          <div className="eyebrow mb-4">In their words</div>
          <h2 className="h-display max-w-[28ch] mx-auto" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
            From the patients we&apos;ve treated.
          </h2>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            [Placeholder copy — real reviews coming]
          </p>
        </Reveal>
        <div className="marquee-pause overflow-hidden">
          <div className="marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="card flex w-[340px] shrink-0 flex-col gap-6 p-8 sm:w-[420px]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-rose)]" aria-hidden>
                  <path d="M3 17v3h6v-3c0-1.5 1-2.5 2.5-2.5V12c-4 0-8.5 1-8.5 5zm12 0v3h6v-3c0-1.5 1-2.5 2.5-2.5V12c-4 0-8.5 1-8.5 5z" transform="rotate(180 12 12)"/>
                </svg>
                <blockquote
                  className="font-serif italic text-[var(--color-ink)]"
                  style={{ fontSize: "17px", lineHeight: 1.55 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-[var(--color-border)] pt-4">
                  <div className="font-serif text-[15px] text-[var(--color-ink)]">{t.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    {t.context}
                    {t.placeholder && " · [PLACEHOLDER]"}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 6. Two locations ───── */}
      <section className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow mb-4">Find us</div>
              <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                Two locations,<br/><em>one practice.</em>
              </h2>
              <p className="prose-body mt-6 max-w-[40ch]">
                The same providers. The same approach. Same-day wound care
                evaluations available at both clinics.
              </p>
              <a
                href={`tel:${CLINIC.phone}`}
                className="mt-8 inline-block font-mono text-[24px] text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]"
              >
                {CLINIC.phoneDisplay}
              </a>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {LOCATIONS.map((loc) => (
                <Reveal key={loc.id}>
                  <article className="card h-full p-8">
                    <div className="eyebrow mb-3">{loc.name}</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                      target="_blank"
                      rel="noopener"
                      className="font-serif text-[19px] leading-snug text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]"
                    >
                      {loc.street}<br/>
                      {loc.city}, {loc.state} {loc.zip}
                    </a>
                    {loc.notes && (
                      <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-muted)]">{loc.notes}</p>
                    )}
                    <div className="mt-6 border-t border-[var(--color-border)] pt-4 font-mono text-[10.5px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Mon – Fri · 8:30 AM – 5 PM
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── 7. Insurance & payment ───── */}
      <section className="bg-[var(--color-cream)]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10 sm:py-28">
          <Reveal>
            <div className="eyebrow mb-4">Insurance &amp; payment</div>
            <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Most major plans <em>welcome.</em>
            </h2>
            <p className="prose-body mx-auto mt-6 max-w-[58ch]">
              We participate with Medicare, Medicaid, BlueCross BlueShield of
              South Carolina, Aetna, Cigna, United Healthcare, Tricare, and
              most South Carolina employer plans. Cash-pay options available.
              Call to verify your specific plan before your first visit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {["Medicare", "Medicaid", "BlueCross BS", "Aetna", "Cigna", "UnitedHealth", "Tricare"].map((p) => (
                <span key={p} className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                  {p}
                </span>
              ))}
            </div>
            <Link
              href="/insurance"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink)] hover:text-[var(--color-rose-deep)]"
            >
              See full insurance list →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───── 8. Final CTA band ───── */}
      <section className="relative isolate overflow-hidden bg-[var(--color-ink)] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 sm:py-32">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
              Same-day evaluations available
            </div>
            <h2
              className="mx-auto mt-6 max-w-[22ch] font-serif text-white"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.08 }}
            >
              Call <em className="text-[var(--color-rose-soft)]">(803) 883-4033</em> or request an appointment.
            </h2>
            <p className="mx-auto mt-7 max-w-[52ch] text-[17px] leading-relaxed text-white/75">
              Walk in or call ahead. Two clinics in Sumter and Columbia, one
              phone number, and a team that picks up.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={`tel:${CLINIC.phone}`} className="btn btn-accent">
                Call {CLINIC.phoneDisplay}
              </a>
              <Link href="/contact" className="btn btn-ghost-light">
                Request appointment
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
