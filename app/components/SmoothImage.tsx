"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SmoothImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  /** Tiny base64 preview from Sanity (asset->metadata.lqip). */
  lqip?: string | null;
  /** Extra classes for the preview layer (e.g. to match image filters). */
  placeholderClassName?: string;
};

/**
 * A `fill` image that never shows an empty gap: a soft colour preview sits
 * behind it from the first paint, and the full image fades in over it once
 * downloaded. `priority` images skip the fade so they appear immediately.
 */
export default function SmoothImage({
  lqip,
  placeholderClassName = "",
  priority,
  onLoad,
  style,
  alt,
  ...props
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(Boolean(priority));

  return (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 bg-[#e8e3db] ${placeholderClassName}`}
        style={
          lqip
            ? {
                backgroundImage: `url("${lqip}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />
      <Image
        {...props}
        alt={alt}
        priority={priority}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.7s ease-out",
        }}
      />
    </>
  );
}
