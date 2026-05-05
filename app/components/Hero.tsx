import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-100 md:h-[97vh] overflow-hidden">
      {/* Background image — slightly muted */}
      <Image
        src="/images/weding2.jpg"
        alt="Emily Paige Designs"
        fill
        priority
        className="object-cover object-center brightness-[0.82] saturate-[0.75] px-5"
      />

      {/* Bottom-center title */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-3">
        <h1
          className="text-5xl md:text-8xl  text-white/90 leading-none max-w-4xl text-center tracking-[-5px]"
          style={{ fontFamily: "var(--font-logo)" }}></h1>
      </div>
    </section>
  );
};

export default Hero;
