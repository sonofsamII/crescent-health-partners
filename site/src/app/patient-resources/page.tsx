import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Patient Resources — Forms, what to bring, what to expect",
  description:
    "What to bring to your visit at Crescent Health Partners, what your DOT physical or wound care appointment looks like, and how to prepare.",
};

const RESOURCES = [
  {
    title: "What to bring to your first visit",
    items: [
      "Photo ID",
      "Insurance card (if billing insurance)",
      "List of medications + dosages",
      "Brief medical history (allergies, surgeries, chronic conditions)",
      "Glasses/contacts if you use them",
    ],
  },
  {
    title: "Wound care visit prep",
    items: [
      "Take your current dressing off at home (or wait — we'll do it gently)",
      "Bring a list of dressings you've tried and what worked/didn't",
      "Bring any provider notes or prior wound photos",
      "If you have diabetes, bring your recent A1C if you have it",
      "Wear loose, easy-to-roll-up clothing if the wound is on the leg or foot",
    ],
  },
  {
    title: "DOT physical prep",
    items: [
      "Photo ID + CDL or permit",
      "Complete medication list with dosages",
      "Sleep apnea: 30-day CPAP compliance report",
      "Diabetes: most recent A1C",
      "Cardiac history: stress test, EKG, specialist note",
      "Hypertension: home BP log if you keep one",
      "Glasses, contacts, hearing aids if used",
    ],
  },
  {
    title: "Drug screen prep",
    items: [
      "Photo ID",
      "Testing authorization form from your employer (DOT and non-DOT)",
      "Be hydrated, but don't overdo it before your test",
      "Plan for 30–60 min for a DOT chain-of-custody specimen",
    ],
  },
  {
    title: "Wellness Snap Shot prep",
    items: [
      "Fasting recommended if cholesterol/glucose panel ordered (8–12 hours, water OK)",
      "Bring your questions — we leave time for them",
      "Mental-health questionnaire is part of every snap shot; that's intentional",
    ],
  },
] as const;

export default function PatientResourcesPage() {
  return (
    <>
      <section className="border-b border-[--color-border] hero-bg">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="eyebrow mb-5">Patient resources</div>
          <h1 className="h-display max-w-[22ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}>
            What to bring.<br/>
            <span className="h-serif text-[--color-rose]">What to expect</span>.
          </h1>
          <p className="mt-8 max-w-[58ch] text-[--color-muted] leading-relaxed text-lg">
            We try to make every visit faster than the urgent-care line. Here&apos;s
            how to help us help you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <article className="card p-8 h-full">
                <h2 className="font-display text-xl text-[--color-plum] mb-4 leading-tight">{r.title}</h2>
                <ul className="space-y-2.5 text-sm">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-[--color-rose]">●</span>
                      <span className="text-[--color-ink] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[--color-border] bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center sm:px-10">
          <Reveal>
            <h2 className="h-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Forms can come via email <span className="h-serif text-[--color-rose]">before your visit</span>.
            </h2>
            <p className="mt-5 text-[--color-muted] leading-relaxed">
              When you book, we send DOT and intake forms to your email so you
              can fill them out at home. Cuts the in-clinic visit in half.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bg-[--color-rose] text-white px-7 py-4 font-semibold rounded-full hover:bg-[--color-rose-deep] transition-colors">
                Request an appointment
              </Link>
              <a href={`tel:${CLINIC.phone}`} className="border border-[--color-plum]/30 text-[--color-plum] px-7 py-4 font-semibold rounded-full hover:border-[--color-plum] transition-colors">
                Call {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
