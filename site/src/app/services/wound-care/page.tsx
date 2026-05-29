import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

const SITE_URL = "https://crescenthealthpartners.com";

export const metadata: Metadata = {
  title: "Wound Care in Sumter, SC — Diabetic, venous, arterial, chronic wounds",
  description:
    "NAWCO wound-care certified nurse practitioners. Physician-supervised wound care for diabetic foot ulcers, venous, arterial, chronic and atypical wounds. Sumter & Columbia, SC. Mobile wound care for hospice and home.",
  alternates: { canonical: `${SITE_URL}/services/wound-care` },
};

const FAQS = [
  {
    q: "What kinds of wounds do you treat at Crescent Health Partners?",
    a: "We treat slow-healing, chronic, diabetic, venous, arterial, atypical wounds, and burns. The most common cases we see are diabetic foot ulcers, venous stasis ulcers, surgical wounds that haven't closed, and pressure injuries.",
  },
  {
    q: "When should I see a wound care specialist instead of waiting?",
    a: "If a wound hasn't shown clear signs of healing in two to four weeks, you should see a wound specialist. Other red flags: redness spreading, fever, drainage that's increasing in volume or changing color, a wound that hurts more over time, exposed bone or tendon, or a diabetic foot wound of any size. Don't wait if you have diabetes and any open wound below the knee — bring it in.",
  },
  {
    q: "Do I need a referral to be seen for wound care?",
    a: "No. You can self-refer or walk in. We do also accept and welcome referrals from your primary care, surgeon, or specialist — and we'll communicate back to them with our findings and plan.",
  },
  {
    q: "What happens at a first wound care visit?",
    a: "We measure the wound, photograph it for the chart, and assess the tissue, drainage, and surrounding skin. We talk through your history — diabetes control, vascular status, prior treatments, what you've tried at home. We may order labs or imaging. You leave with a clear plan: dressings, what to do at home, what to avoid, and your follow-up.",
  },
  {
    q: "Do you offer hyperbaric oxygen therapy (HBOT)?",
    a: "We don't have a chamber on site, but we work closely with the nearest HBOT facilities and refer when it's medically indicated. Lisa Rivera, FNP-C, WCC is hyperbaric-trained and has supervised HBOT for many patients during her time at a dedicated wound center.",
  },
  {
    q: "What advanced wound treatments do you offer?",
    a: "Beyond standard wound care, we can order biologics, stem-cell modalities, and growth-factor therapies when the standard playbook stalls. We coordinate with local specialists for vascular evaluation, debridement, and HBOT when needed. The goal is closing the wound and saving the limb — we will assemble the team your wound needs.",
  },
  {
    q: "Do you offer mobile or in-home wound care?",
    a: "Yes. We provide mobile wound care for hospice patients, in-home patients who can't easily travel, and nursing facility patients. Call the clinic to arrange.",
  },
  {
    q: "Can I be seen for wound care if I'm already seeing another provider?",
    a: "Yes. We do second-opinion evaluations on slow-healing wounds and will share our findings with your existing provider. Many of our patients come to us when a wound just isn't closing — there's no judgment in seeking another set of eyes.",
  },
  {
    q: "What does a wound care visit cost?",
    a: "Pricing depends on the complexity of the wound, the supplies used, and whether procedures (debridement, advanced dressings, biologics) are performed. Many wound care visits are covered by insurance. Call the clinic for a specific quote before your visit.",
  },
  {
    q: "Where are you located?",
    a: "Our primary wound care location is 212 Broad St., Sumter, SC 29150. We also see patients at 7356 Garners Ferry Road, Suite 127, Columbia, SC 29209 (Tuesdays and Thursdays). Walk-ins welcome at both locations.",
  },
];

export default function WoundCarePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    name: "Wound Care",
    procedureType: "Therapeutic",
    bodyLocation: "Skin",
    description:
      "Evidence-based wound care for diabetic foot ulcers, venous stasis ulcers, arterial ulcers, pressure injuries, surgical wounds, atypical wounds, and burns. NAWCO-certified nurse practitioners with physician supervision.",
    indication: [
      { "@type": "MedicalIndication", name: "Diabetic foot ulcer" },
      { "@type": "MedicalIndication", name: "Venous stasis ulcer" },
      { "@type": "MedicalIndication", name: "Arterial / ischemic ulcer" },
      { "@type": "MedicalIndication", name: "Pressure ulcer" },
      { "@type": "MedicalIndication", name: "Non-healing surgical wound" },
      { "@type": "MedicalIndication", name: "Burn" },
    ],
    performedBy: { "@type": "MedicalBusiness", name: CLINIC.name, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />

      <section className="border-b border-[--color-border] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Specialty · Wound care</div>
          <h1 className="h-display max-w-[20ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            The wounds that <span className="h-serif text-[--color-rose]">don&apos;t close</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[--color-muted] leading-relaxed text-lg">
            Wound care is what we are known for. Two board-certified nurse
            practitioners — one NAWCO-certified, both with decades at the
            bedside — running a physician-supervised wound program out of
            our Sumter clinic. We see what the urgent-care line can&apos;t.
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

      {/* Conditions */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow mb-3">Conditions treated</div>
            <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              What we see <span className="h-serif text-[--color-rose]">most often</span>.
            </h2>
            <p className="mt-5 text-[--color-muted] leading-relaxed">
              We treat the wounds your primary care doctor doesn&apos;t have time
              for and the ones the ER sends you home from with a packet and a
              follow-up to figure out.
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {[
                  "Diabetic foot ulcers",
                  "Pressure injuries (bedsores)",
                  "Venous stasis ulcers",
                  "Arterial / ischemic ulcers",
                  "Surgical wounds (dehisced)",
                  "Traumatic wounds",
                  "Burns (1st–2nd degree)",
                  "Skin tears in fragile skin",
                  "Atypical wounds",
                  "Post-amputation site care",
                  "Diabetic nail care",
                  "Limb salvage cases",
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

      {/* What the visit looks like */}
      <section className="border-y border-[--color-border] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
          <Reveal className="mb-12">
            <div className="eyebrow mb-3">What to expect</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              The first wound care visit, <span className="h-serif text-[--color-rose]">step by step</span>.
            </h2>
          </Reveal>

          <ol className="grid gap-px bg-[--color-border] border border-[--color-border] md:grid-cols-4">
            {[
              { n: "01", t: "Measure & photograph", d: "Length, width, depth, tissue type. Photos go in your chart so we can track healing visit by visit." },
              { n: "02", t: "Assess vascular status", d: "Pulses, capillary refill, swelling. If we suspect arterial insufficiency, we refer for vascular workup." },
              { n: "03", t: "Plan & treat", d: "Cleaning, debridement if needed, the right dressing, your at-home regimen, and a clear follow-up cadence." },
              { n: "04", t: "Coordinate care", d: "Labs, imaging, biologics, HBOT referral — whatever the wound actually needs. We assemble the team." },
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

      {/* Mobile + advanced */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="card p-10 h-full">
              <div className="eyebrow mb-4">Beyond the standard</div>
              <h3 className="h-display text-2xl mb-5">Advanced modalities</h3>
              <p className="text-[--color-muted] leading-relaxed">
                When the standard playbook stalls — and sometimes it does — we
                can order biologics, growth-factor therapies, and stem-cell
                modalities. Lisa is hyperbaric-trained and has supervised HBOT
                for many patients. We refer to the nearest HBOT chamber when
                indicated.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card p-10 h-full">
              <div className="eyebrow mb-4">Can&apos;t get to us?</div>
              <h3 className="h-display text-2xl mb-5">Mobile wound care</h3>
              <p className="text-[--color-muted] leading-relaxed">
                We bring wound care to hospice, in-home, and nursing facility
                patients across Sumter and surrounding communities — Manning,
                Bishopville, Lee County. Call the clinic to arrange a visit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[--color-border] bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-24 sm:px-10">
          <Reveal className="mb-10">
            <div className="eyebrow mb-3">FAQ</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              Wound care, <span className="h-serif text-[--color-rose]">straight answers</span>.
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
        </div>
      </section>

      <section className="bg-[--color-plum] text-[--color-linen]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10">
          <Reveal>
            <p className="h-serif text-[--color-rose-soft]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              It takes a village to save limbs.
            </p>
            <h2 className="mt-6 h-display text-[--color-linen]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05 }}>
              Bring us the wound. We&apos;ll bring the team.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bg-[--color-rose] text-white px-7 py-4 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors">
                Request an appointment
              </Link>
              <a href={`tel:${CLINIC.phone}`} className="border border-[--color-linen]/30 text-[--color-linen] px-7 py-4 font-semibold rounded-full hover:border-[--color-linen] transition-colors">
                Call {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
