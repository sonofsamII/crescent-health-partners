"use client";
import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
};

/** Cursor pulls the button toward it within a small range. Subtle, premium. */
export function MagneticButton({ children, href, className = "", variant = "primary", strength = 14 }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };
  const onLeave = () => setOffset({ x: 0, y: 0 });

  const base = "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-rose)] text-white hover:bg-[var(--color-rose-deep)]"
      : "border border-[var(--color-plum)]/30 text-[var(--color-plum)] hover:border-[var(--color-plum)]";

  const inner = (
    <motion.span
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.4 }}
      className="inline-flex items-center gap-2.5"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${styles} ${className}`}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </motion.button>
  );
}
