import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

const SITE_URL = "https://crescenthealthpartners.com";

export const metadata: Metadata = {
  title: "Drug Testing in Sumter, SC — DOT & Non-DOT, Same-Day",
  description:
    "CLIA-certified lab. DOT 5-panel, non-DOT 5/10-panel, pre-employment, random, post-accident, return-to-duty. Rapid in-office or send-out chain of custody. Sumter & Columbia, SC.",
  alternates: { canonical: `${SITE_URL}/services/drug-testing` },
};

const FAQS = [
  {
    q: "What types of drug tests do you offer?",
    a: "We perform DOT 5-panel chain-of-custody drug screens (FMCSA-required), non-DOT panels including 5-panel, 10-panel, and expanded panels, and TB screening (skin test and QuantiFERON Gold blood test). We do both in-office rapid screens and chain-of-custody send-outs to an accredited lab.",
  },
  {
    q: "Are you a certified lab?",
    a: "Yes. Crescent Health Partners is a CLIA-certified laboratory. All chain-of-custody specimens are sent to an accredited reference lab for confirmation. In-office rapid screens are useful for quick employer decisions; we always recommend chain-of-custody confirmation for any positive or contested rapid result.",
  },
  {
    q: "How long does an in-office rapid drug screen take?",
    a: "Most rapid drug screens give results in 5–10 minutes. We do the collection, observe the protocol, and hand you (or the employer) the result before you leave.",
  },
  {
    q: "What is a DOT chain-of-custody drug test?",
    a: "A DOT chain-of-custody drug test follows FMCSA-mandated procedures for collection, handling, and lab analysis of specimens for commercial drivers. The specimen is collected under strict observation, sealed, signed by both donor and collector, and sent to a HHS-certified laboratory with documented custody at every step. Results go through a Medical Review Officer (MRO).",
  },
  {
    q: "Do you do pre-employment, random, post-accident, and return-to-duty testing?",
    a: "Yes. We perform all DOT-required testing categories: pre-employment, random, reasonable suspicion, post-accident, return-to-duty, and follow-up testing. Same-day collection. Employers can call to set up an account for ongoing employee testing.",
  },
  {
    q: "Can I do my DOT physical and DOT drug screen at the same visit?",
    a: "Yes. Most drivers do both together — you save a trip and we save you time. Just let us know when you call.",
  },
  {
    q: "Do I need an appointment for a drug test?",
    a: "Walk-ins are welcome at both Sumter and Columbia locations during regular hours. Calling ahead helps us minimize your wait, especially if you need a DOT chain-of-custody specimen which requires more collector time.",
  },
  {
    q: "What do I need to bring for a drug screen?",
    a: "Bring a valid government-issued photo ID. For DOT tests, also bring the testing authorization form from your employer or designated employer representative (DER). For non-DOT tests where the employer has not set up an account with us, bring any forms they have given you.",
  },
  {
    q: "How much does a drug test cost?",
    a: "Pricing varies by panel and whether it is rapid in-office or chain-of-custody send-out. Call " + CLINIC.phoneDisplay + " for current pricing. We are typically priced below the local urgent care clinics for the same panel.",
  },
  {
    q: "Do you do TB testing for employers?",
    a: "Yes. We offer the standard PPD (Mantoux) TB skin test — planted in office, read by a nurse 48–72 hours later — and the QuantiFERON Gold TB blood test (sent out to an accredited lab). Either is acceptable for most healthcare and education employer requirements.",
  },
];

export default function DrugTestingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-[var(--color-border)] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Occupational health · Drug testing</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            Drug testing.<br/>
            <span className="h-serif text-[var(--color-rose)]">DOT, non-DOT, fast</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[var(--color-muted)] leading-relaxed text-lg">
            CLIA-certified lab. DOT chain-of-custody screens, non-DOT 5/10-panel,
            rapid in-office or send-out — we run the panel your employer needs.
            Walk-ins welcome at both Sumter and Columbia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-[var(--color-rose)] text-white px-7 py-3.5 font-semibold rounded-full hover:bg-[var(--color-rose-deep)] transition-colors">
              Set up an employer account
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="border border-[var(--color-plum)]/30 text-[var(--color-plum)] px-7 py-3.5 font-semibold rounded-full hover:border-[var(--color-plum)] transition-colors">
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Panels offered */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <Reveal className="mb-12">
          <div className="eyebrow mb-3">What we offer</div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
            The panel <span className="h-serif text-[var(--color-rose)]">your employer asked for</span>.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "DOT 5-panel", d: "FMCSA-required for commercial drivers. Chain of custody, accredited lab, MRO review." },
            { t: "Non-DOT 5-panel", d: "Standard pre-employment screen. Amphetamines, cocaine, opiates, PCP, THC." },
            { t: "Non-DOT 10-panel", d: "Expanded screen for higher-risk roles. Includes benzodiazepines, barbiturates, methadone, methaqualone, propoxyphene." },
            { t: "Rapid in-office", d: "Results in 5–10 minutes. Useful for quick employer decisions; positives confirmed by send-out." },
            { t: "Chain of custody", d: "Specimen sealed, signed, and tracked to an accredited lab. Required for DOT, recommended for legal." },
            { t: "TB testing", d: "PPD skin test (planted in office, read 48–72 hrs later) and QuantiFERON Gold blood test." },
          ].map((s) => (
            <Reveal key={s.t}>
              <div className="card p-7 h-full">
                <h3 className="font-display text-xl text-[var(--color-plum)] leading-tight">{s.t}</h3>
                <p className="mt-3 text-[var(--color-muted)] text-[14px] leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
          <Reveal className="mb-10">
            <div className="eyebrow mb-3">Testing categories</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              All <span className="h-serif text-[var(--color-rose)]">six categories</span> covered.
            </h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-3 md:grid-cols-2">
            {[
              "Pre-employment",
              "Random",
              "Reasonable suspicion",
              "Post-accident",
              "Return-to-duty",
              "Follow-up testing",
            ].map((c) => (
              <div key={c} className="flex items-baseline gap-3 border-b border-[var(--color-border)] py-3">
                <span className="font-mono text-[10px] text-[var(--color-rose)]">●</span>
                <span className="text-[var(--color-ink)]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[900px] px-6 py-24 sm:px-10">
        <Reveal className="mb-10">
          <div className="eyebrow mb-3">FAQ</div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Drug testing, <span className="h-serif text-[var(--color-rose)]">straight answers</span>.
          </h2>
        </Reveal>
        <dl className="space-y-2">
          {FAQS.map((f, i) => (
            <Reveal key={i}>
              <details className="group border border-[var(--color-border)] rounded-md overflow-hidden">
                <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6 p-5 hover:bg-[var(--color-linen)]">
                  <dt className="font-display text-[var(--color-plum)] text-lg leading-snug">{f.q}</dt>
                  <span className="text-[var(--color-rose)] font-mono text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <dd className="px-5 pb-5 text-[var(--color-muted)] leading-relaxed">{f.a}</dd>
              </details>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-[var(--color-plum)] text-[var(--color-linen)]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10">
          <Reveal>
            <h2 className="h-display text-[var(--color-linen)]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05 }}>
              Walk in. Or<br/>
              <span className="h-serif text-[var(--color-rose-soft)]">set up an employer account</span>.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${CLINIC.phone}`} className="bg-[var(--color-rose)] text-white px-7 py-4 font-semibold rounded-full hover:bg-[var(--color-rose-deep)] transition-colors">
                Call {CLINIC.phoneDisplay}
              </a>
              <Link href="/contact" className="border border-[var(--color-linen)]/30 text-[var(--color-linen)] px-7 py-4 font-semibold rounded-full hover:border-[var(--color-linen)] transition-colors">
                Set up an account →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
