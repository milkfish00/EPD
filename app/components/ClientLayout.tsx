"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}
      <PageTransition>{children}</PageTransition>
      {!isStudio && <Footer />}
    </>
  );
}
