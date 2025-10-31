"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[100vh] sm:min-h-[110vh] md:min-h-[130vh] lg:min-h-[140vh] flex items-center overflow-hidden z-[10]"
    >
      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-40 flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1
            className="
              text-[64px] sm:text-[100px] md:text-[160px] lg:text-[200px]
              leading-none mb-4 text-white
              -mt-10 sm:-mt-16 md:-mt-20
            "
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
            }}
          >
            Artwork
          </h1>
          <div
            className="w-12 sm:w-16 md:w-20 h-[3px] sm:h-[4px] mx-auto md:mx-0 mb-6"
            style={{ backgroundColor: "var(--accent-color, #e74c3c)" }}
          />
        </motion.div>
      </div>

      {/* ===== FLOATING IMAGE (optional) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="
          absolute bottom-[-60px] sm:bottom-[-80px] md:bottom-0 right-[-40px] sm:right-[-60px] md:right-0 
          z-10 flex justify-end
        "
      >
        <div
          className="
            relative
            w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]
            h-auto
          "
        >
          {/* Example floating image (uncomment if needed) */}
          {/* <Image
            src='/paint-tubes.png'
            alt='Paint tubes'
            fill
            className='object-contain select-none pointer-events-none'
            priority
          /> */}
        </div>
      </motion.div>
    </section>
  );
}
