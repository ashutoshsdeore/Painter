"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BiographySection() {
  return (
    <section
      id="biography"
      className="
        relative 
        pt-[6rem] sm:pt-[8rem] md:pt-[12rem]
        pb-[30rem] sm:pb-[12rem] md:pb-[16rem]
        px-4 sm:px-6 md:px-12 
        overflow-hidden 
        z-[20]
      "
      style={{
        backgroundImage: "url('/bg5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        marginTop: "-120px",
      }}
    >
      {/* 🔸 Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255,215,0,0.92), rgba(255,165,0,0.9))",
        }}
      />

      {/* --- Heading --- */}
      <div
        className="
          relative z-20 
          flex flex-col items-start justify-start 
          ml-[5vw] sm:ml-[4vw] 
          mt-[-100px] sm:mt-[-140px] md:mt-[-180px]
          mb-8 sm:mb-12
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mid-title 
            text-[56px] 
            sm:text-[80px] 
            md:text-[120px] 
            lg:text-[180px] 
            leading-none 
            text-left
          "
          style={{
            fontFamily: "'Kristi', cursive",
            color: "#d44d3c",
            lineHeight: 0.9,
          }}
        >
          Biography
        </motion.h1>
      </div>

      {/* --- Content --- */}
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          items-center gap-8 sm:gap-12 md:gap-16 
          relative z-10
        "
      >
        {/* 📝 Text Section */}
        <div className="text-center md:text-left px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-5 text-[#b41e10]">
            How My Passion Began
          </h2>

          <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-900">
            I invent and develop a visual language that expresses various forms
            and emotions of subjects. According to me, this art is not merely
            self-expression, but an expression of the hidden and deep-rooted
            beauty of that particular subject. Besides painting, I am working on
            various projects — unleash your interest in this art and experience
            new dimensions of modern contemporary art.
          </p>
        </div>

        {/* 🎨 Image Section */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div
            className="
              relative 
              w-[240px] sm:w-[320px] md:w-[460px] lg:w-[550px]
            "
          >
            <Image
              src="/lady.jpg"
              alt="Artist painting"
              width={500}
              height={600}
              className="
                rounded-md 
                object-cover 
                shadow-lg 
                transition-transform 
                duration-500 
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
