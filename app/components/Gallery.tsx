"use client";

import { motion, Variants } from "framer-motion";

const imageVariant: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function Img({ src }: { src: string }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="w-full py-24 md:py-40 flex flex-col items-center bg-cream px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 md:mb-0">
        <h2 className="font-heading font-light uppercase text-[clamp(2rem,5vw,3.5rem)] text-[#c4b5a0] leading-[1.2] mb-6">
          Pellentesque habitant
          <br />
          eu odio <span className="italic">commodo eleifend</span>
        </h2>

        <a
          href="/contact"
          className="mt-6 px-6 cursor-pointer py-3 border border-soil text-soil font-body text-[0.65rem] tracking-[0.25em] uppercase hover:bg-soil hover:text-cream transition-all duration-300">
          Get In Touch
        </a>
      </motion.div>

      {/* ── MOBILE LAYOUT ─────────────────────────────────────────── */}
      <div className="md:hidden w-full max-w-[520px] mt-2 flex flex-col gap-3">
        {/* Large hero image */}
        <motion.div
          className="w-full "
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-[3/4]">
            <Img src="/images/weding2.jpg" />
          </div>
        </motion.div>

        {/* Two side-by-side */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            className=""
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <div className="aspect-square">
              <Img src="/images/flowers2.JPG" />
            </div>
          </motion.div>

          <motion.div
            className=""
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <div className="aspect-square">
              <Img src="/images/flowers3.JPG" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP COLLAGE ───────────────────────────────────────── */}
      <div className="relative hidden md:block w-full max-w-[1200px] h-[820px]">
        {/* CENTER */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]  z-30"
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-[3/4]">
            <Img src="/images/weding2.jpg" />
          </div>
        </motion.div>

        {/* LEFT TOP */}
        <motion.div
          className="absolute top-[5%] left-[4%] w-[240px] "
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-square">
            <Img src="/images/flowers2.JPG" />
          </div>
        </motion.div>

        {/* LEFT BOTTOM */}
        <motion.div
          className="absolute bottom-[0%] left-[6%] w-[260px] "
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-[4/5]">
            <Img src="/images/flowers1.jpg" />
          </div>
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          className="absolute top-[8%] right-[4%] w-[250px] "
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-square">
            <Img src="/images/flowers3.JPG" />
          </div>
        </motion.div>

        {/* RIGHT BOTTOM */}
        <motion.div
          className="absolute bottom-[2%] right-[6%] w-[270px]"
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <div className="aspect-[4/5]">
            <Img src="/images/flowers4.JPG" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
