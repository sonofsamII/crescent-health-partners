"use client";
import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { CLINIC } from "@/data/clinic";

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden hero-bg" style={{ minHeight: "min(96vh, 980px)" }}>
      <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between px-6 pb-16 pt-20 sm:px-10 sm:pt-28" style={{ minHeight: "min(96vh, 980px)" }}>
        <div className="flex items-center justify-between">
          <span className="eyebrow">Sumter · Columbia · South Carolina</span>
          <span className="hidden text-[11px] font-mono uppercase tracking-[0.22em] text-[--color-muted] sm:inline">
            Nurse-practitioner owned · Walk-ins welcome
          </span>
        </div>

        <div className="my-16 max-w-[26ch] sm:my-24">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="h-display"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.6rem)" }}
          >
            Wound care, and <span className="h-serif text-[--color-rose]">the kind of clinic</span> that knows your name.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-[52ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-[--color-muted]"
          >
            Crescent Health Partners is a nurse-practitioner-owned wound care
            clinic in Sumter and Columbia. We also do same-day DOT physicals,
            drug testing, wellness snap shots, medical weight loss, and the
            kind of primary-care visits you can actually get into. Walk-ins
            welcome.
          </motion.p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 border-t border-[--color-border] pt-8"
        >
          <MagneticButton href="/contact" variant="primary">
            Request an appointment
            <span aria-hidden>→</span>
          </MagneticButton>
          <a
            href={`tel:${CLINIC.phone}`}
            className="inline-flex items-center gap-3 border border-[--color-plum]/30 px-7 py-3.5 text-sm font-semibold rounded-full text-[--color-plum] hover:border-[--color-plum] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
            Call {CLINIC.phoneDisplay}
          </a>
          <span className="ml-auto text-[11px] font-mono uppercase tracking-[0.22em] text-[--color-muted]">
            Mon–Fri · 8:30 AM – 5 PM
          </span>
        </motion.div>
      </div>
    </section>
  );
}
