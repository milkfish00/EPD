"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide navbar only on homepage (/)
  const hideNavbar = pathname === "/";

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
        {!hideNavbar && <Footer />}
      </body>
    </html>
  );
}
