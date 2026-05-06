import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import { SanityLive } from "@/sanity/lib/live";
import { sanityFetch } from "@/sanity/lib/live";
import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SettingsData } from "@/sanity/lib/queries";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-logo",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: settingsData } = await sanityFetch({ query: SETTINGS_QUERY });
  const settings = settingsData as SettingsData | null;

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${libreBaskerville.variable}`}>
      <body>
        <ClientLayout
          instagramUrl={settings?.instagramUrl}
          facebookUrl={settings?.facebookUrl}
          pinterestUrl={settings?.pinterestUrl}
          footerColor={settings?.footerColor}>
          {children}
        </ClientLayout>
        <SanityLive />
      </body>
    </html>
  );
}
