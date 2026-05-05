import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f7f7f7] px-5 md:px-10 pt-20 md:pt-32 pb-16 md:pb-28">
      {/* Large statement headline — top left */}
      <h2
        className="text-2xl text-[#4d4032] font-light leading-[29px] tracking-tight max-w-xl mb-16 md:mb-24"
        style={{ fontFamily: "var(--font-heading)" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h2>

      {/* Two-column: image left, body text right */}
      <div className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
        <div className="relative w-full md:w-[58%] aspect-video overflow-hidden">
          <Image
            src="/images/flowers4.JPG"
            alt="Emily Paige Designs floral arrangement"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full md:w-[42%] md:pt-10 flex items-start">
          <h3
            className="text-2xl text-[#4d4032] font-light leading-[29px] tracking-tight max-w-xl "
            style={{ fontFamily: "var(--font-heading)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
