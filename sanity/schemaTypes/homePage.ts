import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Page Title (internal)",
      type: "string",
      initialValue: "Home",
      group: "seo",
      validation: (rule) => rule.required(),
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      group: "content",
      description: "Large text displayed over the hero image",
    }),

    // ── About section ─────────────────────────────────────────────────────
    defineField({
      name: "aboutStatement",
      title: "About Statement",
      type: "text",
      rows: 4,
      group: "content",
      description: "Large statement headline in the about section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutImage",
      title: "About Section Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutBody",
      title: "About Body Text",
      type: "text",
      rows: 4,
      group: "content",
      description: "Secondary text in the right column of the about section",
      validation: (rule) => rule.required(),
    }),

    // ── Event Request section ─────────────────────────────────────────────
    defineField({
      name: "eventRequestImage",
      title: "Event Request Background Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
    }),
    defineField({
      name: "eventRequestHeading",
      title: "Event Request Heading",
      type: "string",
      group: "content",
      initialValue: "Inquiry Form",
    }),
    defineField({
      name: "eventRequestSubheading",
      title: "Event Request Subheading",
      type: "text",
      rows: 2,
      group: "content",
      initialValue:
        "Please complete this form and a member of our team will be in touch.",
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
    select: { title: "title", media: "heroImage" },
  },
});
