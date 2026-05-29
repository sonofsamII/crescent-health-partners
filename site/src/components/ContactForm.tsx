"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Honeypot — bots fill this; real people don't see it.
    if (data.company) {
      setStatus("success");
      return;
    }
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error ?? "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-[var(--color-rose)] pt-8">
        <p className="h-serif text-2xl text-[var(--color-rose)]">Got it. Thank you.</p>
        <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
          We&apos;ll reach out the next business day. If your concern is urgent,
          please call <a href="tel:+18038834033" className="text-[var(--color-plum)] hover:text-[var(--color-rose)] underline underline-offset-2">(803) 883-4033</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" type="text" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" type="text" required autoComplete="family-name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <div>
        <label className="block">
          <span className="block text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--color-rose-deep)] mb-2">
            Reason for visit
          </span>
          <select
            name="reason"
            required
            defaultValue=""
            className="w-full bg-[var(--color-linen)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-ink)] focus:border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-soft)]"
          >
            <option value="" disabled>Pick the closest match</option>
            <option>Wound care evaluation</option>
            <option>DOT physical</option>
            <option>Drug screen (DOT or non-DOT)</option>
            <option>Wellness Snap Shot</option>
            <option>Medical weight loss consult</option>
            <option>IV hydration therapy</option>
            <option>Pre-employment physical</option>
            <option>Sports physical (13–17)</option>
            <option>Pregnancy / paternity testing</option>
            <option>Flu / COVID / respiratory testing</option>
            <option>Walk-in lab work</option>
            <option>Employer drug-screen account setup</option>
            <option>Insurance / coverage question</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div>
        <label className="block">
          <span className="block text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--color-rose-deep)] mb-2">
            Best time to call you back
          </span>
          <input
            type="text"
            name="callbackTime"
            placeholder="e.g. weekday mornings, after 5 PM, anytime"
            className="w-full bg-[var(--color-linen)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-ink)] focus:border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-soft)]"
          />
        </label>
      </div>

      <div>
        <label className="block">
          <span className="block text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--color-rose-deep)] mb-2">
            Tell us a little more (optional)
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="What's going on, any history we should know, preferred location..."
            className="w-full bg-[var(--color-linen)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-ink)] focus:border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-soft)]"
          />
        </label>
      </div>

      <div>
        <label className="block">
          <span className="block text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--color-rose-deep)] mb-2">
            Preferred location
          </span>
          <select
            name="location"
            defaultValue="Sumter"
            className="w-full bg-[var(--color-linen)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-ink)] focus:border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-soft)]"
          >
            <option>Sumter (212 Broad St)</option>
            <option>Columbia (Garners Ferry, Tue/Thu)</option>
            <option>Either / no preference</option>
          </select>
        </label>
      </div>

      <p className="text-[12px] text-[var(--color-muted)] italic">
        Please do not include sensitive medical history in this form. We&apos;ll cover that
        on the phone or in person where it&apos;s private.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--color-rose)] text-white px-7 py-3.5 font-semibold rounded-full hover:bg-[var(--color-rose-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message →"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700 mt-2">
          {errMsg || "Something didn't go through. Please try again or call us."}
        </p>
      )}
    </form>
  );
}

function Field({
  label, name, type = "text", required, autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--color-rose-deep)] mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-[var(--color-linen)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-ink)] focus:border-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-soft)]"
      />
    </label>
  );
}
