"use client";

import SmoothImage from "@/app/components/SmoothImage";
import { motion } from "framer-motion";

type WorkImage = { src: string; lqip?: string; alt: string; key: string };

type WorkContentProps = {
  heading?: string;
  subheading?: string;
  images: WorkImage[];
};

export default function WorkContent({
  heading,
  subheading,
  images,
}: WorkContentProps) {
  return (
    <main className="w-full bg-[#f7f7f7]">
      {/* Header */}
      <div className="relative flex flex-col items-center justify-center h-full py-30 md:py-50">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(3rem,8vw,8rem)] text-stone-800 font-light leading-none text-center"
          style={{ fontFamily: "var(--font-heading)" }}>
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-10 text-[0.6rem] tracking-[0.2em] uppercase text-stone-400">
          {subheading}
        </motion.p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-5 my-3">
        {images.map(({ src, lqip, alt, key }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative aspect-4/5 overflow-hidden group">
            <SmoothImage
              src={src}
              lqip={lqip}
              alt={alt}
              fill
              priority={i < 3}
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
