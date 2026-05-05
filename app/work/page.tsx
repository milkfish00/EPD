"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GRID_IMAGES = [
  { src: "/images/flowers1.jpg", alt: "Floral arrangement" },
  { src: "/images/flowers2.JPG", alt: "Wedding flowers" },
  { src: "/images/flowers3.JPG", alt: "Bouquet detail" },
  { src: "/images/flowers4.JPG", alt: "Event styling" },
  { src: "/images/flowers5.png", alt: "Floral design" },
  { src: "/images/flowers7.png", alt: "Wedding styling" },
  { src: "/images/bouquet1.png", alt: "Bouquet" },
  { src: "/images/Bouquet2.png", alt: "Bouquet arrangement" },
];

const page = () => {
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
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-10 text-[0.6rem] tracking-[0.2em] uppercase text-stone-400">
          Wedding &amp; Event Floral Design
        </motion.p>
      </div>

      {/* Image grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 my-3">
        {GRID_IMAGES.map(({ src, alt }, i) => (
          <motion.div
            key={src}
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
              quality={90}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default page;
