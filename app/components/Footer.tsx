import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#222f2d]  px-5 py-5 flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between">
      {/* Left — Logo */}
      <Link
        href="/home"
        className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50 hover:text-[#ffffff] transition-colors"
        style={{ fontFamily: "var(--font-logo)" }}>
        Emily Paige Designs
      </Link>

      {/* Center — Copyright */}
      <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white/40">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>

      {/* Right — Socials */}
      <div className="flex items-center gap-5">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.6rem] tracking-[0.15em] uppercase text-white/40 hover:text-white/80 transition-colors">
          Instagram
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.6rem] tracking-[0.15em] uppercase text-white/40 hover:text-white/80 transition-colors">
          Pinterest
        </a>
      </div>
    </footer>
  );
};

export default Footer;
