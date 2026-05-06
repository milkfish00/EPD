import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import EventRequest from "./components/EventRequest";
import Gallery from "./components/Gallery";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY, GALLERY_PAGE_QUERY } from "@/sanity/lib/queries";
import type { HomePageData, GalleryPageData } from "@/sanity/lib/queries";

const page = async () => {
  const [{ data }, { data: galleryData }] = await Promise.all([
    sanityFetch<HomePageData | null>({ query: HOME_PAGE_QUERY }),
    sanityFetch<GalleryPageData | null>({ query: GALLERY_PAGE_QUERY }),
  ]);

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
