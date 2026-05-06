import type { Metadata } from "next";
import { urlFor } from "./image";
import type { SettingsData } from "./queries";

type PageSeoFields = {
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoImage?: { asset: { _ref: string } } | null;
};

export function buildMetadata(
  page: PageSeoFields | null | undefined,
  settings: SettingsData | null | undefined,
): Metadata {
  const title =
    page?.seoTitle ?? settings?.defaultSeoTitle ?? "Emily Paige Designs";
  const description =
    page?.seoDescription ?? settings?.defaultSeoDescription ?? undefined;

  const rawImage = page?.seoImage ?? settings?.defaultOgImage ?? null;
  const ogImageUrl = rawImage
    ? urlFor(rawImage).width(1200).height(630).quality(90).url()
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description: description ?? undefined,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description ?? undefined,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}
