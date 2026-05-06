import { defineType, defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Page Title (internal)",
      type: "string",
      initialValue: "Contact",
      group: "seo",
      validation: (rule) => rule.required(),
    }),

    // ── Page header ───────────────────────────────────────────────────────
    defineField({
      name: "heading",
      title: "Page Heading",
      type: "string",
      initialValue: "Get in Touch",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Page Subheading",
      type: "string",
      group: "content",
    }),

    // ── Contact details ───────────────────────────────────────────────────
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "location",
      title: "Location / Address",
      type: "string",
      group: "content",
    }),

    // ── Form copy ─────────────────────────────────────────────────────────

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
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
    select: { title: "title" },
  },
});
