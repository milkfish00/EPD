import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_PAGE_QUERY, urlFor } from "@/sanity/lib/queries";
import type { GalleryPageData, GalleryItem } from "@/sanity/lib/queries";
import WorkContent from "./WorkContent";

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
