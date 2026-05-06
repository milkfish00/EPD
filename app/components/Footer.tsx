import React from "react";
import Link from "next/link";

type FooterProps = {
  instagramUrl?: string | null;
  facebookUrl?: string | null;
  pinterestUrl?: string | null;
  footerColor?: string | null;
};

const socialLinkClass =
  "text-[0.6rem] tracking-[0.15em] uppercase text-white hover:text-white/80 transition-colors";

const Footer = ({
  instagramUrl,
  facebookUrl,
  pinterestUrl,
  footerColor,
}: FooterProps) => {
  return (
    <footer
      className="w-full px-5 py-5 flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between"
      style={{ backgroundColor: footerColor ?? "#222f2d" }}>
      {/* Left — Logo */}
      <Link
        href="/"
        className="text-[0.65rem] uppercase text-white hover:text-[#ffffff] transition-colors"
        style={{ fontFamily: "var(--font-logo)" }}>
        Emily Paige Designs
      </Link>

      {/* Center — Copyright */}
      <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>

      {/* Right — Socials */}
      <div className="flex items-center gap-5 text-white">
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}>
            Instagram
          </a>
        )}
        {facebookUrl && (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}>
            Facebook
          </a>
        )}
        {pinterestUrl && (
          <a
            href={pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}>
            Pinterest
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
