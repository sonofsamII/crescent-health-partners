import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About — Built by nurses. Run for patients.",
  description:
    "Crescent Health Partners is a nurse-practitioner-owned wound and medical clinic in Sumter and Columbia, SC. Meet Lisa Rivera, FNP-C, WCC and Kimberly Jackson, AGNP-C.",
};

/*
 * v0.2 About page — long-form provider bios per the brief.
 * Tone: restrained, serif-led, refined community-medicine.
 *
 * Bio copy below is the brief-provided placeholder language with
 * [PLACEHOLDER — Sam to confirm or edit] marker preserved.
 */

const LISA_BIO_LONG = `Lisa has been a nurse for 38 years. She is a board-certified Family Nurse Practitioner and a Certified Wound Care Specialist, with additional training in hyperbaric oxygen therapy. She has spent the majority of her career caring for patients other clinics gave up on — chronic wounds, diabetic ulcers, vascular complications — and built Crescent so they would have a place to go.`;

const KIM_BIO_LONG = `Kim has been a nurse for 26 years. She is a board-certified Adult-Gerontology Nurse Practitioner, a graduate of the University of South Carolina ('97), and a fluent Spanish speaker. She is the co-founder of Sumter's only free-standing wound care clinic, and a believer that primary care should mean primary access.`;

const STORY_PARAS = [
  "Crescent Health Partners began as a question: where do patients go when the wound won't close, when the urgent-care line is two hours long, when the next available primary-care appointment is six weeks out?",
  "Lisa and Kim spent decades watching the answer be \"nowhere.\" Diabetic ulcers that should have healed in weeks went on for years. Drivers missed loads because they couldn't get a DOT physical scheduled. Patients in Sumter and the surrounding counties drove an hour to Columbia for routine care.",
  "So they built a clinic where every one of those things could happen, in one place, the same week you called. Wound care for the wounds that don't close. DOT physicals same-day. Drug testing for the employers. Primary care for everyone. Spanish spoken. Walk-ins welcome.",
  "It's a small practice on purpose. The team that answers the phone is the team that sees you. The provider who diagnoses you is the provider who follows up. That's the whole model. That's the whole point.",
];

export default function AboutPage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="border-b border-[--color-border] bg-[--color-cream]">
        <div className="mx-auto max-w-[1200px] px-6 py-28 text-center sm:px-10 sm:py-36">
          <div className="eyebrow mb-6">About Crescent Health Partners</div>
          <h1
            className="mx-auto h-display max-w-[22ch]"
            style={{ fontSize: "clamp(2.6rem, 6.4vw, 4.8rem)", lineHeight: 1.05 }}
          >
            Built by nurses.<br/>
            <em>Run for patients.</em>
          </h1>
          <p className="prose-body mx-auto mt-8 max-w-[58ch]">
            Crescent Health Partners is a nurse-practitioner-owned clinic in
            Sumter and Columbia, South Carolina. We specialize in wound care
            and run a full primary-care and occupational-health practice
            around it.
          </p>
        </div>
      </section>

      {/* ───── Story ───── */}
      <section className="bg-[--color-paper]">
        <div className="mx-auto max-w-[820px] px-6 py-24 sm:px-10 sm:py-28">
          <Reveal className="mb-12">
            <div className="eyebrow mb-4">Our story</div>
            <h2 className="h-display" style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
              Why we opened the practice.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-7">
            {STORY_PARAS.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="prose-body text-[17px]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Lisa long bio ───── */}
      <section className="border-y border-[--color-border] bg-[--color-cream]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="provider-photo mx-auto max-w-[360px]">
              <div className="provider-photo-initials" aria-hidden>LR</div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-[--color-muted]">
              Photo coming soon
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="eyebrow mb-4">Provider</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Lisa Rivera,<br/><span className="font-mono text-[--color-rose-deep] tracking-tight" style={{ fontSize: "0.5em" }}>MSN, FNP-C, WCC</span>
            </h2>
            <p className="prose-body mt-7">{LISA_BIO_LONG}</p>

            <div className="mt-8 grid gap-y-3 border-t border-[--color-border] pt-6 text-[14px] sm:grid-cols-2">
              {[
                ["Board certification", "Family Nurse Practitioner"],
                ["Wound care", "WCC — NAWCO certified"],
                ["Additional training", "Hyperbaric oxygen therapy"],
                ["Years in nursing", "38"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-muted]">{k}</span>
                  <span className="font-serif text-[--color-ink]">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.3em] text-[--color-muted]">
              [Placeholder — Sam to confirm or edit]
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── Kim long bio ───── */}
      <section className="bg-[--color-paper]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-7">
            <div className="eyebrow mb-4">Provider · Co-founder</div>
            <h2 className="h-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
              Kimberly Dianne Billie Jackson,<br/>
              <span className="font-mono text-[--color-rose-deep] tracking-tight" style={{ fontSize: "0.5em" }}>MSN, AGNP-C</span>
            </h2>
            <p className="prose-body mt-7">{KIM_BIO_LONG}</p>

            <div className="mt-8 grid gap-y-3 border-t border-[--color-border] pt-6 text-[14px] sm:grid-cols-2">
              {[
                ["Board certification", "Adult-Gerontology Primary Care NP"],
                ["Education", "University of South Carolina, '97"],
                ["Languages", "English · Conversational Spanish"],
                ["Years in nursing", "26"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[--color-muted]">{k}</span>
                  <span className="font-serif text-[--color-ink]">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.3em] text-[--color-muted]">
              [Placeholder — Sam to confirm or edit]
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={0.1}>
            <div className="provider-photo mx-auto max-w-[360px]">
              <div className="provider-photo-initials" aria-hidden>KJ</div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-[--color-muted]">
              Photo coming soon
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── Approach ───── */}
      <section className="border-y border-[--color-border] bg-[--color-cream-deep]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 sm:py-28">
          <Reveal className="mb-12">
            <div className="eyebrow mb-4">How we practice</div>
            <h2 className="h-display max-w-[24ch]" style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
              The clinic feels small <em>because it is.</em>
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                t: "We listen",
                d: "Your story matters. We don't rush the first visit, and we don't talk over you.",
              },
              {
                t: "We don't judge",
                d: "Whatever brought you in — weight, pain, a wound that smells, a question you've been too embarrassed to ask — we've heard it. We start there.",
              },
              {
                t: "We partner",
                d: "We are not the doctor handing down a verdict. We are partners in the work. You drive; we navigate.",
              },
            ].map((b) => (
              <Reveal key={b.t}>
                <div className="border-t-2 border-[--color-rose] pt-6">
                  <h3 className="h-display" style={{ fontSize: "1.6rem" }}>{b.t}</h3>
                  <p className="prose-body mt-4 text-[15.5px]">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="bg-[--color-ink] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 text-center sm:px-10 sm:py-28">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
              Come see for yourself
            </div>
            <h2
              className="mx-auto mt-6 max-w-[22ch] font-serif text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.08 }}
            >
              A clinic that <em className="text-[--color-rose-soft]">knows your name.</em>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-accent">
                Request appointment
              </Link>
              <a href={`tel:${CLINIC.phone}`} className="btn btn-ghost-light">
                Call {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
