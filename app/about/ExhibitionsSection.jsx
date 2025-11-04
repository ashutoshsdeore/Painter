"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExhibitionsSection() {
  return (
    <section
      id="exhibitions"
      className="relative flex flex-col items-center justify-center overflow-visible z-[25]"
      style={{
        marginTop: "-250px", // overlaps Biography section slightly
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* === Exhibitions title === */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-[18vw] sm:text-[160px] md:text-[200px] leading-none text-red-600 mt-[-100px] sm:mt-[-130px] md:mt-[-150px] text-center px-4"
        style={{
          fontFamily: "'Kristi', cursive",
          fontWeight: 400,
          textShadow: "2px 2px 10px rgba(0,0,0,0.25)",
        }}
      >
        Exhibitions
      </motion.h1>

      {/* === Background Section with bottom white fade === */}
      <div
        className="relative z-10 w-full"
        style={{
          backgroundImage: `url('/bg2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          marginTop: "-4rem",
        }}
      >
        {/* Bottom white fade overlay */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: "220px", // adjust fade length
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,1) 100%)",
            zIndex: 12,
          }}
        />

        {/* Optional top soft fade to smooth transition from previous section */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            height: "150px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0) 100%)",
            zIndex: 12,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center relative z-20">
          {/* === Left Column === */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Emotions Through Painting
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              Behind every abstract form lies a human story — of love, pain, hope, and dreams. My paintings are not just visuals, they are emotions you can see, touch, and feel.
            </p>
            <div className="flex flex-col items-center md:items-start">
  <img
    src="/signature2.png"
    alt="Signature"
    className="h-12 sm:h-14 md:h-16 mb-2 grayscale brightness-75 contrast-125"
  />
  <span className="font-semibold text-gray-800 text-base sm:text-lg">
    Gajanan Kulkarni
  </span>
</div>

          </div>

          {/* === Right Column === */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Exhibitions & Art Fairs
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
             <li>The Gallery - Bengaluru, India -2016</li>
             <li>Visual Arts - Delhi , india - 2018
</li>
             <li>Art New - Chennai , india -2018
</li>
             <li>Dynamic Fine Art - Uttra Pardesh , india -2024
</li>
             <li>House of Art - Maharashtra , india - 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
