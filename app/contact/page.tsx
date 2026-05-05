"use client";

import { useState } from "react";
import Image from "next/image";

type FormState = { name: string; email: string; message: string };

const EMPTY: FormState = { name: "", email: "", message: "" };

const inputClass =
  "w-full bg-transparent border-b border-stone-400 pb-2 text-[0.8rem] tracking-wide text-[#4d4032]/80 placeholder:text-[#4d4032]/40 outline-none focus:border-stone-600 transition-colors";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  // ── Thank-you screen ──────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#ede8de]">
        <div className="text-center px-6">
          <p className="text-[0.58rem] tracking-[0.35em] uppercase text-[#4d4032]/40 my-10">
            Emily Paige Designs
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] text-[#4d4032]/80 font-light leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}>
            Thank you.
          </h2>
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[#4d4032]/50 mt-4">
            We&apos;ll be in touch soon.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(EMPTY);
            }}
            className="mt-12 text-[0.62rem] tracking-[0.2em] uppercase text-[#4d4032]/50 border-b border-stone-400 pb-0.5 hover:text-[#4d4032]/80 hover:border-stone-600 transition-colors">
            Send another message
          </button>
        </div>
      </main>
    );
  }

  // ── Contact page ──────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#f7f7f7] pt-10 px-5 mt-2">
      <div className="flex h-[calc(100vh-5rem)]">
        {/* ── Left: image panel (desktop only) ── */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/images/flowers1.jpg"
            alt="Emily Paige Designs"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* ── Right: content panel ── */}
        <div className="flex-1 bg-[#f2ece2] flex flex-col items-center justify-center px-8 lg:px-14 py-10">
          {/* Title */}
          <div className="text-center mb-6">
            <h1
              className="text-5xl text-[#4d4032]/80 font-light leading-snug tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}>
              Get In Touch
            </h1>
          </div>

          {/* Rule */}

          {/* Description */}
          <p
            className="text-md text-[#4d4032]/50 text-center leading-[1.8] max-w-80 mb-8"
            style={{ fontFamily: "var(--font-heading)" }}>
            We&apos;d love to hear about your vision. Tell us about your event
            and we&apos;ll be in touch.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-130">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => set("email")(e.target.value)}
              className={inputClass}
            />
            <textarea
              placeholder="Tell us about your event…"
              required
              rows={3}
              value={form.message}
              onChange={(e) => set("message")(e.target.value)}
              className={`${inputClass} resize-none`}
            />
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={submitting}
                className="text-[0.6rem] tracking-[0.22em] uppercase text-[#4d4032]/50 border-b border-stone-400 pb-0.5 hover:text-[#4d4032]/80 hover:border-stone-600 transition-colors disabled:opacity-40">
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Contact info section */}
      <section className="flex flex-col items-center justify-center gap-12 px-6 py-10">
        {/* 3-column contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center w-full max-w-7xl">
          <div className="flex flex-col gap-2">
            <p className=" text-[#4d4032]/40     text-[0.65rem] tracking-wide uppercase font-light transition-opacity hover:opacity-100">
              Phone
            </p>
            <a
              href="tel:+15550000000"
              className="text-[.8rem] text-[#4d4032]/65 hover:text-[#4d4032] transition-colors leading-relaxed">
              +1 (555) 000-0000
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-[#4d4032]/40     text-[0.65rem] tracking-wide uppercase font-light transition-opacity hover:opacity-100">
              Visit Us
            </p>
            <p className="text-[.8rem] text-[#4d4032]/65 leading-relaxed">
              123 San Marino St
              <br />
              California
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-[#4d4032]/40     text-[0.65rem] tracking-wide uppercase font-light transition-opacity hover:opacity-100">
              Email
            </p>
            <a
              href="mailto:hello@emilypaigedesigns.com"
              className="text-[.8rem] text-[#4d4032]/65 hover:text-[#4d4032] transition-colors leading-relaxed">
              hello@emilypaigedesigns.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
