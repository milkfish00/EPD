import { defineType, defineField, defineArrayMember } from "sanity";
import { createMaxItemsArrayInput } from "../components/MaxItemsArrayInput";

const MAX_IMAGES = 12;

// One category block on the Holiday page: 2–3 images followed by descriptive text.
export const holidaySection = defineType({
  name: "holidaySection",
  title: "Holiday Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      description: "Drag to reorder.",
      type: "array",
      components: { input: createMaxItemsArrayInput(MAX_IMAGES) },
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (rule) => [
        rule
          .max(MAX_IMAGES)
          .error(`Use at most ${MAX_IMAGES} images per section.`),
        rule.min(2).warning("Sections look best with 2 or 3 images."),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
  ],
});
