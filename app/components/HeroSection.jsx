"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative 
        h-[90vh] 
        sm:h-screen 
        flex 
        items-center 
        px-4 
        sm:px-6 
        md:px-12 
        overflow-hidden
      "
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
        backgroundImage: "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0))",
      }}
    >
      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* === Optional Canvas === */}
      <canvas
        id="heroCanvas"
        className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
      />

      {/* === Content === */}
      <div
        className="
          relative z-20 w-full 
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-10 md:gap-20
          text-center md:text-left
        "
      >
        {/* === Left Text === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl mx-auto md:mx-0 md:ml-12 px-2 sm:px-0"
        >
          <h1
            className="
              text-[60px] 
              sm:text-[100px] 
              md:text-[160px] 
              lg:text-[200px] 
              leading-none 
              mb-4
            "
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-color)",
            }}
          >
            Painter
          </h1>

          <div
            className="w-10 sm:w-12 mx-auto md:mx-0 mb-6 border-t-4"
            style={{ borderColor: "var(--accent-color)" }}
          />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
            Hi, My Name Is Gajanan Kulkarni
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: "var(--text-color)" }}
          >
            “Through abstract strokes, I give form to feelings that words can’t
            capture.”
          </p>
        </motion.div>

        {/* === Right Image === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            absolute 
            bottom-[-180px] sm:bottom-[-300px] md:bottom-[-400px] 
            right-[-60px] sm:right-[-80px] md:right-[-100px]
            flex justify-end items-end
            w-auto h-auto 
            pointer-events-none
          "
        >
          <div
            className="
              relative 
              w-[350px] h-[250px] 
              sm:w-[650px] sm:h-[450px] 
              md:w-[850px] md:h-[650px] 
              lg:w-[950px] lg:h-[750px]
            "
          >
            <Image
              src="/palette.png"
              alt="Painter Palette"
              fill
              className="object-contain drop-shadow-2xl select-none"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
