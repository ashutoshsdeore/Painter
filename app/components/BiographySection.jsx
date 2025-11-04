"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BiographySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "4deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <section
      id="biography"
      ref={sectionRef}
      className="
        relative min-h-[100vh] 
        py-24 sm:py-32 md:pb-[200px] 
        flex flex-col items-start justify-start 
        overflow-hidden text-white
      "
      style={{
        backgroundColor: "#000",
        fontFamily: "'Poppins', sans-serif",
        marginTop: "-120px",
        paddingTop: "180px",
      }}
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
          color: "rgba(216, 116, 102, 0.95)", // fixed accent color
          fontFamily: "'Kristi', cursive",
        }}
        className="
          absolute z-30 left-[6vw] top-[80px]
          text-[80px] sm:text-[120px] md:text-[160px] lg:text-[210px]
          leading-none pointer-events-none select-none
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]
          max-w-[90vw] break-words
        "
      >
        <motion.span style={{ y: yTranslate, scale, rotateX, opacity }}>
          Biography
        </motion.span>
        <div
          className="w-12 mx-auto md:mx-0 mb-6 mt-3"
          style={{ borderTop: "3px solid rgba(212, 77, 60, 0.95)" }}
        />
      </motion.h1>

      {/* Content */}
      <div
        className="
          relative z-20 
          max-w-4xl mx-auto 
          px-4 sm:px-6 md:px-12 
          text-left space-y-6
        "
        style={{
          marginTop: "240px",
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-sm sm:text-base md:text-lg 
            font-semibold tracking-wide uppercase text-gray-200
          "
           style={{
              fontFamily: "'Montserrat', sans-serif"
            }}
        >
          A Few Words About Me
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold text-white leading-tight
          "
           style={{
              fontFamily: "'Montserrat', sans-serif"
            }}
        >
          I am modern artist from India...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="
            text-base sm:text-lg leading-relaxed text-gray-300
          " style={{
              fontFamily: "'Montserrat', sans-serif"
            }}
        >
          I invent and develop a visual language which expresses various forms and
          emotions of subjects. According to me this art is not a self-expression,
          but expression of hidden and deep-rooted beauty of that particular subject.
          Beside painting I am working on various projects, unleash your interest in
          this art and experience new dimensions of modern contemporary art.
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24 }}
          className="text-base sm:text-lg leading-relaxed text-gray-300"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </motion.p> */}

        <motion.a
          href="/about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="
            inline-block mt-4 text-xs sm:text-sm tracking-wide 
            font-semibold uppercase border-b-2 
            hover:text-white hover:border-white transition-colors
          "
          style={{ borderColor: "rgba(212, 77, 60, 0.95)" }}
        >
          Read More
        </motion.a>
      </div>
    </section>
  );
}
