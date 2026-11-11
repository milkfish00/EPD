/**
 * next/image loader that lets Sanity's CDN resize images directly
 * (fast, cached worldwide, serves WebP/AVIF) instead of Next re-encoding them.
 */
export default function sanityImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (!src.startsWith("https://cdn.sanity.io/")) {
    // Local files in /public: serve as-is.
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
  }
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  // q=90 is visually indistinguishable from 100 at a fraction of the file size.
  url.searchParams.set("q", String(Math.min(quality ?? 90, 90)));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}
