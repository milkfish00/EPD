"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

type ClientLayoutProps = {
  children: React.ReactNode;
  instagramUrl?: string | null;
  facebookUrl?: string | null;
  pinterestUrl?: string | null;
  footerColor?: string | null;
};

export default function ClientLayout({
  children,
  instagramUrl,
  facebookUrl,
  pinterestUrl,
  footerColor,
}: ClientLayoutProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}
      <PageTransition>{children}</PageTransition>
      {!isStudio && (
        <Footer
          instagramUrl={instagramUrl}
          facebookUrl={facebookUrl}
          pinterestUrl={pinterestUrl}
          footerColor={footerColor}
        />
      )}
    </>
  );
}
