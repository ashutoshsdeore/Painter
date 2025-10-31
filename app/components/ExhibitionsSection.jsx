"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ExhibitionsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [headingColor, setHeadingColor] = useState("#e63946");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "4deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", headingColor);
  }, [headingColor]);

  const exhibitions = [
    {
      title: "Pittura Gallerie",
      location: "Algarve / Portugal – 2019",
      image: "/img4.jpg",
    },
    {
      title: "Style Art Gallery",
      location: "New York / USA – 2019",
      image: "/img3.jpg",
    },
  ];

  const moreExhibitions = [
    "The Gallery – Chicago – 'Strokes', 2018",
    "Visual Arts – Boston – 2018",
    "Art New York – New York – 2016",
    "Dynamic Fine Art – Los Angeles – 2018",
    "House of Arts – Detroit – 2017",
  ];

  return (
    <section
      id="exhibitions"
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-start overflow-visible"
      style={{
        fontFamily: "var(--font-primary)",
      }}
    >
      {/* 🖼️ Background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.9,
        }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/85 z-10" />

      {/* ✨ Bottom Fade to Footer */}
      <div
        className="absolute bottom-0 left-0 w-full h-[180px] z-[15] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* ✨ Animated Heading */}
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          // color: "var(--accent-color)",
          fontFamily: "'Kristi', cursive",
          transformStyle: "preserve-3d",
        }}
        className="absolute z-30 left-[5vw] top-[10px] sm:top-[30px] md:top-[-40px] text-[20vw] sm:text-[16vw] md:text-[10vw] leading-none pointer-events-none select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
      >
        <motion.span style={{ y: yTranslate, scale, rotateX, opacity }}>
          Exhibitions
        </motion.span>

        <div
          className="w-12 mx-auto md:mx-0 mb-6"
          style={{ borderTop: "3px solid " }}
        />
      </motion.h1>

      {/* 📖 Intro Section */}
      <div
        className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-left space-y-10"
        style={{ marginTop: "200px" }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase text-gray-800"
        >
          Emotions Through Painting
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Where Colors Speak Louder Than Words
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl"
        >
          Through exhibitions around the world, each painting captures a unique story of emotion,
          movement, and color harmony. These galleries celebrate not just technique, but the soul
          within each brushstroke.
        </motion.p>
      </div>

      {/* 🖼️ Exhibitions Grid */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16">
        {exhibitions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: index * 0.25 }}
            className="flex flex-col items-center text-center md:text-left"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h4 className="text-2xl sm:text-3xl font-semibold mt-6 text-gray-800">
              {item.title}
            </h4>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              {item.location}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 📜 More Exhibitions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center mt-16 sm:mt-24 pb-20 text-gray-600 px-4"
      >
        <h5 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
          More Exhibitions
        </h5>
        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed">
          {moreExhibitions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
