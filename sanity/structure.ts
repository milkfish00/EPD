import type { StructureResolver } from "sanity/structure";
import {
  HomeIcon,
  ImageIcon,
  EnvelopeIcon,
  CogIcon,
  StarIcon,
} from "@sanity/icons";

// Singleton document types (only one document of each type should exist)
const singletons = [
  "homePage",
  "aboutPage",
  "galleryPage",
  "holidayPage",
  "contactPage",
  "settings",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),

      S.listItem()
        .title("Gallery Page")
        .id("galleryPage")
        .icon(ImageIcon)
        .child(
          S.document().schemaType("galleryPage").documentId("galleryPage"),
        ),
      S.listItem()
        .title("Holiday Page")
        .id("holidayPage")
        .icon(StarIcon)
        .child(
          S.document().schemaType("holidayPage").documentId("holidayPage"),
        ),
      S.listItem()
        .title("Contact Page")
        .id("contactPage")
        .icon(EnvelopeIcon)
        .child(
          S.document().schemaType("contactPage").documentId("contactPage"),
        ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
