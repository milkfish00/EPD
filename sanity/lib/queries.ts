import { client } from "./client";
import { urlFor } from "./image";

// ── Singleton document IDs ────────────────────────────────────────────────────
const HOME_ID = "homePage";
const ABOUT_ID = "aboutPage";
const GALLERY_ID = "galleryPage";
const CONTACT_ID = "contactPage";
const SETTINGS_ID = "settings";

// ── Types ─────────────────────────────────────────────────────────────────────

export type SeoData = {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: { asset: { _ref: string } };
};

export type HomePageData = {
  heroImage: { asset: { _ref: string } };
  heroHeadline?: string;
  aboutStatement: string;
  aboutImage: { asset: { _ref: string } };
  aboutBody: string;
  eventRequestImage?: { asset: { _ref: string } };
  eventRequestHeading?: string;
  eventRequestSubheading?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: { asset: { _ref: string } };
};

export type AboutPageData = {
  heroHeadline: string;
  heroSubheading?: string;
  statement: string;
  image: { asset: { _ref: string } };
  body?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: { asset: { _ref: string } };
};

export type GalleryItem = {
  _key: string;
  asset: { _ref: string };
  alt?: string;
  caption?: string;
};

export type GalleryPageData = {
  heading: string;
  subheading?: string;
  items: GalleryItem[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: { asset: { _ref: string } };
};

export type ContactPageData = {
  heading: string;
  subheading?: string;
  email?: string;
  phone?: string;
  location?: string;
  formHeading?: string;
  formSubheading?: string;
  backgroundImage?: { asset: { _ref: string } };
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: { asset: { _ref: string } };
};

export type SettingsData = {
  siteName: string;
  siteTagline?: string;
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
  defaultOgImage?: { asset: { _ref: string } };
  instagramUrl?: string;
  facebookUrl?: string;
  pinterestUrl?: string;
  email?: string;
  phone?: string;
  footerColor?: string;
};

// ── GROQ Queries ──────────────────────────────────────────────────────────────

export const HOME_PAGE_QUERY = `
  *[_type == "homePage" && _id == "${HOME_ID}"][0]{
    heroImage,
    heroHeadline,
    aboutStatement,
    aboutImage,
    aboutBody,
    eventRequestImage,
    eventRequestHeading,
    eventRequestSubheading,
    seoTitle,
    seoDescription,
    seoImage
  }
`;

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage" && _id == "${ABOUT_ID}"][0]{
    heroHeadline,
    heroSubheading,
    statement,
    image,
    body,
    seoTitle,
    seoDescription,
    seoImage
  }
`;

export const GALLERY_PAGE_QUERY = `
  *[_type == "galleryPage" && _id == "${GALLERY_ID}"][0]{
    heading,
    subheading,
    items[]{
      _key,
      asset,
      alt,
      caption
    },
    seoTitle,
    seoDescription,
    seoImage
  }
`;

export const CONTACT_PAGE_QUERY = `
  *[_type == "contactPage" && _id == "${CONTACT_ID}"][0]{
    heading,
    subheading,
    email,
    phone,
    location,
    formHeading,
    formSubheading,
    backgroundImage,
    seoTitle,
    seoDescription,
    seoImage
  }
`;

export const SETTINGS_QUERY = `
  *[_type == "settings" && _id == "${SETTINGS_ID}"][0]{
    siteName,
    siteTagline,
    defaultSeoTitle,
    defaultSeoDescription,
    defaultOgImage,
    instagramUrl,
    facebookUrl,
    pinterestUrl,
    email,
    phone,
    footerColor
  }
`;

// ── Fetch helpers ─────────────────────────────────────────────────────────────

export async function getHomePage(): Promise<HomePageData | null> {
  return client.fetch<HomePageData | null>(HOME_PAGE_QUERY);
}

export async function getAboutPage(): Promise<AboutPageData | null> {
  return client.fetch<AboutPageData | null>(ABOUT_PAGE_QUERY);
}

export async function getGalleryPage(): Promise<GalleryPageData | null> {
  return client.fetch<GalleryPageData | null>(GALLERY_PAGE_QUERY);
}

export async function getContactPage(): Promise<ContactPageData | null> {
  return client.fetch<ContactPageData | null>(CONTACT_PAGE_QUERY);
}

export async function getSettings(): Promise<SettingsData | null> {
  return client.fetch<SettingsData | null>(SETTINGS_QUERY);
}

// Re-export urlFor for use in components
export { urlFor };
