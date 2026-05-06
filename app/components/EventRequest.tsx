"use client";

import { useRef, useState } from "react";
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
  const hasSubmitted = useRef(false);

  const set = (key: keyof EventForm) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = () => {
    hasSubmitted.current = true;
    setSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (hasSubmitted.current) {
      hasSubmitted.current = false;
      setSubmitting(false);
      setSubmitted(true);
    }
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
          <div className="bg-[#f7f7f7] w-160 p-12 min-h-96 flex flex-col justify-center">
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
          <div className="bg-[#f7f7f7] w-160 p-12 min-h-96">
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

            <form
              action="https://www.form-to-email.com/api/s/SGpjk3Lq8Dya"
              method="POST"
              encType="multipart/form-data"
              target="contact-frame"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6">
              {" "}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={lineInput}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className={lineInput}
              />
              <textarea
                name="message"
                placeholder="Tell us about your event…"
                required
                rows={3}
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
      <iframe
        name="contact-frame"
        title="contact-form-response"
        aria-hidden="true"
        onLoad={handleIframeLoad}
        style={{ display: "none" }}
      />
    </section>
  );
}
