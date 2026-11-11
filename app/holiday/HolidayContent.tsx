"use client";

import SmoothImage from "@/app/components/SmoothImage";
import { motion } from "framer-motion";

type HolidayImage = { src: string; lqip?: string; alt: string; key: string };

export type HolidaySectionView = {
  key: string;
  title: string;
  description?: string;
  images: HolidayImage[];
};

type HolidayContentProps = {
  heading?: string;
  subheading?: string;
  sections: HolidaySectionView[];
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

function Section({
  section,
  index,
}: {
  section: HolidaySectionView;
  index: number;
}) {
  const { title, description, images } = section;
  const threeUp = images.length >= 3;

  return (
    <section className="px-5 md:px-10 pt-16 md:pt-24">
      {/* Text — left-aligned, above the images */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="border-t border-[#4d4032]/15 pt-6 mb-8 md:mb-12 grid gap-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5 flex items-baseline gap-4">
          <span className="text-[0.6rem] tracking-[0.25em] text-[#4d4032]/50 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            className="text-[clamp(1.9rem,3.2vw,2.75rem)] text-[#4d4032] font-light leading-none"
            style={{ fontFamily: "var(--font-heading)" }}>
            {title}
          </h2>
        </div>
        {description && (
          <p className="md:col-span-5 md:col-start-8 max-w-md text-[0.85rem] text-[#4d4032]/75 font-light leading-[1.85] whitespace-pre-line">
            {description}
          </p>
        )}
      </motion.div>

      {/* Images */}
      {images.length > 0 && (
        <div
          className={`grid grid-cols-1 gap-3 ${
            threeUp ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}>
          {images.map(({ src, lqip, alt, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: EASE,
              }}
              className="relative aspect-4/5 overflow-hidden group">
              <SmoothImage
                src={src}
                lqip={lqip}
                alt={alt || title}
                fill
                sizes={
                  threeUp
                    ? "(max-width: 768px) 100vw, 33vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                quality={100}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function HolidayContent({
  heading,
  subheading,
  sections,
}: HolidayContentProps) {
  return (
    <main className="w-full bg-[#f7f7f7]">
      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center h-full py-30 md:py-50">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-[clamp(3rem,8vw,8rem)] text-stone-800 font-light leading-none text-center"
          style={{ fontFamily: "var(--font-heading)" }}>
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-10 text-[0.6rem] tracking-[0.2em] uppercase text-stone-400">
            {subheading}
          </motion.p>
        )}
      </div>

      {/* Door → Mantle → Stairs → Accent */}
      {sections.map((section, i) => (
        <Section key={section.key} section={section} index={i} />
      ))}

      <div className="pb-20 md:pb-28" />
    </main>
  );
}
