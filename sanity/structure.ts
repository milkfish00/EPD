import type { StructureResolver } from "sanity/structure";
import { HomeIcon, ImageIcon, EnvelopeIcon, CogIcon } from "@sanity/icons";

// Singleton document types (only one document of each type should exist)
const singletons = [
  "homePage",
  "aboutPage",
  "galleryPage",
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
