import React from "react";
import Image from "next/image";

const GRID_IMAGES = [
  { src: "/images/flowers1.jpg", alt: "Floral arrangement" },
  { src: "/images/flowers2.JPG", alt: "Wedding flowers" },
  { src: "/images/flowers3.JPG", alt: "Bouquet detail" },
  { src: "/images/flowers4.JPG", alt: "Event styling" },
  { src: "/images/flowers5.png", alt: "Floral design" },
  { src: "/images/flowers7.png", alt: "Wedding styling" },
  { src: "/images/bouquet1.png", alt: "Bouquet" },
  { src: "/images/Bouquet2.png", alt: "Bouquet arrangement" },
];

const page = () => {
  return (
    <main className="w-full bg-[#f7f7f7]">
      {/* Header */}
      <div className="relative flex flex-col items-center justify-center h-full py-30 md:py-50">
        <h1
          className="text-[clamp(3rem,8vw,8rem)] text-stone-800 font-light leading-none text-center"
          style={{ fontFamily: "var(--font-heading)" }}>
          Our Work
        </h1>
        <p className="absolute bottom-10 text-[0.6rem] tracking-[0.2em] uppercase text-stone-400">
          Wedding &amp; Event Floral Design
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 my-3">
        {GRID_IMAGES.map(({ src, alt }) => (
          <div key={src} className="relative aspect-4/5 overflow-hidden group">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
