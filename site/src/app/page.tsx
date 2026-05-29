import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SERVICES, HERO_SERVICES } from "@/data/services";
import { CLINIC, LOCATIONS, HOURS, PROVIDERS } from "@/data/clinic";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Credibility strip */}
      <section className="border-y border-[--color-border] bg-[--color-linen-warm]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-4 px-6 py-8 text-[12px] font-mono uppercase tracking-[0.18em] text-[--color-muted] sm:grid-cols-4 sm:px-10">
          <div>NAWCO wound certified</div>
          <div>Certified DOT examiners</div>
          <div>CLIA-certified lab</div>
          <div>Walk-ins welcome</div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
        <Reveal className="mb-14 max-w-[42ch]">
          <div className="eyebrow mb-4">What we do best</div>
          <h2 className="h-display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
            Three things, <span className="h-serif text-[--color-rose]">very well</span>.
          </h2>
          <p className="mt-6 text-[--color-muted] leading-relaxed text-lg">
            We&apos;re a full clinic — primary care, wellness, weight loss, IV
            hydration, the lot. But these are the three we are known for.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {HERO_SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <Link href={`/services/${s.slug}`} className="card card-hover block h-full p-8">
                <div className="eyebrow mb-3">0{i + 1}</div>
                <h3 className="font-display text-2xl text-[--color-plum] mb-3 leading-tight">{s.name}</h3>
                <p className="text-[--color-muted] mb-6 leading-relaxed text-[15px]">{s.short}</p>
                <div className="text-[12px] font-mono uppercase tracking-[0.22em] text-[--color-rose]">
                  Read more →
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pull-quote / positioning */}
      <section className="border-y border-[--color-border] bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center sm:px-10">
          <Reveal>
            <div className="eyebrow mb-6">Why patients keep coming back</div>
            <p className="h-display text-[--color-plum]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
              We listen to you and want to know your story. We don&apos;t judge.
              <span className="h-serif text-[--color-rose]"> We take your hand</span> and
              ask what quality of life you actually want.
            </p>
            <p className="mt-8 text-sm font-mono uppercase tracking-[0.22em] text-[--color-muted]">
              — Kim, NP &amp; Lisa, NP · Your PINK Partners
            </p>
          </Reveal>
        </div>
      </section>

      {/* Conditions we treat (wound care SEO/AEO anchor on home) */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow mb-4">Wound care specialty</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              The wounds <span className="h-serif text-[--color-rose]">that don&apos;t close</span>.
            </h2>
            <p className="mt-6 text-[--color-muted] leading-relaxed text-lg">
              Diabetic foot ulcers. Venous and arterial wounds. Surgical wounds that
              stalled. Atypical wounds and burns. We&apos;ve healed them — including
              the limbs other clinics couldn&apos;t save.
            </p>
            <Link
              href="/services/wound-care"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[--color-rose-deep] hover:text-[--color-rose] border-b border-[--color-rose-soft] pb-1"
            >
              See our wound care approach →
            </Link>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {[
                  "Diabetic foot ulcers",
                  "Pressure injuries (bedsores)",
                  "Venous stasis ulcers",
                  "Arterial / ischemic ulcers",
                  "Surgical wounds (dehisced, non-healing)",
                  "Traumatic wounds",
                  "Burns",
                  "Skin tears in fragile skin",
                  "Atypical wounds",
                  "Post-amputation site care",
                ].map((c) => (
                  <li key={c} className="flex items-baseline gap-3 border-b border-[--color-border] py-3">
                    <span className="font-mono text-[10px] text-[--color-rose]">●</span>
                    <span className="text-[--color-ink]">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Providers strip */}
      <section className="border-y border-[--color-border] bg-[--color-linen-warm]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
          <Reveal className="mb-10">
            <div className="eyebrow mb-3">Meet the team</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Two nurse practitioners. <span className="h-serif text-[--color-rose]">Sixty-four years</span> at the bedside.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {PROVIDERS.map((p) => (
              <Reveal key={p.id}>
                <div className="card p-8 h-full">
                  <div className="eyebrow mb-3">{p.role.split(" · ")[0]}</div>
                  <h3 className="font-display text-2xl text-[--color-plum] leading-tight">
                    {p.name}<span className="text-[--color-muted] font-normal text-base">, {p.credentials}</span>
                  </h3>
                  <p className="mt-5 text-[--color-muted] leading-relaxed text-[15px]">{p.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.specialties.map((sp) => (
                      <span key={sp} className="text-[11px] font-mono uppercase tracking-[0.18em] text-[--color-rose-deep] bg-[--color-linen] px-3 py-1 rounded-full border border-[--color-border]">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the specialty — the full clinic services grid */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
        <Reveal className="mb-12 flex items-end justify-between gap-8 flex-wrap">
          <div className="max-w-[40ch]">
            <div className="eyebrow mb-3">Everything else we do</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              A full clinic <span className="h-serif text-[--color-rose]">behind the specialty</span>.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-[--color-muted] hover:text-[--color-plum] underline underline-offset-4">
            See all services →
          </Link>
        </Reveal>

        <div className="grid gap-px bg-[--color-border] border border-[--color-border] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter(s => !s.slug).map((s) => (
            <div key={s.id} className="bg-white p-7 hover:bg-[--color-linen] transition-colors">
              <h3 className="font-display text-lg text-[--color-plum] leading-tight">{s.name}</h3>
              <p className="mt-3 text-[--color-muted] text-[14px] leading-relaxed">{s.short}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations + hours */}
      <section className="border-t border-[--color-border] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <div className="eyebrow mb-3">Find us</div>
              <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
                Two clinics, <span className="h-serif text-[--color-rose]">one phone number</span>.
              </h2>
              <p className="mt-5 text-[--color-muted] leading-relaxed">
                Walk in or call ahead. The same team. The same approach.
              </p>
              <a
                href={`tel:${CLINIC.phone}`}
                className="mt-8 inline-block font-mono text-2xl text-[--color-plum] hover:text-[--color-rose]"
              >
                {CLINIC.phoneDisplay}
              </a>
            </Reveal>

            <div className="md:col-span-7 grid gap-6 sm:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <Reveal key={loc.id}>
                  <div className="card p-7 h-full">
                    <div className="eyebrow mb-2">{loc.name}</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                      target="_blank"
                      rel="noopener"
                      className="block text-[--color-plum] hover:text-[--color-rose] mb-4 leading-relaxed"
                    >
                      {loc.street}<br/>
                      {loc.city}, {loc.state} {loc.zip}
                    </a>
                    {loc.notes && (
                      <p className="text-[13px] text-[--color-muted] mb-4">{loc.notes}</p>
                    )}
                    <div className="text-[12px] font-mono uppercase tracking-[0.18em] text-[--color-muted] border-t border-[--color-border] pt-3">
                      {HOURS.filter(h => h.hours !== "Closed")[0]?.hours} · Mon–Fri
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-y border-[--color-border] bg-[--color-plum] text-[--color-linen]">
        <div className="mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10">
          <Reveal>
            <p className="h-serif text-[--color-rose-soft]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              It&apos;s your time to live your best life.
            </p>
            <h2 className="mt-6 h-display text-[--color-linen]" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", lineHeight: 1.05 }}>
              Walk in. Call. Or<br/>
              <span className="h-serif text-[--color-rose-soft]">tell us about it first</span>.
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-3 bg-[--color-rose] text-white px-7 py-4 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors"
              >
                Call {CLINIC.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[--color-linen]/30 text-[--color-linen] px-7 py-4 font-semibold rounded-full hover:border-[--color-linen] transition-colors"
              >
                Request an appointment →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
