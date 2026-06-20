import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/queries";
import type { HomePageData } from "@/sanity/lib/queries";

type HeroProps = {
  data?: Pick<HomePageData, "heroImage" | "heroHeadline"> | null;
};

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative w-full h-100 md:h-[97vh] overflow-hidden">
      {data?.heroImage && (
        <Image
          src={urlFor(data.heroImage).width(3840).quality(100).url()}
          alt="Emily Paige Designs"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-[0.82] saturate-[0.75] px-5"
        />
      )}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-3">
        <h1
          className="text-5xl md:text-8xl  text-white/90 leading-none max-w-4xl text-center tracking-[-5px]"
          style={{ fontFamily: "var(--font-logo)" }}>
          {data?.heroHeadline}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
