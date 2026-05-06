import React from "react";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import {
  GALLERY_PAGE_QUERY,
  SETTINGS_QUERY,
  urlFor,
} from "@/sanity/lib/queries";
import type {
  GalleryPageData,
  GalleryItem,
  SettingsData,
} from "@/sanity/lib/queries";
import WorkContent from "./WorkContent";
import { buildMetadata } from "@/sanity/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [galleryResult, settingsResult] = await Promise.all([
    sanityFetch({ query: GALLERY_PAGE_QUERY }),
    sanityFetch({ query: SETTINGS_QUERY }),
  ]);
  return buildMetadata(
    galleryResult.data as GalleryPageData | null,
    settingsResult.data as SettingsData | null,
  );
}

const page = async () => {
  const { data: galleryData } = await sanityFetch({
    query: GALLERY_PAGE_QUERY,
  });
  const typedData = galleryData as GalleryPageData | null;

  const heading = typedData?.heading;
  const subheading = typedData?.subheading;

  const images =
    typedData?.items?.map((item: GalleryItem) => ({
      src: urlFor(item).width(2400).quality(100).url(),
      alt: item.alt ?? "",
      key: item._key,
    })) ?? [];

  return (
    <WorkContent heading={heading} subheading={subheading} images={images} />
  );
};

export default page;
