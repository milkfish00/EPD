import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import EventRequest from "./components/EventRequest";
import Gallery from "./components/Gallery";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY, GALLERY_PAGE_QUERY } from "@/sanity/lib/queries";
import type { HomePageData, GalleryPageData } from "@/sanity/lib/queries";

const page = async () => {
  const [homeResult, galleryResult] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY }),
    sanityFetch({ query: GALLERY_PAGE_QUERY }),
  ]);

  const data = homeResult.data as HomePageData | null;
  const galleryData = galleryResult.data as GalleryPageData | null;

  return (
    <>
      <Hero data={data} />
      <About data={data} />
      <Gallery items={galleryData?.items} />
      <EventRequest data={data} />
    </>
  );
};

export default page;
