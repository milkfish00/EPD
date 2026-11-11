"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/holiday", label: "Holiday", holiday: true },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Inquire" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string, match?: string) =>
    pathname === (match ?? href);

  // Links stay dark whether or not they're active; the active page gets an underline.
  const linkClass = (href: string, match?: string, color = "text-[#4d4032]") =>
    `text-[0.65rem] tracking-wide uppercase underline-offset-4 decoration-1 transition-opacity hover:opacity-70 ${color} ${
      isActive(href, match) ? "underline" : ""
    }`;

  const linkFont = { fontFamily: "var(--font-logo)" };

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 h-10 bg-[#f7f7f7]">
        {/* Left links — desktop only */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          <Link href="/" className={linkClass("/")} style={linkFont}>
            Home
          </Link>
          <Link
            href="/holiday"
            className={linkClass("/holiday", undefined, "text-[#b3261e]")}
            style={linkFont}>
            Holiday
          </Link>
        </div>

        {/* Logo — left on mobile, center on desktop */}
        <Link
          href="/"
          aria-label="Emily Paige Designs — home"
          className="shrink-0 hover:opacity-80 transition-opacity md:mx-auto">
          <span
            className="text-md tracking-tight uppercase text-[#4d4032]"
            style={{ fontFamily: "var(--font-logo)" }}>
            Emily Paige Designs
          </span>
        </Link>

        {/* Right links — desktop only */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          <Link href="/work" className={linkClass("/work")} style={linkFont}>
            Work
          </Link>
          <Link
            href="/contact"
            className={linkClass("/contact")}
            style={linkFont}>
            Inquire
          </Link>
        </div>

        {/* Hamburger — mobile only, pushed to right */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 ml-auto">
          <span className="block h-px w-5 bg-stone-600" />
          <span className="block h-px w-5 bg-stone-600" />
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-100 bg-[#f7f7f7] flex flex-col transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        {/* Close button */}
        <div className="flex items-center justify-between px-5 h-10">
          <Link
            href="/home"
            onClick={() => setOpen(false)}
            aria-label="Emily Paige Designs — home"
            className="shrink-0">
            <span
              className="text-md tracking-tight uppercase text-[#4d4032]"
              style={{ fontFamily: "var(--font-logo)" }}>
              Emily Paige Designs
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[#4d4032]/50 hover:text-[#4d4032] transition-colors text-xl leading-none">
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-5">
          {NAV_LINKS.map(({ href, label, holiday }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-4xl uppercase transition-colors ${
                holiday
                  ? "text-[#b3261e] hover:opacity-70"
                  : "text-[#4d4032] hover:opacity-70"
              }`}
              style={linkFont}>
              {label}
            </Link>
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-center text-[0.6rem] tracking-widest uppercase text-[#4d4032]/40 pb-10">
          Emily Paige Designs
        </p>
      </div>
    </>
  );
};

export default Navbar;
