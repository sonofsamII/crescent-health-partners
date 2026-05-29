import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Insurance & Payment",
  description:
    "Crescent Health Partners accepts most major insurance plans. Self-pay rates available for occupational health services, wellness snap shots, and concierge labs.",
};

export default function InsurancePage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Insurance &amp; Payment</div>
          <h1 className="h-display max-w-[22ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
            Coverage, payments, and<br/>
            <span className="h-serif text-[var(--color-rose)]">no surprises</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[var(--color-muted)] leading-relaxed text-lg">
            We accept most major insurance plans. We&apos;ll always tell you what your
            visit will cost before we run it — and for occupational health, wellness,
            and concierge services we have transparent self-pay rates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="card p-8 h-full">
              <div className="eyebrow mb-3">Insurance</div>
              <h2 className="font-display text-2xl text-[var(--color-plum)] mb-5 leading-tight">Most major plans accepted</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We accept most major commercial insurance plans for wound care
                and primary care visits. Call the clinic with your insurance
                card to verify coverage for your specific plan before your visit.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-ink)]">
                <li className="flex items-baseline gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="font-mono text-[10px] text-[var(--color-rose)]">●</span>
                  Commercial PPO &amp; HMO plans
                </li>
                <li className="flex items-baseline gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="font-mono text-[10px] text-[var(--color-rose)]">●</span>
                  Medicare (Part B + Advantage)
                </li>
                <li className="flex items-baseline gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="font-mono text-[10px] text-[var(--color-rose)]">●</span>
                  Medicaid (SC) — call to verify
                </li>
                <li className="flex items-baseline gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="font-mono text-[10px] text-[var(--color-rose)]">●</span>
                  Worker&apos;s compensation
                </li>
              </ul>
              <p className="text-[13px] text-[var(--color-muted)] mt-5 italic">
                Don&apos;t see your plan? Call us — we may still be in-network or
                able to bill out-of-network at a fair rate.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="card p-8 h-full">
              <div className="eyebrow mb-3">Self-pay</div>
              <h2 className="font-display text-2xl text-[var(--color-plum)] mb-5 leading-tight">Transparent cash rates</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Occupational health, wellness, and concierge services are
                typically self-pay. We post our rates and won&apos;t surprise you
                at checkout.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="text-[var(--color-ink)]">Student sports physical (13–17)</span>
                  <span className="font-mono text-[var(--color-rose-deep)]">$55</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="text-[var(--color-ink)]">DOT physical</span>
                  <span className="font-mono text-[var(--color-muted)]">Call for rate</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="text-[var(--color-ink)]">Drug screen (panel-dependent)</span>
                  <span className="font-mono text-[var(--color-muted)]">Call for rate</span>
                </li>
                <li className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] py-2">
                  <span className="text-[var(--color-ink)]">Wellness Snap Shot</span>
                  <span className="font-mono text-[var(--color-muted)]">Call for rate</span>
                </li>
              </ul>
              <p className="text-[13px] text-[var(--color-muted)] mt-5 italic">
                Gift certificates available for Wellness Snap Shots.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center sm:px-10">
          <Reveal>
            <p className="h-serif text-[var(--color-rose)]" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}>
              Have your card handy.
            </p>
            <h2 className="mt-4 h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Call to verify your specific plan.
            </h2>
            <a
              href={`tel:${CLINIC.phone}`}
              className="mt-8 inline-flex items-center gap-3 bg-[var(--color-rose)] text-white px-7 py-4 font-semibold rounded-full hover:bg-[var(--color-rose-deep)] transition-colors"
            >
              Call {CLINIC.phoneDisplay}
            </a>
            <div className="mt-4">
              <Link href="/contact" className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-plum)] underline underline-offset-4">
                Or send us a message →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
