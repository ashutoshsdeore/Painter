"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Abstract() {
  const images = [
    "/art1.jpg",
    "/art2.jpg",
    "/art3.jpg",
    "/art4.jpg",
    "/art5.jpg",
    "/artw6.jpg",
    "/art7.jpg",
    "/artwork8.jpg",
    "/artwork9.jpg",
  ];

  return (
    <>
      {/* ===== ABSTRACT SECTION ===== */}
      <section
        id="abstract"
        className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col items-start justify-start text-left pt-24 sm:pt-32 pb-32 sm:pb-60 overflow-visible -mt-[120px] sm:-mt-[200px] z-[20]"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-[1]" />

        {/* Text Content */}
        <div className="relative z-10 max-w-5xl w-full px-4 sm:px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] text-white leading-[0.9] mb-8 -mt-10 sm:-mt-20 md:-mt-40"
            style={{ fontFamily: "'Kristi', cursive" }}
          >
            Abstract
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-12 sm:w-16 md:w-20 h-[3px] bg-[#e74c3c] mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-l text-gray-100 leading-relaxed max-w-2xl"
          >
             Explore a collection of abstract paintings that celebrate emotion, movement, and color. Every piece tells a silent story — of love, hope, passion, and reflection — crafted to connect with the heart and spark inspiration through the language of art. 

          </motion.p>
        </div>
      </section>

      {/* ===== IMAGE GRID SECTION ===== */}
      <section
        id="ArtworkGrid"
        className="relative py-24 sm:py-32 overflow-visible -mt-[80px] sm:-mt-[120px] z-[30]"
        style={{
          backgroundImage: `url('/bg2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top white fade to blend with previous section */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            height: "180px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%)",
            zIndex: 5,
          }}
        />

        {/* Bottom white fade into footer */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: "260px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,1) 100%)",
            zIndex: 5,
          }}
        />

        <div className="relative z-[10] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-10">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden shadow-2xl transition-transform duration-500 ${
                index < 3
                  ? "-mt-0 sm:-mt-52 md:-mt-50 z-[40]"
                  : "z-10 mt-0"
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] relative w-full h-full">
                <Image
                  src={src}
                  alt={`Artwork ${index + 1}`}
                  fill
                  className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
