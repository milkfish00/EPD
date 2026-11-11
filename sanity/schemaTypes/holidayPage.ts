import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

// The four categories always render top-to-bottom in this order.
const section = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "holidaySection",
    group: "content",
    initialValue: { title },
    options: { collapsible: true, collapsed: true },
  });

export const holidayPage = defineType({
  name: "holidayPage",
  title: "Holiday Page",
  type: "document",
  icon: StarIcon,

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Page Title (internal)",
      type: "string",
      initialValue: "Holiday",
      group: "seo",
      validation: (rule) => rule.required(),
    }),

    // ── Page header ───────────────────────────────────────────────────────
    defineField({
      name: "heading",
      title: "Page Heading",
      type: "string",
      initialValue: "Holiday",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Page Subheading",
      type: "string",
      initialValue: "Seasonal Floral Design",
      group: "content",
    }),

    // ── Category sections (fixed order) ───────────────────────────────────
    section("door", "Door"),
    section("mantle", "Mantle"),
    section("stairs", "Stairs"),
    section("accent", "Accent", "Miscellaneous holiday designs."),

    // ── SEO ───────────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      group: "seo",
    }),
    defineField({
      name: "seoImage",
      title: "Social Share Image",
      type: "image",
      group: "seo",
      options: { hotspot: true },
    }),
  ],

  preview: {
    select: { title: "title" },
  },
});
