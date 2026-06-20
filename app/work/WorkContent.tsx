"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WorkImage = { src: string; alt: string; key: string };

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-3 px-5 my-3">
        {images.map(({ src, alt, key }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.07,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative aspect-4/5 overflow-hidden group">
            <Image
              src={src}
              alt={alt}
              fill
              priority={i < 4}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
