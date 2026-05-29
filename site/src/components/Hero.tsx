"use client";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { CLINIC } from "@/data/clinic";

/*
 * v0.2 Hero — full-bleed atmospheric medical video background, dark
 * scrim, centered serif statement headline. epionebh.com / emilmd.com
 * pattern translated for community wound care.
 */

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section
      className="relative isolate flex w-full overflow-hidden bg-[var(--color-ink)]"
      style={{ minHeight: "min(94vh, 920px)" }}
    >
      {/* Video bed */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Scrim */}
      <div className="hero-scrim" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-14">
        {/* Top eyebrow row */}
        <div className="flex items-center justify-between text-white/85">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.32em]">
            Wound &amp; Medical Clinic · Sumter · Columbia · SC
          </span>
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.32em] sm:inline">
            Mon – Fri · 8:30 AM – 5 PM
          </span>
        </div>

        {/* Centered hero copy */}
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center text-white">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-serif text-balance"
            style={{
              fontSize: "clamp(2.6rem, 6.4vw, 4.8rem)",
              lineHeight: 1.06,
              letterSpacing: "0.01em",
              fontWeight: 400,
            }}
          >
            The clinic where{" "}
            <em className="text-[var(--color-rose-soft)] not-italic" style={{ fontStyle: "italic" }}>
              care is the practice
            </em>
            .
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="mt-7 max-w-[58ch] text-[clamp(1.05rem,1.3vw,1.18rem)] leading-relaxed text-white/85"
          >
            Nurse-practitioner-owned wound care, DOT physicals, drug testing,
            and full primary care from a team that knows your name. Walk-ins
            welcome at both locations.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn btn-accent">
              Request appointment
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="btn btn-ghost-light">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {CLINIC.phoneDisplay}
            </a>
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 gap-y-2 border-t border-white/15 pt-6 text-[10.5px] font-mono uppercase tracking-[0.28em] text-white/70 sm:grid-cols-4"
        >
          <div>NAWCO Wound Certified</div>
          <div>Certified DOT Examiners</div>
          <div>CLIA-Certified Lab</div>
          <div>Walk-Ins Welcome</div>
        </motion.div>
      </div>
    </section>
  );
}
