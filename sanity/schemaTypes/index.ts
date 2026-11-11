import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { galleryPage } from "./galleryPage";
import { contactPage } from "./contactPage";
import { holidayPage } from "./holidayPage";
import { holidaySection } from "./holidaySection";
import { settings } from "./settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, galleryPage, holidayPage, holidaySection, contactPage, settings],
};
