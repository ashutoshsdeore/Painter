"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RecentArtworks() {
  return (
    <section
      id="artworks"
      className="relative bg-transparent"
      style={{
        zIndex: 30,
        paddingTop: "160px",
        position: "relative",
      }}
    >
      {/* --- Background Overlay --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
          zIndex: 0,
        }}
      />

      {/* --- Heading --- */}
      <div
        className="
          relative z-20 
          flex flex-col items-start justify-start 
          ml-[6vw] mt-[-180px] pb-1
          sm:ml-[4vw] sm:mt-[-200px]
          xs:ml-[3vw]
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mid-title 
            text-[80px] 
            sm:text-[100px] 
            md:text-[120px] 
            lg:text-[180px] 
            leading-none
          "
          style={{
            fontFamily: "'Kristi', cursive",
            color: " #d44d3c",
            lineHeight: 0.9,
            textAlign: "left",
          }}
        >
          Recent Artworks
        </motion.h1>

        {/* Accent line directly under heading */}
        <div
          style={{
            borderTop: "4px solid #d44d3c",
            width: "72px",
          }}
          className="mt-4 sm:mt-6 mb-10 sm:mb-20"
        />
      </div>

      {/* --- Subtitle + Paragraph --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-12 text-left">
        <div className="max-w-2xl">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
            
          >
            Check Out My Latest Creations
          </h2>
          <p
            className="text-sm sm:text-base text-gray-700 max-w-xl leading-relaxed"
           
          >
            Each piece is a reflection of my evolving journey — where colours speak louder than words,
            and imagination flows freely beyond form. Dive into my latest works and experience how
            emotion takes shape through abstract expression.
          </p>
        </div>
      </div>

      {/* --- Artworks Grid --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28">
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-8 md:gap-10
          "
        >
          {["/content4.jpg", "/content2.jpg", "/content3.jpg"].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                overflow-hidden rounded-2xl shadow-lg 
                hover:scale-[1.03] transition-transform duration-500
              "
            >
              <Image
                src={src}
                alt={`Artwork ${i + 1}`}
                width={1200}
                height={900}
                className="
                  object-cover w-full 
                  h-[260px] sm:h-[340px] md:h-[420px]
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
