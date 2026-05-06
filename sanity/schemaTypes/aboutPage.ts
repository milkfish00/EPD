import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: DocumentIcon,

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Page Title (internal)",
      type: "string",
      initialValue: "About",
      group: "seo",
      validation: (rule) => rule.required(),
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      group: "content",
      description: "Large headline at the top of the page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      group: "content",
    }),

    // ── Main content ──────────────────────────────────────────────────────
    defineField({
      name: "statement",
      title: "Opening Statement",
      type: "text",
      rows: 4,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text",
      rows: 6,
      group: "content",
    }),

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
    select: { title: "title", media: "image" },
  },
});
