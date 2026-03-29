// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "framer-motion";
import Gallery from "../components/Gallery";

// ─── Config ───────────────────────────────────────────────────────────────────
const BRAND = "Emily Paige Designs";

const HERO_IMAGES = [
  "/images/weding2.jpg",
  "/images/flowers1.jpg",
  "/images/flowers2.JPG",
  "/images/flowers3.JPG",
  "/images/flowers4.JPG",
  "/images/flowers5.png",
  "/images/flowers7.png",
  "/images/wedding2.jpg",
  "/images/flowers2.JPG",
  "/images/flowers3.JPG",
];

const LEFT_LINKS = [
  { href: "/home", label: "Home" },
  { href: "/home#about", label: "About" },
];
const RIGHT_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:hello@emilypaigedesigns.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

// ─── Tilt Hook ─────────────────────────────────────────────
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return ref;
}

// ─── Editorial Collage Section ─────────────────────────────

function DesktopCollage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const images = ["/images/flowers1.jpg", "/images/flowers3.JPG"];

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total === 0 ? 0 : scrolled / total;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const p1 = Math.min(Math.max(progress * 1.4, 0), 1);
  const p2 = Math.min(Math.max(progress * 1.4 - 0.35, 0), 1);

  return (
    <section
      ref={sectionRef}
      className="relative bg-color-background"
      style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <h2 className="absolute text-center font-heading text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-charcoal max-w-[900px] px-6 z-10">
          Lorem ipsum dolor sit amet,{" "}
          <span className="italic">consectetur</span> adipiscing elit.
        </h2>

        {/* LEFT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "30%",
            left: "8%",
            opacity: p1,
            transform: `translateY(${(1 - p1) * 60}px) scale(${0.96 + p1 * 0.04})`,
          }}>
          <div className="w-[300px] aspect-[3/4] overflow-hidden">
            <img src={images[0]} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="absolute"
          style={{
            top: "55%",
            right: "8%",
            opacity: p2,
            transform: `translateY(${(1 - p2) * 60}px) scale(${0.96 + p2 * 0.04})`,
          }}>
          <div className="w-[280px] aspect-[3/4] overflow-hidden">
            <img src={images[1]} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Editorial Collage (Responsive) ─────────────────────────
function EditorialCollage() {
  return (
    <>
      {/* ── Desktop ───────────────── */}
      <div className="hidden md:block">
        <DesktopCollage />
      </div>

      {/* ── Mobile (Editorial Layout) ───────────── */}
      <section className="hidden bg-[#f6f1eb] px-6 py-20 flex flex-col items-center gap-12">
        <div className="max-w-[520px] mx-auto text-center">
          <h2 className="font-heading italic text-[3rem] leading-[1.1] text-charcoal mb-2">
            Welcome
          </h2>

          <p className="font-body text-[0.65rem] tracking-[0.35em] uppercase text-stone mb-8">
            To The Club
          </p>
        </div>

        <div className="w-80 h-[420px] overflow-hidden">
          <img
            src="/images/flowers1.jpg"
            className="w-full h-full object-cover grayscale"
            alt=""
          />
        </div>

        <div>
          <p className="text-[0.85rem] leading-[1.8] text-charcoal-soft mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi quis enim aliquam, et suscipit metus tincidunt.
            Pellentesque non sapien lorem. Nulla placerat erat eget suscipit
            lacus porta quis.
          </p>

          <p className="text-[0.85rem] leading-[1.8] text-charcoal-soft mb-12">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Morbi venenatis sed metus sit amet porta. Ut
            quis eleifend erat. Donec nec viverra mi, non laoreet nisi.
          </p>
        </div>
      </section>
    </>
  );
}
// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-30px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible] as const;
}

// ─── Parallax hook ────────────────────────────────────────────────────────────
// Writes translateY directly to the image DOM node — zero React re-renders,
// runs every rAF, buttery smooth.
function useParallax(speed = 0.38) {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const image = imageRef.current;
      if (!container || !image) return;

      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH / 2 - (rect.top + rect.height / 2)) / windowH;
      const offset = progress * rect.height * speed;

      image.style.transform = `translateY(${offset}px)`;
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return { containerRef, imageRef };
}

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(26px)",
  transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
});

const fadeIn = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transition: `opacity 1s ease ${delay}ms`,
});

// ─── Nav link ─────────────────────────────────────────────────────────────────
function NavLink({
  href,
  children,
  stuck,
}: {
  href: string;
  children: React.ReactNode;
  stuck: boolean;
}) {
  return (
    <Link
      href={href}
      className="font-body text-[0.65rem] tracking-[0.12em] uppercase text-charcoal-soft no-underline hover:text-charcoal transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-charcoal after:transition-[width] after:duration-300 hover:after:w-full"
      style={{
        opacity: stuck ? 1 : 0,
        transform: stuck ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: stuck ? "auto" : "none",
      }}>
      {children}
    </Link>
  );
}

// ─── Testimonials data ────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    from: "Sarah & James",
    event: "Wedding — Pasadena, CA",
    body: "Working with Emily Paige was the easiest decision we made for our wedding. Every arrangement felt like it had been pulled straight from a dream. Guests still ask us who did the flowers.",
  },
  {
    from: "Claire M.",
    event: "Intimate Dinner — San Marino",
    body: "I've never had flowers make me cry before. The centerpiece Emily created for our anniversary dinner was so thoughtful and so alive — it set the whole tone for the evening.",
  },
  {
    from: "The Hernandez Family",
    event: "Rehearsal Dinner — Arcadia",
    body: "From the first call to the last petal, everything was seamless. Emily listened to exactly what we wanted and delivered something even more beautiful than we imagined.",
  },
  {
    from: "Natalie & Priya",
    event: "Engagement Party — Monrovia",
    body: "Our guests thought we'd hired a team of ten. Emily did it all with such grace and care — the florals were extraordinary and the process was completely stress-free.",
  },
];

// ─── Postcard-style stamp dots ────────────────────────────────────────────────
// Renders the scalloped/perforated edge as a row of small circles
function StampEdge({ side }: { side: "top" | "bottom" | "left" | "right" }) {
  const isHorizontal = side === "top" || side === "bottom";
  const count = isHorizontal ? 22 : 14;
  const dots = Array.from({ length: count });

  if (isHorizontal) {
    return (
      <div
        className={`absolute left-0 right-0 flex justify-between px-2 pointer-events-none ${
          side === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"
        }`}>
        {dots.map((_, i) => (
          <span
            key={i}
            className="w-3.5 h-3.5 rounded-full bg-[rgba(14,9,5,0.52)]"
          />
        ))}
      </div>
    );
  }

  function TestimonialSliderMinimal({ visible }: { visible: boolean }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
      if (!visible) return;
      const id = setInterval(() => {
        setActive((p) => (p + 1) % TESTIMONIALS.length);
      }, 6000);
      return () => clearInterval(id);
    }, [visible]);

    const t = TESTIMONIALS[active];

    return (
      <div className="text-center max-w-[720px] mx-auto">
        <blockquote className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.5] font-light">
          “{t.body}”
        </blockquote>

        <p className="mt-6 font-body text-[0.65rem] tracking-[0.22em] uppercase text-white/70">
          {t.from} — {t.event}
        </p>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition ${
                i === active
                  ? "w-4 h-[2px] bg-white"
                  : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`absolute top-0 bottom-0 flex flex-col justify-between py-2 pointer-events-none ${
        side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}>
      {dots.map((_, i) => (
        <span
          key={i}
          className="w-3.5 h-3.5 rounded-full bg-[rgba(14,9,5,0.52)]"
        />
      ))}
    </div>
  );
}

function TestimonialSlider({ visible }: { visible: boolean }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(() => {
      goTo((active + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearTimeout(id);
  }, [active, visible]);

  const t = TESTIMONIALS[active];

  return (
    <div
      className="w-full max-w-[920px] md:max-w-[1100px] mx-auto"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms",
      }}>
      <div className="relative bg-[#f4efe8] px-14 md:px-20 py-14 md:py-18">
        <div className="absolute inset-0 border border-[#e2d8cc] pointer-events-none" />

        <div
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}>
          {/* FROM / TO */}
          <div className="flex justify-between mb-10">
            <div className="font-body text-[0.6rem] tracking-[0.24em] uppercase text-stone space-y-4">
              <div className="flex gap-3">
                <span className="opacity-60">From</span>
                <span className="border-b border-[#d8d0c4] text-charcoal w-56 md:w-72">
                  {t.from}
                </span>
              </div>
              <div className="flex gap-5">
                <span className="opacity-60">To</span>
                <span className="border-b border-[#d8d0c4] text-charcoal w-56 md:w-72">
                  Emily Paige
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e5ddd2] mb-10" />

          {/* MESSAGE */}
          <p className="font-heading font-light text-[clamp(1.4rem,2.4vw,2rem)] text-charcoal leading-[1.35] mb-10">
            {t.body}
          </p>

          {/* FOOTER */}
          <p className="font-body text-[0.6rem] tracking-[0.24em] uppercase text-stone">
            {t.event}
          </p>
        </div>
      </div>

      {/* DOT NAV */}
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 ${
              i === active
                ? "w-6 h-[2px] bg-white/80"
                : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [navStuck, setNavStuck] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const mobileBrandRef = useRef<HTMLDivElement>(null);

  const [s1Ref, s1] = useInView();
  const [s2Ref, s2] = useInView();
  const [s3Ref, s3] = useInView();
  const [s4Ref, s4] = useInView();

  const { containerRef: parallaxContainerRef, imageRef: parallaxImageRef } =
    useParallax(0.4);

  // Hero slideshow
  useEffect(() => {
    const id = setInterval(
      () => setCurrentImage((p) => (p + 1) % HERO_IMAGES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  // Desktop sticky nav sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setNavStuck(!e.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Mobile sticky nav
  useEffect(() => {
    const el = mobileBrandRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setMobileNavVisible(!e.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Mobile sticky nav ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] md:hidden bg-[#eee8df]"
        style={{
          opacity: mobileNavVisible ? 1 : 0,
          transform: mobileNavVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          pointerEvents: mobileNavVisible ? "auto" : "none",
        }}>
        <div className="flex items-center justify-between px-5 h-14">
          <Link
            href="/"
            className="font-heading text-sm font-light uppercase tracking-[0.1em] text-charcoal no-underline">
            {BRAND}
          </Link>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-end gap-1.5 w-9 h-9 bg-transparent border-none cursor-pointer focus:outline-none">
            <span
              className="block h-px bg-charcoal transition-all duration-300"
              style={{
                width: 22,
                transform: mobileMenuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-px bg-charcoal transition-all duration-300"
              style={{
                width: mobileMenuOpen ? 0 : 16,
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px bg-charcoal transition-all duration-300"
              style={{
                width: 22,
                transform: mobileMenuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
        <div className="h-px bg-parchment mx-5" />
      </nav>

      {/* ── Mobile hero ────────────────────────────────────────────────────── */}
      <div className="md:hidden relative flex flex-col  mx-3 mt-3">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "75svh" }}>
          {HERO_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Floral arrangement"
              className="hero-img"
              style={{ opacity: i === currentImage ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 noise z-[1]" />
        </div>

        <div
          ref={mobileBrandRef}
          className="flex flex-col items-center justify-center pt-5 pb-4">
          <h1 className="font-heading text-[2.8rem] font-light uppercase text-charcoal leading-[0.9] tracking-[-0.02em] text-center">
            {BRAND}
          </h1>
          <p className="font-body font-medium text-[0.6rem] tracking-[0.28em] uppercase text-stone mt-5">
            San Marino, California
          </p>
        </div>
      </div>

      {/* ── Mobile full-screen menu ────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-[200] md:hidden"
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}>
        <div
          className="absolute inset-0 bg-ink transition-opacity duration-500"
          style={{ opacity: mobileMenuOpen ? 0.97 : 0 }}
        />
        <div
          className="absolute inset-0 flex flex-col bg-ink mobile-nav-panel"
          style={{
            clipPath: mobileMenuOpen
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)",
          }}>
          <div className="flex items-center justify-between px-5 h-14">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-sm font-light uppercase tracking-[0.1em] text-gold-dim no-underline">
              {BRAND}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col justify-center items-end gap-1.5 w-9 h-9 bg-transparent border-none cursor-pointer focus:outline-none">
              <span
                className="block h-px bg-gold-dim w-[22px]"
                style={{ transform: "translateY(6px) rotate(45deg)" }}
              />
              <span className="block h-px bg-transparent w-0" />
              <span
                className="block h-px bg-gold-dim w-[22px]"
                style={{ transform: "translateY(-6px) rotate(-45deg)" }}
              />
            </button>
          </div>
          <div className="h-px bg-white/10 mx-5" />

          <div className="flex flex-col px-6 pt-12 gap-1 flex-1">
            {[...LEFT_LINKS, ...RIGHT_LINKS].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-gold-dim no-underline text-[2.4rem] font-light leading-[1.7] w-fit hover:opacity-50 transition-opacity duration-200"
                style={{
                  transform: mobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.23,1,0.32,1) ${100 + i * 65}ms, opacity 0.4s ease ${100 + i * 65}ms`,
                }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-end justify-between px-6 pb-10 pt-6">
            <address className="font-body text-[0.5rem] tracking-[0.2em] uppercase text-white/30 leading-loose">
              San Marino
              <br />
              California
            </address>
            <div className="flex flex-col items-end gap-1.5">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-body text-[0.5rem] tracking-[0.2em] uppercase text-white/30 no-underline hover:text-white/60 transition-colors duration-200"
                  style={{
                    transform: mobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(8px)",
                    opacity: mobileMenuOpen ? 0.7 : 0,
                    transition: `transform 0.4s ease ${380 + i * 45}ms, opacity 0.4s ease ${380 + i * 45}ms`,
                  }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop fixed hero ─────────────────────────────────────────────── */}
      <section className="hidden md:block  fixed -z-10 top-3 left-3 right-3 h-[70svh] overflow-hidden">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Floral arrangement"
            className="hero-img"
            style={{ opacity: i === currentImage ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 noise z-[1]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* ── Desktop scrollable content ─────────────────────────────────────── */}
      <main className="relative z-10 bg-cream md:mt-[calc(70svh+0.75rem)]">
        <div ref={sentinelRef} className="hidden md:block h-px -mt-px" />

        {/* Desktop sticky nav */}
        <nav
          className="hidden md:flex sticky top-0 z-50 items-center justify-between px-[clamp(1.5rem,4vw,3rem)] bg-[#eee8df] transition-[padding] duration-300"
          style={{ paddingBlock: navStuck ? "1.1rem" : "0" }}>
          <div className="flex items-center gap-[clamp(1.5rem,3.5vw,3rem)]">
            {LEFT_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} stuck={navStuck}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-soil no-underline whitespace-nowrap"
            style={{
              opacity: navStuck ? 1 : 0,
              transform: navStuck
                ? "translateX(-50%) translateY(0)"
                : "translateX(-50%) translateY(4px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}>
            {BRAND}
          </Link>

          <div className="flex items-center gap-[clamp(1.5rem,3.5vw,3rem)]">
            {RIGHT_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} stuck={navStuck}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {navStuck && <div className="hidden md:block h-px bg-parchment" />}

        {/* Desktop brand title */}
        <div className="hidden bg-color-background  md:block text-center py-8 pointer-events-none select-none">
          <h1 className="font-heading font-light uppercase tracking-[-0.025em] text-[clamp(4rem,15vw,10.5rem)] text-soil leading-[0.85] opacity-90">
            {BRAND}
          </h1>
          <p className="font-body font-medium text-[0.6rem] tracking-[0.28em] uppercase text-stone mt-6">
            San Marino, California
          </p>
        </div>

        <section>
          <EditorialCollage />
        </section>

        {/* ── § About (Consistent Editorial) ───────────────────────── */}
        <section
          id="about"
          className="bg-color-background px-4 md:px-12 py-20 md:py-56">
          <div className="max-w-9xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center justify-center md:items-end">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-[620px]">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-stone mb-6 hidden md:block">
                About Emily Paige
              </p>

              <h2 className="font-heading text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.4] text-charcoal font-light text-center md:text-left">
                Phasellus bibendum id diam non sagittis. Nunc bibendum neque ac
                odio dignissim, ut convallis nisl sagittis. Fusce posuere
                eleifend erat quis scelerisque.
              </h2>

              <a
                href="/work"
                className="mx-auto md:mx-0 flex cols  justify-center items-center md:items-end md:justify-start">
                <span className="inline-block mt-8  underline-offset-3 cursor-pointer underline border-soil text-soil no-underline  py-3.5 font-body text-[0.7rem] tracking-widest font-semibold uppercase transition-all duration-300">
                  View Gallery
                </span>
              </a>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-[520px] md:h-[820px] overflow-hidden">
              <img
                src="/images/emily.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ── §2 Our Story ─────────────────────────────────────────────────── */}

        {/* ── §3 The Experience ─────────────────────────────────────────────── */}
        {/* ── §4 Love Letters — Clean Postcard ───────────────────── */}
        <section
          ref={(el) => {
            (s4Ref as React.MutableRefObject<HTMLElement | null>).current = el;
            (
              parallaxContainerRef as React.MutableRefObject<HTMLElement | null>
            ).current = el;
          }}
          className="relative h-[760px] md:h-[880px] overflow-hidden">
          {/* Parallax Image */}
          <div
            ref={parallaxImageRef}
            className="absolute inset-x-0 will-change-transform"
            style={{ top: "-12%", bottom: "-12%" }}>
            <img
              src="/images/flowers7.png"
              alt="Floral backdrop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Softer overlay */}
          <div className="absolute inset-0 bg-[rgba(14,9,5,0.5)] z-[1]" />

          {/* Content */}
          <div className="relative z-[2] h-full flex flex-col items-center justify-center px-6">
            {/* Label */}
            <h2
              className=" font-light script text-[5rem] leading-[1.2] tracking-[-0.015em] text-white mb-8"
              style={fadeUp(s1, 100)}>
              Love Letters
            </h2>

            {/* Slider */}
            <TestimonialSlider visible={s4} />
          </div>
        </section>

        <Gallery />
        {/* ── CTA ───────────────────────────────────────────────────────────── 
        <section className="relative bg-[#f6f1eb] py-20 md:py-60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] lg:grid-cols-[280px_1fr_280px] gap-8 md:gap-12 items-center">
              <div className="hidden md:block overflow-hidden">
                <img
                  src="/images/flowers1.jpg"
                  alt="Interior detail"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>

              <div className="text-center py-8">
                <p className="font-body text-[0.6rem] tracking-[0.28em] uppercase text-stone mb-6">
                  Let's Begin
                </p>
                <h2 className="font-heading font-light text-[clamp(2.5rem,5vw,4rem)] text-charcoal mb-6 leading-[1.1] tracking-[-0.01em]">
                  Ready to Get
                  <br />
                  Started?
                </h2>
                <p className="font-body text-[0.8rem] md:text-[0.85rem] text-charcoal-soft font-light mb-10 max-w-[380px] mx-auto leading-[1.75]">
                  Book a free 15-minute discovery call with me
                  <br />
                  and let's discuss your magic day.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-soil text-soil no-underline px-8 py-3.5 font-body text-[0.6rem] tracking-[0.26em] uppercase hover:bg-soil hover:text-cream transition-all duration-300">
                  Book a Call
                </Link>
              </div>

              <div className="hidden md:block overflow-hidden">
                <img
                  src="/images/flowers2.JPG"
                  alt="Interior detail"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
    </>
  );
}
