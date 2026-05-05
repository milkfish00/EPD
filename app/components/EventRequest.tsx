"use client";

import { useState } from "react";
import Image from "next/image";

type EventForm = { name: string; email: string; message: string };
const EMPTY: EventForm = { name: "", email: "", message: "" };

const lineInput =
  "w-full bg-transparent border-b border-stone-300 pb-2 text-[0.8rem] text-[#4d4032]/80 placeholder:text-[#4d4032]/40 outline-none focus:border-stone-600 transition-colors";

export default function EventRequest() {
  const [form, setForm] = useState<EventForm>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof EventForm) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="relative w-full h-150 hidden md:block">
      {/* Full-width background image */}
      <Image
        src="/images/flowers1.jpg"
        alt="Floral background"
        fill
        className="object-cover object-center brightness-[0.5] saturate-0"
      />

      {/* Centered form panel */}
      <div className="absolute inset-0 flex items-end mb-6 justify-end">
        <div className="w-full md:w-[42%] bg-[#f7f5f2] flex flex-col justify-center px-10 md:px-14 py-10 h-auto">
          {submitted ? (
            <div className="text-center">
              <h2
                className="text-[clamp(1.8rem,3vw,2.8rem)] text-[#4d4032]/80 font-light mb-3"
                style={{ fontFamily: "var(--font-heading)" }}>
                Thank you.
              </h2>
              <p className="text-[0.62rem] tracking-[0.25em] uppercase text-[#4d4032]/40">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <h2
                className="text-[clamp(1.8rem,3vw,2.8rem)] text-[#4d4032] font-light mb-2 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}>
                Inqury Form
              </h2>
              <p
                className="text-[0.85rem] text-[#4d4032]/50 leading-relaxed mb-8 "
                style={{ fontFamily: "var(--font-heading)" }}>
                Please complete this form and a member of our team will be in
                touch.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  className={lineInput}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  className={lineInput}
                />
                <textarea
                  placeholder="Tell us about your event…"
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className={`${lineInput} resize-none`}
                />
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="text-[0.6rem] tracking-[0.22em] uppercase text-[#4d4032]/50 border-b border-stone-400 pb-0.5 hover:text-[#4d4032]/80 hover:border-stone-600 transition-colors disabled:opacity-40">
                    {submitting ? "Sending…" : "Submit"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
