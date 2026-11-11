"use client";

import SmoothImage from "./SmoothImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/queries";
import type { HomePageData } from "@/sanity/lib/queries";

type AboutProps = {
  data?: Pick<
    HomePageData,
    "aboutStatement" | "aboutImage" | "aboutBody"
  > | null;
};

// Image + biography are hidden for now; set to true to show them again.
const SHOW_DETAILS = false;

const EASE = [0.25, 0.1, 0.25, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function About({ data }: AboutProps) {
  const statement = data?.aboutStatement?.trim();
  const body = data?.aboutBody?.trim();

  const showDetails = SHOW_DETAILS && (data?.aboutImage || body);

  if (!statement && !showDetails) return null;

  return (
    <section
      id="about"
      className="w-full bg-[#f7f7f7] px-5 md:px-10 py-24 md:py-36">
      {/* Statement */}
      {statement && (
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <motion.h2
            {...reveal(0.1)}
            className="md:col-span-9 max-w-4xl text-[clamp(1.75rem,3.4vw,2.7rem)] text-[#4d4032] font-light leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}>
            {statement}
          </motion.h2>
        </div>
      )}

      {/* Image + body */}
      {showDetails && (
        <div className="mt-16 md:mt-28 grid gap-10 md:grid-cols-12 md:gap-10 items-end">
          {data?.aboutImage && (
            <motion.div
              {...reveal()}
              className="md:col-span-7 relative aspect-4/3 overflow-hidden">
              <SmoothImage
                src={urlFor(data.aboutImage).width(3840).quality(100).url()}
                lqip={data.aboutImage.lqip}
                alt="Emily Paige Designs floral arrangement"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                quality={100}
                className="object-cover object-center"
              />
            </motion.div>
          )}

          {body && (
            <motion.div
              {...reveal(0.15)}
              className="md:col-span-4 md:col-start-9 border-t border-[#4d4032]/15 pt-6">
              <p className="text-[0.9rem] text-[#4d4032]/75 font-light leading-[1.9] whitespace-pre-line">
                {body}
              </p>
              <Link
                href="/contact"
                className="inline-block mt-8 text-[11px] tracking-[0.25em] uppercase text-[#4d4032] border-b border-[#4d4032]/30 pb-1 hover:opacity-60 transition-opacity">
                Start an Inquiry
              </Link>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
