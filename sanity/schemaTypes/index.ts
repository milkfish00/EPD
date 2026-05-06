import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { galleryPage } from "./galleryPage";
import { contactPage } from "./contactPage";
import { settings } from "./settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, galleryPage, contactPage, settings],
};
