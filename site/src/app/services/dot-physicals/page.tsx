import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

const SITE_URL = "https://crescenthealthpartners.com";

export const metadata: Metadata = {
  title: "DOT Physicals in Sumter, SC — Same-day Certified DOT Examiner",
  description:
    "Same-day DOT physical exams by full-time Certified DOT Examiners in Sumter and Columbia, SC. Truck parking on site. Pre-visit electronic forms. Faster than urgent care.",
  alternates: { canonical: `${SITE_URL}/services/dot-physicals` },
};

const FAQS = [
  {
    q: "Can I get a DOT physical the same day at Crescent Health Partners?",
    a: "Yes — if you bring your paperwork, we typically complete DOT physical exams the same day. We send some of the forms ahead electronically so the visit moves faster. Call ahead so we can have you on the schedule.",
  },
  {
    q: "What do I need to bring to my DOT physical?",
    a: "Bring a valid government-issued photo ID, your current commercial driver's license (CDL) or learner's permit if applicable, a list of current medications with dosages, glasses or contacts if you wear them, and your hearing aids if you use them. If you have any chronic conditions (diabetes, hypertension, sleep apnea, heart disease), bring documentation from your treating provider — recent labs, a CPAP compliance report, a recent stress test, etc. The more documentation you bring, the better chance of a same-day certification.",
  },
  {
    q: "How much does a DOT physical cost?",
    a: "DOT physical pricing varies. Call us at " + CLINIC.phoneDisplay + " for our current rate — we are typically priced below the local urgent-care clinics for the same exam.",
  },
  {
    q: "How long is a DOT medical card good for?",
    a: "DOT medical certificates are typically valid for up to 2 years for drivers with no qualifying medical conditions. Drivers with certain conditions (controlled hypertension, diabetes on insulin, sleep apnea, etc.) may receive shorter certifications — commonly 1 year, 6 months, or 3 months — depending on the condition and how well it's controlled.",
  },
  {
    q: "Do you do DOT physicals for non-CDL drivers?",
    a: "Yes. We do DOT exams for commercial motor vehicle drivers as required by FMCSA, including CDL drivers, non-CDL CMV drivers (interstate trucks/buses over 10,000 lbs), and hazardous materials drivers.",
  },
  {
    q: "Is there truck parking at your clinic?",
    a: "Yes. Our Sumter clinic at 212 Broad St. has truck parking available — just ask us about it when you call so we can guide you in. Plan extra time for parking in downtown Sumter if your rig is full-size.",
  },
  {
    q: "Can I get my DOT drug screen done at the same visit?",
    a: "Yes. We are a CLIA-certified lab and perform DOT chain-of-custody drug screens in office. Many employers require the DOT physical and the DOT drug screen together — we can do both in one visit. Walk-ins welcome.",
  },
  {
    q: "What if I have a condition that requires extra documentation (sleep apnea, diabetes, hypertension)?",
    a: "Bring all of it. For sleep apnea, bring a CPAP compliance report showing 4+ hours of nightly use on most nights over the past 30 days. For diabetes, bring recent A1C labs and your current medication list. For hypertension, bring your home BP log if you keep one and your medication list. We may issue a shorter-duration card pending follow-up — that is normal and expected.",
  },
  {
    q: "Can drivers get medical weight loss or other care here too?",
    a: "Yes. We offer medical weight loss, men's health check-ups, and primary-care-style visits at the same clinic. Many drivers tell us it is easier to have all their medical needs at one place that knows them — and we are open Mon–Fri 8:30 AM – 5 PM at both Sumter and Columbia locations.",
  },
];

export default function DotPhysicalsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const examSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: "DOT Physical Examination",
    description:
      "FMCSA-compliant medical examination performed by Certified DOT Examiners. Includes vision, hearing, blood pressure, urinalysis, full physical, and medical history review.",
    usedToDiagnose: [
      { "@type": "MedicalCondition", name: "Hypertension" },
      { "@type": "MedicalCondition", name: "Diabetes mellitus" },
      { "@type": "MedicalCondition", name: "Obstructive sleep apnea" },
    ],
    performedBy: { "@type": "MedicalBusiness", name: CLINIC.name, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(examSchema) }} />

      <section className="border-b border-[--color-border] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Occupational health · DOT</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            DOT physicals.<br/>
            <span className="h-serif text-[--color-rose]">Same day. Truck parking.</span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-[--color-muted] leading-relaxed text-lg">
            Full-time Certified DOT Examiners on staff. We send some of the
            paperwork ahead electronically so the visit goes faster. Bring your
            documentation and we&apos;ll usually have you certified the same day.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-[--color-rose] text-white px-7 py-3.5 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors">
              Request an appointment
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="border border-[--color-plum]/30 text-[--color-plum] px-7 py-3.5 font-semibold rounded-full hover:border-[--color-plum] transition-colors">
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow mb-3">Before you come in</div>
            <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              What to <span className="h-serif text-[--color-rose]">bring</span>.
            </h2>
            <p className="mt-5 text-[--color-muted] leading-relaxed">
              Same-day certification depends on us having the documentation we
              need. The more you bring, the better.
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-1 gap-y-3">
                {[
                  "Valid government-issued photo ID",
                  "Current CDL or learner's permit (if applicable)",
                  "Complete list of medications + dosages",
                  "Glasses, contacts, or hearing aids if you use them",
                  "Sleep apnea: CPAP compliance report (last 30 days)",
                  "Diabetes: most recent A1C and med list",
                  "Hypertension: home BP log if you keep one",
                  "Cardiac history: most recent stress test, EKG, or specialist note",
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

      {/* Visit walkthrough */}
      <section className="border-y border-[--color-border] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
          <Reveal className="mb-12">
            <div className="eyebrow mb-3">The visit</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Roughly 30–45 minutes, <span className="h-serif text-[--color-rose]">end to end</span>.
            </h2>
          </Reveal>

          <ol className="grid gap-px bg-[--color-border] border border-[--color-border] md:grid-cols-4">
            {[
              { n: "01", t: "Forms", d: "We send you the medical history forms electronically ahead of time. Fill them out at home — it cuts your visit time in half." },
              { n: "02", t: "Vitals + vision/hearing", d: "Blood pressure, vision test (with corrective lenses if you use them), hearing (whisper test or audiometry as needed)." },
              { n: "03", t: "Physical exam", d: "Head-to-toe DOT-required exam, urinalysis (protein/blood/sugar), review of any specialist documentation you brought." },
              { n: "04", t: "Card issued", d: "If you meet criteria, you walk out with your medical certificate. If you need follow-up, we tell you exactly what we need and when." },
            ].map((s) => (
              <li key={s.n} className="bg-white p-7">
                <div className="font-mono text-[11px] text-[--color-rose-deep] tracking-[0.22em] mb-3">{s.n}</div>
                <h3 className="font-display text-lg text-[--color-plum] mb-3">{s.t}</h3>
                <p className="text-[14px] text-[--color-muted] leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[900px] px-6 py-24 sm:px-10">
        <Reveal className="mb-10">
          <div className="eyebrow mb-3">FAQ</div>
          <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            DOT physicals, <span className="h-serif text-[--color-rose]">straight answers</span>.
          </h2>
        </Reveal>
        <dl className="space-y-2">
          {FAQS.map((f, i) => (
            <Reveal key={i}>
              <details className="group border border-[--color-border] rounded-md overflow-hidden">
                <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6 p-5 hover:bg-[--color-linen]">
                  <dt className="font-display text-[--color-plum] text-lg leading-snug">{f.q}</dt>
                  <span className="text-[--color-rose] font-mono text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <dd className="px-5 pb-5 text-[--color-muted] leading-relaxed">{f.a}</dd>
              </details>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-[--color-plum] text-[--color-linen]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10">
          <Reveal>
            <h2 className="h-display text-[--color-linen]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05 }}>
              Show up. Bring the paperwork.<br/>
              <span className="h-serif text-[--color-rose-soft]">Drive away certified</span>.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${CLINIC.phone}`} className="bg-[--color-rose] text-white px-7 py-4 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors">
                Call {CLINIC.phoneDisplay}
              </a>
              <Link href="/contact" className="border border-[--color-linen]/30 text-[--color-linen] px-7 py-4 font-semibold rounded-full hover:border-[--color-linen] transition-colors">
                Request an appointment →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
