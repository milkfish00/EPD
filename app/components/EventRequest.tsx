"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/queries";
import type { HomePageData } from "@/sanity/lib/queries";

type EventForm = { name: string; email: string; message: string };
const EMPTY: EventForm = { name: "", email: "", message: "" };

const lineInput =
  "w-full bg-transparent border-b border-stone-300 pb-2 text-[0.8rem] text-[#4d4032]/80 placeholder:text-[#4d4032]/40 outline-none focus:border-stone-600 transition-colors";

type EventRequestProps = {
  data?: Pick<
    HomePageData,
    "eventRequestImage" | "eventRequestHeading" | "eventRequestSubheading"
  > | null;
};

export default function EventRequest({ data }: EventRequestProps) {
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

  const bgSrc = data?.eventRequestImage
    ? urlFor(data.eventRequestImage).width(2560).quality(100).url()
    : null;

  const heading = data?.eventRequestHeading;
  const subheading = data?.eventRequestSubheading;

  return (
    <section className="relative w-full h-180 hidden md:block">
      {bgSrc && (
        <Image
          src={bgSrc}
          alt="Floral background"
          fill
          className="object-cover object-center brightness-[0.5] saturate-0"
        />
      )}
      <div className="absolute bottom-0 right-0 z-10 p-14">
        {submitted ? (
          <div className="bg-[#f7f7f7] p-12">
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
          <div className="bg-[#f7f7f7] w-160 p-12">
            <h2
              className="text-[clamp(1.8rem,3vw,2.8rem)] text-[#4d4032] font-light mb-2 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}>
              {heading}
            </h2>
            <p
              className="text-[0.85rem] text-[#4d4032]/50 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-heading)" }}>
              {subheading}
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
          </div>
        )}
      </div>
    </section>
  );
}
