import { defineType, defineField, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  icon: ImageIcon,

  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Page Title (internal)",
      type: "string",
      initialValue: "Gallery",
      group: "seo",
      validation: (rule) => rule.required(),
    }),

    // ── Page header ───────────────────────────────────────────────────────
    defineField({
      name: "heading",
      title: "Page Heading",
      type: "string",
      initialValue: "Our Work",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Page Subheading",
      type: "string",
      initialValue: "Wedding & Event Floral Design",
      group: "content",
    }),

    // ── Gallery items ─────────────────────────────────────────────────────
    defineField({
      name: "items",
      group: "content",
      title: "Gallery Items",
      description: 'Drag and drop to reorder. Click "Add item" to bulk-upload.',
      type: "array",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [],
        }),
      ],
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
