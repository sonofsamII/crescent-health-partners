import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Wound care, DOT physicals, drug testing, wellness",
  description:
    "All clinical services at Crescent Health Partners — wound care, DOT physicals, drug testing, medical weight loss, wellness snap shots, IV hydration, and more.",
};

const CATEGORY_LABEL: Record<string, string> = {
  specialty: "Specialty care",
  occupational: "Occupational health",
  wellness: "Wellness",
  diagnostic: "Diagnostics",
};

export default function ServicesPage() {
  const byCategory: Record<string, typeof SERVICES> = {};
  for (const s of SERVICES) {
    byCategory[s.category] = byCategory[s.category] ?? [];
    byCategory[s.category].push(s);
  }

  return (
    <>
      <section className="border-b border-[var(--color-border)] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Services</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Wound care, <span className="h-serif text-[var(--color-rose)]">primary care</span>, and what your employer needs.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[var(--color-muted)] leading-relaxed text-lg">
            Full clinical menu below. The three pages with deep detail are the ones
            patients ask about most — wound care, DOT physicals, drug testing.
          </p>
        </div>
      </section>

      {Object.entries(byCategory).map(([cat, items]) => (
        <section key={cat} className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10">
          <Reveal className="mb-10">
            <div className="eyebrow mb-3">{CATEGORY_LABEL[cat]}</div>
            <div className="divider" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <div className="card card-hover p-7 h-full flex flex-col">
                  <h3 className="font-display text-xl text-[var(--color-plum)] leading-tight">{s.name}</h3>
                  <p className="mt-3 text-[var(--color-muted)] text-[14px] leading-relaxed mb-5">{s.short}</p>
                  <div className="mt-auto">
                    {s.slug ? (
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.22em] text-[var(--color-rose-deep)] hover:text-[var(--color-rose)]"
                      >
                        Deep page →
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Ask about this →
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10">
          <Reveal>
            <p className="h-serif text-[var(--color-rose)]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              Don&apos;t see something? Just ask.
            </p>
            <h2 className="mt-4 h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              We&apos;ll either do it or<br/>refer you to someone who does.
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-[var(--color-rose)] text-white px-7 py-4 font-semibold rounded-full hover:bg-[var(--color-rose-deep)] transition-colors"
            >
              Request an appointment →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
