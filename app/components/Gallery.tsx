"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { urlFor } from "@/sanity/lib/queries";
import type { GalleryItem as SanityItem } from "@/sanity/lib/queries";

type GalleryProps = {
  items?: SanityItem[];
};

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
  href: string;
  aspect: string;
};

type PairBlock = {
  type: "pair";
  left: GalleryImage;
  right: GalleryImage;
  reversed?: boolean;
};

type FullBlock = {
  type: "full";
  src: string;
  alt: string;
};

type Block = PairBlock | FullBlock;

function GalleryImage({ item, index }: { item: GalleryImage; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.08,
      }}>
      <Link href={item.href} className="group block">
        <div className={`relative w-full ${item.aspect} overflow-hidden`}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            quality={100}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>
    </motion.div>
  );
}

function PairRow({
  block,
  blockIndex,
}: {
  block: PairBlock;
  blockIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const items = block.reversed
    ? [block.right, block.left]
    : [block.left, block.right];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-3 sm:gap-5 items-start mb-16">
      <div className="w-[62%]">
        <GalleryImage item={items[0]} index={blockIndex * 2} />
      </div>
      <div className="w-[58%] mt-12">
        <GalleryImage item={items[1]} index={blockIndex * 2 + 1} />
      </div>
    </motion.div>
  );
}

function FullRow({ block }: { block: FullBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full aspect-16/7 overflow-hidden mb-16">
      <Link href="/work" className="group block h-full">
        <Image
          src={block.src}
          alt={block.alt}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>
    </motion.div>
  );
}

const Gallery = ({ items }: GalleryProps) => {
  if (!items?.length) return null;

  const capped = items.slice(0, 9);

  // Build pair→full→pair→full blocks dynamically from Sanity items
  const blocks: Block[] = [];
  let i = 0;
  let pairIndex = 0;
  while (i < capped.length) {
    if (i + 1 < capped.length) {
      blocks.push({
        type: "pair",
        reversed: pairIndex % 2 === 1,
        left: {
          src: urlFor(capped[i]).width(2400).quality(100).url(),
          alt: capped[i].alt ?? "",
          title: "",
          category: "",
          href: "/work",
          aspect: "aspect-[4/5]",
        },
        right: {
          src: urlFor(capped[i + 1])
            .width(2400)
            .quality(100)
            .url(),
          alt: capped[i + 1].alt ?? "",
          title: "",
          category: "",
          href: "/work",
          aspect: "aspect-[3/4]",
        },
      });
      pairIndex++;
      i += 2;
    }
    if (i < capped.length) {
      blocks.push({
        type: "full",
        src: urlFor(capped[i]).width(2560).quality(100).url(),
        alt: capped[i].alt ?? "",
      });
      i++;
    }
  }

  let pairCount = 0;

  return (
    <section className="w-full px-10 pt-8 pb-24">
      {blocks.map((block, i) => {
        if (block.type === "pair") {
          const idx = pairCount++;
          return <PairRow key={i} block={block} blockIndex={idx} />;
        }
        return <FullRow key={i} block={block} />;
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-center mt-16">
        <Link
          href="/work"
          className="group relative inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-neutral-600 hover:text-neutral-900 transition-colors duration-300">
          <span>View All Work</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Gallery;
