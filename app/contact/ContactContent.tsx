"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { ContactPageData } from "@/sanity/lib/queries";

const inputClass =
  "w-full bg-transparent border-b border-stone-400 pb-2 text-[0.8rem] tracking-wide text-[#4d4032]/80 placeholder:text-[#4d4032]/40 outline-none focus:border-stone-600 transition-colors";

type ContactContentProps = {
  data: ContactPageData | null;
  bgSrc: string | null;
};

export default function ContactContent({ data, bgSrc }: ContactContentProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasSubmitted = useRef(false);

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

  const heading = data?.heading;
  const subheading = data?.subheading;
  const phone = data?.phone;
  const email = data?.email;
  const location = data?.location;

  return (
    <>
      <iframe
        name="contact-frame"
        title="contact-form-response"
        aria-hidden="true"
        onLoad={handleIframeLoad}
        style={{ display: "none" }}
      />

      {submitted ? (
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
              onClick={() => setSubmitted(false)}
              className="mt-12 text-[0.62rem] tracking-[0.2em] uppercase text-[#4d4032]/50 border-b border-stone-400 pb-0.5 hover:text-[#4d4032]/80 hover:border-stone-600 transition-colors">
              Send another message
            </button>
          </div>
        </main>
      ) : (
        <main className="min-h-screen bg-[#f7f7f7] pt-10 px-5 mt-2">
          <div className="flex h-[calc(100vh-5rem)]">
            <div className="hidden md:block md:w-1/2 relative">
              {bgSrc && (
                <Image
                  src={bgSrc}
                  alt="Emily Paige Designs"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>
            <div className="flex-1 bg-[#f2ece2] flex flex-col items-center justify-center px-8 lg:px-14 py-10">
              <div className="text-center mb-6">
                <h1
                  className="text-5xl text-[#4d4032]/80 font-light leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {heading}
                </h1>
              </div>
              <p
                className="text-md text-[#4d4032]/50 text-center leading-[1.8] max-w-80 mb-8"
                style={{ fontFamily: "var(--font-heading)" }}>
                {subheading}
              </p>

              {/* Form */}
              <form
                action="https://www.form-to-email.com/api/s/obPJG3qjVMAV"
                method="POST"
                encType="multipart/form-data"
                target="contact-frame"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full max-w-130">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your event…"
                  required
                  rows={3}
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
          <section className="flex flex-col items-center justify-center gap-12 px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center w-full max-w-7xl">
              <div className="flex flex-col gap-2">
                <p className="text-[#4d4032]/40 text-[0.65rem] tracking-wide uppercase font-light">
                  Phone
                </p>
                <a
                  href={`tel:${phone?.replace(/\s/g, "")}`}
                  className="text-[.8rem] text-[#4d4032]/65 hover:text-[#4d4032] transition-colors leading-relaxed">
                  {phone}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#4d4032]/40 text-[0.65rem] tracking-wide uppercase font-light">
                  Visit Us
                </p>
                <p className="text-[.8rem] text-[#4d4032]/65 leading-relaxed whitespace-pre-line">
                  {location}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#4d4032]/40 text-[0.65rem] tracking-wide uppercase font-light">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-[.8rem] text-[#4d4032]/65 hover:text-[#4d4032] transition-colors leading-relaxed">
                  {email}
                </a>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
