import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PROVIDERS, CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About — Our nurse practitioners and our approach to care",
  description:
    "Crescent Health Partners is a nurse-practitioner-owned wound and medical clinic in Sumter, SC. Meet Lisa Rivera, FNP-C, WCC and Kimberly Jackson, AGNP-C.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[--color-border] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">About</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Nurse-practitioner owned.<br/>
            <span className="h-serif text-[--color-rose]">Patient-focused</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[--color-muted] leading-relaxed text-lg">
            Crescent Health Partners, LLC was started by two board-certified nurse
            practitioners who wanted a clinic where patients are heard and
            wounds actually heal. We are warm, safe, private, and we don&apos;t
            judge. We are your <span className="h-serif">PINK Partners</span> in
            health and wellness.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-[1100px] px-6 py-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { t: "We listen", d: "Your story matters. We don't rush the first visit, and we don't talk over you." },
            { t: "We don't judge", d: "Whatever brought you in — weight, pain, a wound that smells, a question you've been too embarrassed to ask — we've heard it. We start there." },
            { t: "We partner", d: "We are not the doctor handing down a verdict. We are partners in the work. You drive; we navigate." },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="border-t border-[--color-rose] pt-6">
                <h3 className="font-display text-2xl text-[--color-plum] mb-3">{b.t}</h3>
                <p className="text-[--color-muted] leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="border-y border-[--color-border] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
          <Reveal className="mb-14">
            <div className="eyebrow mb-3">Meet the providers</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Two practitioners. <span className="h-serif text-[--color-rose]">Sixty-four years</span> at the bedside.
            </h2>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            {PROVIDERS.map((p) => (
              <Reveal key={p.id}>
                <article className="card p-10 h-full">
                  <div className="eyebrow mb-3">{p.role}</div>
                  <h3 className="font-display text-3xl text-[--color-plum] leading-tight">
                    {p.name}
                  </h3>
                  <div className="text-[--color-muted] mt-1 font-mono text-sm">{p.credentials}</div>
                  <p className="mt-6 text-[--color-ink] leading-relaxed">{p.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.specialties.map((sp) => (
                      <span
                        key={sp}
                        className="text-[11px] font-mono uppercase tracking-[0.18em] text-[--color-rose-deep] bg-[--color-linen] px-3 py-1 rounded-full border border-[--color-border]"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-24 text-center sm:px-10">
        <Reveal>
          <p className="h-serif text-[--color-rose]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
            It&apos;s your time to live your best life.
          </p>
          <h2 className="mt-6 h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.05 }}>
            Come see what a clinic feels like when<br/>
            <span className="h-serif text-[--color-rose]">someone actually knows you</span>.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="bg-[--color-rose] text-white px-7 py-4 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors">
              Request an appointment
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="border border-[--color-plum]/30 text-[--color-plum] px-7 py-4 font-semibold rounded-full hover:border-[--color-plum] transition-colors">
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
