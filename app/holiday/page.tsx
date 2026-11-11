import React from "react";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import {
  HOLIDAY_PAGE_QUERY,
  HOME_PAGE_QUERY,
  SETTINGS_QUERY,
  urlFor,
} from "@/sanity/lib/queries";
import type {
  HolidayPageData,
  HolidaySection,
  HomePageData,
  SettingsData,
} from "@/sanity/lib/queries";
import HolidayContent, { type HolidaySectionView } from "./HolidayContent";
import EventRequest from "@/app/components/EventRequest";
import { buildMetadata } from "@/sanity/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [holidayResult, settingsResult] = await Promise.all([
    sanityFetch({ query: HOLIDAY_PAGE_QUERY }),
    sanityFetch({ query: SETTINGS_QUERY }),
  ]);
  return buildMetadata(
    holidayResult.data as HolidayPageData | null,
    settingsResult.data as SettingsData | null,
  );
}

// Client-requested order, top to bottom.
const SECTION_ORDER = [
  { key: "door", fallbackTitle: "Door" },
  { key: "mantle", fallbackTitle: "Mantle" },
  { key: "stairs", fallbackTitle: "Stairs" },
  { key: "accent", fallbackTitle: "Accent" },
] as const;

function toView(
  key: string,
  fallbackTitle: string,
  section?: HolidaySection,
): HolidaySectionView | null {
  const images =
    section?.images
      ?.filter((img) => img?.asset)
      .slice(0, 12)
      .map((img) => ({
        src: urlFor(img).width(2400).quality(100).url(),
        lqip: img.lqip,
        alt: img.alt ?? "",
        key: img._key,
      })) ?? [];
  const description = section?.description?.trim();

  // Skip sections with nothing to show yet.
  if (!images.length && !description) return null;

  return {
    key,
    title: section?.title || fallbackTitle,
    description,
    images,
  };
}

const page = async () => {
  const [holidayResult, homeResult] = await Promise.all([
    sanityFetch({ query: HOLIDAY_PAGE_QUERY }),
    sanityFetch({ query: HOME_PAGE_QUERY }),
  ]);
  const typedData = holidayResult.data as HolidayPageData | null;
  const homeData = homeResult.data as HomePageData | null;

  const sections = SECTION_ORDER.map(({ key, fallbackTitle }) =>
    toView(key, fallbackTitle, typedData?.[key]),
  ).filter((s): s is HolidaySectionView => s !== null);

  return (
    <>
      <HolidayContent
        heading={typedData?.heading ?? "Holiday"}
        subheading={typedData?.subheading}
        sections={sections}
      />
      <EventRequest data={homeData} />
    </>
  );
};

export default page;
