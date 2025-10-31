"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[110vh] sm:min-h-[120vh] md:min-h-[140vh] flex items-center overflow-hidden z-[10]"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        background: `
          radial-gradient(
            circle at 30% 30%,
            color-mix(in srgb, var(--accent-color, #8a2be2) 100%, transparent),
            transparent 70%
          ),
          var(--hero-bg-color, #0b0810)
        `,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-40 flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1
            className="text-[16vw] sm:text-[14vw] md:text-[200px] leading-none mb-4 text-white -mt-10 sm:-mt-12 md:-mt-20"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
            }}
          >
            Studio
          </h1>

          <div
            className="w-16 sm:w-20 h-[3px] sm:h-[4px] mb-6 mx-auto md:mx-0"
            style={{ backgroundColor: "var(--accent-color, #e74c3c)" }}
          />
        </motion.div>
      </div>

      {/* Image element */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-50 sm:bottom-30 md:bottom-20 right-0 z-10 flex justify-end"
      >
        <div className="relative w-[240px] sm:w-[340px] md:w-[450px] lg:w-[500px]">
          <Image
            src="/studio.png"
            alt="Paint tubes"
            width={850}
            height={600}
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
