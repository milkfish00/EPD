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
      title: "Main Header Text",
      description: 'The large title shown in the banner at the top of the page (e.g. "Holiday").',
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

    // ── Banner background ─────────────────────────────────────────────────
    defineField({
      name: "bannerBackgroundType",
      title: "Banner Background",
      description:
        "Choose a solid colour or an image behind the main header. Leave unset for the default light background with dark text.",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Colour", value: "color" },
          { title: "Image", value: "image" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "bannerBackgroundColor",
      title: "Banner Background Colour",
      description:
        "Hex colour, e.g. #A50F1E (holiday red). Leave empty for the default light background.",
      type: "string",
      group: "content",
      hidden: ({ parent }) => parent?.bannerBackgroundType === "image",
      validation: (rule) =>
        rule.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {
          name: "hex colour",
        }),
    }),
    defineField({
      name: "bannerBackgroundImage",
      title: "Banner Background Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.bannerBackgroundType !== "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "bannerTextColor",
      title: "Banner Text Colour",
      description:
        "If unset: white over a colour/image background, dark over the default background.",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Light (for dark/red backgrounds)", value: "light" },
          { title: "Dark (for light backgrounds)", value: "dark" },
        ],
        layout: "radio",
      },
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
