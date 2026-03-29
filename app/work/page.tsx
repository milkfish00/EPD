// app/work/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Reveal hook ─────────────────────────────────────────────────────────────
function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Reveal image ─────────────────────────────────────────────────────────────
function RevealImg({
  src,
  alt,
  height,
  delay = 0,
}: {
  src: string;
  alt: string;
  height: number;
  delay?: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{
        height,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
      />
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const HEIGHTS = { sm: 360, md: 540, lg: 780 } as const;

const ITEMS: { src: string; h: keyof typeof HEIGHTS }[] = [
  { src: "/images/bouquet1.png", h: "md" },
  { src: "/images/flowers5.png", h: "sm" },
  { src: "/images/flowers1.jpg", h: "md" },
  { src: "/images/Bouquet2.png", h: "md" },
  { src: "/images/flowers3.JPG", h: "md" },
  { src: "/images/flowers2.JPG", h: "lg" },
  { src: "/images/flowers4.JPG", h: "lg" },
  { src: "/images/flowers4.JPG", h: "lg" },
  { src: "/images/Bouquet2.png", h: "md" },
  { src: "/images/flowers7.png", h: "md" },
  { src: "/images/wedding2.jpg", h: "md" },
  { src: "/images/flowers5.png", h: "sm" },
  { src: "/images/Bouquet2.png", h: "lg" },
  { src: "/images/flowers1.jpg", h: "lg" },
  { src: "/images/flowers7.png", h: "sm" },
  { src: "/images/flowers4.JPG", h: "md" },
  { src: "/images/wedding2.jpg", h: "sm" },
  { src: "/images/flowers1.jpg", h: "md" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-5 md:px-8 py-10 bg-[#f3ebde]">
      {/* Header */}
      <header className="text-center py-20 md:py-28 animate-fade-up">
        <h1 className="font-heading script font-light text-[clamp(3rem,8vw,10rem)] text-charcoal leading-[1.02] mb-10">
          Gallery
        </h1>
        <p className="font-body text-[0.85rem] text-charcoal-soft font-light max-w-[340px] mx-auto leading-[1.85]">
          Donec mollis tincidunt fermentum. Duis ac ante at est iaculis feugiat
          at id nisl.
        </p>
      </header>

      {/* Masonry grid */}
      <div className="masonry gap-1.5 space-y-1.5">
        {ITEMS.map((item, i) => (
          <Link
            key={i}
            href="#"
            className="block break-inside-avoid group mb-1.5">
            <RevealImg
              src={item.src}
              alt="Floral arrangement"
              height={HEIGHTS[item.h]}
              delay={i * 60}
            />
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-24 flex items-center justify-center flex-col gap-6">
        <img
          src="/images/wheat.png"
          className="w-6 w-6 invert opacity-40"
          alt=""
        />

        <p className="font-heading text-[1rem] text-bark">
          Interested in working together?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 border border-soil text-soil no-underline
                     px-8 py-3.5 font-body text-[0.6rem] tracking-[0.26em] uppercase
                     hover:bg-soil hover:text-cream transition-all duration-300">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}
