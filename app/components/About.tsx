import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/queries";
import type { HomePageData } from "@/sanity/lib/queries";

type AboutProps = {
  data?: Pick<
    HomePageData,
    "aboutStatement" | "aboutImage" | "aboutBody"
  > | null;
};

const About = ({ data }: AboutProps) => {
  return (
    <section
      id="about"
      className="w-full bg-[#f7f7f7] px-5 md:px-10 pt-20 md:pt-32 pb-16 md:pb-28">
      <h2
        className="text-2xl text-[#4d4032] font-light leading-[29px] tracking-tight max-w-xl mb-16 md:mb-24"
        style={{ fontFamily: "var(--font-heading)" }}>
        {data?.aboutStatement}
      </h2>

      <div className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
        {data?.aboutImage && (
          <div className="relative w-full md:w-[58%] aspect-video overflow-hidden">
            <Image
              src={urlFor(data.aboutImage).width(2400).quality(100).url()}
              alt="Emily Paige Designs floral arrangement"
              fill
              quality={100}
              className="object-cover object-center"
            />
          </div>
        )}
        <div className="w-full md:w-[42%] md:pt-10 flex items-start">
          <h3
            className="text-2xl text-[#4d4032] font-light leading-[29px] tracking-tight max-w-xl "
            style={{ fontFamily: "var(--font-heading)" }}>
            {data?.aboutBody}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
