import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import {
  CONTACT_PAGE_QUERY,
  SETTINGS_QUERY,
  urlFor,
} from "@/sanity/lib/queries";
import type { ContactPageData, SettingsData } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/seo";
import ContactContent from "./ContactContent";

export async function generateMetadata(): Promise<Metadata> {
  const [contactResult, settingsResult] = await Promise.all([
    sanityFetch({ query: CONTACT_PAGE_QUERY }),
    sanityFetch({ query: SETTINGS_QUERY }),
  ]);
  return buildMetadata(
    contactResult.data as ContactPageData | null,
    settingsResult.data as SettingsData | null,
  );
}

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY });
  const pageData = data as ContactPageData | null;

  const bgSrc = pageData?.backgroundImage
    ? urlFor(pageData.backgroundImage).width(3840).quality(100).url()
    : null;

  return <ContactContent data={pageData} bgSrc={bgSrc} />;
}
