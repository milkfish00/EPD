// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BRAND = "Emily Paige Designs";

const LEFT_LINKS = [
  { href: "/home", label: "Home" },
  { href: "/home#about", label: "About" },
];
const RIGHT_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];
const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:hello@emilypaigedesigns.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

// ─── Desktop nav link ─────────────────────────────────────────────────────────
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`relative font-body text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200 group no-underline ${
        active ? "text-charcoal" : "text-charcoal-soft hover:text-charcoal"
      }`}>
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px bg-charcoal transition-[width] duration-300 ease-in-out ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

// ─── Hamburger button ────────────────────────────────────────────────────────
function Hamburger({
  open,
  onClick,
  dark = false,
}: {
  open: boolean;
  onClick: () => void;
  dark?: boolean;
}) {
  const base = dark ? "#d4c9b0" : "#2c2118";
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="md:hidden relative flex items-center justify-center w-9 h-9 ml-auto bg-transparent border-none cursor-pointer focus:outline-none"
      style={{ color: base }}>
      <span
        className="absolute block h-px rounded-full bg-current transition-all duration-300"
        style={{
          width: 20,
          top: "50%",
          left: "50%",
          transform: open
            ? "translate(-50%,-50%) rotate(45deg)"
            : "translate(-50%, calc(-50% - 5px))",
        }}
      />
      <span
        className="absolute block h-px rounded-full bg-current transition-all duration-300"
        style={{
          width: 20,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className="absolute block h-px rounded-full bg-current transition-all duration-300"
        style={{
          width: open ? 20 : 13,
          top: "50%",
          left: "50%",
          transform: open
            ? "translate(-50%,-50%) rotate(-45deg)"
            : "translate(-50%, calc(-50% + 5px))",
        }}
      />
    </button>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Home page renders its own nav inline
  if (pathname === "/home") return null;

  return (
    <>
      {/* Desktop sticky bar */}
      <nav className="sticky top-0 z-50 bg-[#f3ebde]">
        <div className="relative flex items-center justify-between px-[clamp(1.5rem,4vw,3rem)] py-[1.1rem]">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-[clamp(1.5rem,3.5vw,3rem)]">
            {LEFT_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} active={pathname === l.href}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Brand — centred on md+ */}
          <Link
            href="/home"
            className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-soil no-underline whitespace-nowrap md:absolute md:left-1/2 md:-translate-x-1/2">
            {BRAND}
          </Link>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-[clamp(1.5rem,3.5vw,3rem)]">
            {RIGHT_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} active={pathname === l.href}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <Hamburger open={open} onClick={() => setOpen((v) => !v)} />
        </div>
        <div className="h-px bg-parchment" />
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        aria-hidden={!open}
        className="fixed inset-0 z-[100]"
        style={{ pointerEvents: open ? "auto" : "none" }}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        />

        {/* Sliding panel */}
        <div
          className="absolute inset-0 flex flex-col bg-ink mobile-nav-panel"
          style={{
            clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          }}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-[1.1rem]">
            <Link
              href="/"
              className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-gold-dim no-underline">
              {BRAND}
            </Link>
            <Hamburger open={open} onClick={() => setOpen(false)} dark />
          </div>

          <div className="h-px bg-white/10 mx-6" />

          {/* Nav links */}
          <div className="flex flex-col px-6 pt-12 gap-1 flex-1">
            {ALL_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-gold-dim no-underline text-[2.4rem] font-light leading-[1.6] w-fit hover:opacity-50 transition-opacity duration-200"
                style={{
                  transform: open ? "translateY(0)" : "translateY(22px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.55s cubic-bezier(0.23,1,0.32,1) ${120 + i * 60}ms, opacity 0.45s ease ${120 + i * 60}ms`,
                }}>
                {l.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 self-start inline-flex items-center gap-3 border border-white/20 text-gold-dim no-underline px-7 py-3.5 font-body text-[0.6rem] tracking-[0.28em] uppercase hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              style={{
                transform: open ? "translateY(0)" : "translateY(22px)",
                opacity: open ? 1 : 0,
                transition: `transform 0.55s cubic-bezier(0.23,1,0.32,1) ${120 + ALL_LINKS.length * 60 + 40}ms, opacity 0.45s ease ${120 + ALL_LINKS.length * 60 + 40}ms`,
              }}>
              Get in Touch <span className="opacity-50 text-xs">›</span>
            </Link>
          </div>

          {/* Footer strip */}
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
                    transform: open ? "translateY(0)" : "translateY(8px)",
                    opacity: open ? 0.7 : 0,
                    transition: `transform 0.4s ease ${420 + i * 40}ms, opacity 0.4s ease ${420 + i * 40}ms`,
                  }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
