import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,

  groups: [
    { name: "general", title: "General", default: true },
    { name: "social", title: "Social & Contact" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Emily Paige Designs",
      group: "general",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteTagline",
      title: "Site Tagline",
      type: "string",
      group: "general",
    }),

    // ── Social media ──────────────────────────────────────────────────────
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "pinterestUrl",
      title: "Pinterest URL",
      type: "url",
      group: "social",
    }),

    // ── Contact info ──────────────────────────────────────────────────────
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      group: "social",
    }),
    defineField({
      name: "phone",
      title: "Contact Phone",
      type: "string",
      group: "social",
    }),

    // ── Default SEO ───────────────────────────────────────────────────────
    defineField({
      name: "defaultSeoTitle",
      title: "Default Meta Title",
      type: "string",
      group: "seo",
      description: "Used when a page does not have its own SEO title",
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 2,
      group: "seo",
      description: "Used when a page does not have its own SEO description",
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Social Share Image",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      description: "Fallback social sharing image for all pages",
    }),
  ],

  preview: {
    select: { title: "siteName" },
  },
});
