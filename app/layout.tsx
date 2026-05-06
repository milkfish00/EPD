import { Cormorant_Garamond, Aboreto } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${aboreto.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <SanityLive />
      </body>
    </html>
  );
}
