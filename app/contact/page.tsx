// app/contact/page.tsx
"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", message: "" };

function LineInput({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="line-input"
    />
  );
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);

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
      <main className="min-h-screen flex flex-col bg-cream p-3 md:p-4">
        <div className="flex-1 flex items-center justify-center py-4 md:py-20">
          <div
            className="relative w-full max-w-[1300px] overflow-hidden border-20 md:border-30 border-[#fcf9f5] "
            style={{ minHeight: 750 }}>
            <img
              src="/images/flowers1.jpg"
              alt="floral background"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[750px] px-6 text-center">
              <h2
                className="script text-white drop-shadow-lg leading-none -rotate-6"
                style={{
                  fontSize: "clamp(3.5rem,14vw,13rem)",
                  fontWeight: 700,
                }}>
                Thank You
              </h2>
              <p className="mt-6 font-body text-white text-[0.75rem] tracking-[0.18em] uppercase font-medium">
                We'll be in touch soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(EMPTY);
                }}
                className="mt-12 py-4 px-8 bg-white font-body text-[0.65rem] tracking-[0.2em] uppercase text-charcoal hover:bg-cream transition-colors duration-300">
                Send another message
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ── Contact form ──────────────────────────────────────────────────────────
  return (
    <main className="flex flex-col bg-[#f3ebde] p-3 md:p-4">
      {/* Header */}
      <header className="text-center py-20 md:py-28 animate-fade-up">
        <h1 className="font-heading script font-light text-[clamp(3rem,8vw,10rem)] text-charcoal leading-[1.02] mb-6">
          Get in Touch
        </h1>
        <p className="font-body text-[0.85rem] text-charcoal-soft font-light max-w-[340px] mx-auto leading-[1.85]">
          Donec mollis tincidunt fermentum. Duis ac ante at est iaculis feugiat
          at id nisl.
        </p>
      </header>

      <div className="flex items-center justify-center pb-20">
        <div className="relative w-full max-w-[1300px] bg-[#f7f3ed] border border-[#d4c9bb] border ß">
          {/* Dashed divider desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[45%] border-l border-dashed border-[#d4c9bb] z-10" />

          <div className="flex flex-col md:flex-row" style={{ minHeight: 750 }}>
            {/* Mobile image banner */}
            <div className="block md:hidden relative w-full h-80 overflow-hidden">
              <img
                src="/images/wedding2.jpg"
                alt="Floral editorial"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Desktop image panel */}
            <div className="hidden md:block md:w-[45%] p-6">
              <div className="relative w-full h-full overflow-hidden bg-cream-warm">
                <img
                  src="/images/wedding2.jpg"
                  alt="Floral editorial"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Form panel */}
            <div className="flex-1 flex flex-col px-6 sm:px-8 md:px-14 py-8 md:py-12 relative">
              {/* Decorative stamp */}
              <div className="hidden md:flex absolute top-7 right-7 w-[4.5rem] h-[4.5rem] border border-dashed border-parchment flex-col items-center justify-center">
                <img
                  src="/images/lilly.png"
                  className="w-10 object-contain"
                  alt=""
                />
              </div>

              {/* Mobile heading */}
              <div className="mb-7 md:hidden">
                <h2 className="font-heading text-xl text-charcoal font-light mb-1">
                  Inquiry Form
                </h2>
                <p className="font-body text-[0.7rem] text-charcoal-soft tracking-wide">
                  Tell us about your event and we'll be in touch.
                </p>
              </div>

              {/* Form */}
              <div className="flex-1 flex flex-col justify-end">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 md:gap-8 mt-4 md:mt-0">
                  <LineInput
                    placeholder="Your Name"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                  <LineInput
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={set("email")}
                    required
                  />
                  <textarea
                    placeholder="Tell us about your event..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="line-input resize-none"
                  />

                  <div className="flex justify-end items-center pt-1 pb-2 md:pb-0">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="font-body text-[0.7rem] tracking-[0.18em] uppercase text-charcoal-soft hover:text-charcoal transition-colors duration-200 disabled:opacity-50">
                      {submitting ? "Sending…" : "Send Message →"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
