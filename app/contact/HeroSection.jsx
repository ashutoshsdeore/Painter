"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100vh] sm:min-h-[120vh] lg:min-h-[140vh] flex items-center overflow-hidden z-[10]"
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
      {/* === Dark Overlay === */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* === Content === */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1
            className="text-[60px] sm:text-[100px] md:text-[160px] lg:text-[200px] leading-none mb-4 text-white mt-[-40px] sm:mt-[-60px] md:mt-[-80px]"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
            }}
          >
            Contact
          </h1>

          <div
            className="w-12 sm:w-16 md:w-20 h-[3px] sm:h-[4px] mb-6 mx-auto md:mx-0"
            style={{ backgroundColor: "var(--accent-color, #e74c3c)" }}
          />
        </motion.div>
      </div>

      {/* === Right Floating Image === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 z-10 flex justify-end items-end w-auto pointer-events-none"
      >
        <div className="relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px]">
          <Image
            src="/contact.png"
            alt="Paint tubes"
            width={850}
            height={600}
            className="object-contain select-none pointer-events-none drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
