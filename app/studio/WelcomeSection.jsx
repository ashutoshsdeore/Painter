"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  const images = [
    { src: "/studio3.jpg", size: "small" },
    { src: "/studio4.jpg", size: "large" },
    { src: "/studio5.jpg", size: "small" },
    { src: "/studio6.jpg", size: "small" },
    { src: "/studio7.jpg", size: "small" },
  ];

  return (
    <>
      {/* --------- SECTION 1: Inside My Studio ---------- */}
      <section
        id="Welcome"
        className="relative min-h-[70vh] flex flex-col items-start justify-start text-left pt-20 pb-60 overflow-visible z-[20]"
        style={{
          backgroundImage: "url('/bg5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          marginTop: "-200px",
        }}
      >
        {/* Yellow Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 235, 59, 0.95), rgba(255, 193, 7, 0.9))",
          }}
        />

        <div className="relative z-10 max-w-5xl px-6 md:px-20">
             <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
         
           fontFamily: "'Kristi', cursive",
       
        }}
            className="text-[90px] md:text-[120px] text-white leading-[0.9] mb-9 -mt-20 md:-mt-40"
          >
            Welcome
          </motion.h2>
             <motion.h2 
             initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
             className="text-[60px] md:text-[80px] font-bold text-[#b71c1c] leading-[1] mb-6" >
                 Inside My Studio
                  </motion.h2>
         <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="w-24 h-[4px] bg-[#b71c1c] mb-10" />
        <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.2 }} 
                    viewport={{ once: true }} 
                    className="text-lg md:text-xl text-[#8b0000] leading-relaxed max-w-3xl" >
                       Step inside a space where every canvas tells a story, and every color breathes emotion. Our studio is more than a place — it’s a sanctuary of creativity, passion, and the art of feeling. 
                         </motion.p> 
    </div>
      </section>

      {/* --------- SECTION 2: Overlapping Main Image ---------- */}
      <section
        id="welcomegrid"
        className="relative py-36 overflow-visible bg-fixed bg-center bg-cover -mt-[160px] z-[30]"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fade Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-black/10 to-[#f5f5f5] z-[2]" />

        {/* Centered Image */}
        <div className="relative z-[5] flex justify-center px-6 md:px-10">
          {["/studio1.jpg"].map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-2xl transition-transform duration-500 -mt-40 z-[40] w-full max-w-6xl rounded-2xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Artwork ${index + 1}`}
                width={1200}
                height={600}
                className="object-cover w-full h-full rounded-2xl mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --------- SECTION 3: Young Artist + Grid Gallery ---------- */}
      <section
        id="welcome"
        className="relative w-full py-24  overflow-hidden"
      >
        {/* Text + Image Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-10 mb-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            {/* <p className="text-gray-600 text-lg font-semibold mb-3">
              My Studio Is My Home
            </p> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              As a Young Artist
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              My studio feels like an extension of who I am — a place where creativity flows freely and mistakes turn into masterpieces. As a young artist, I’m constantly experimenting, exploring emotions, and learning to express life through color and form. 

            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/studio2.jpg"
              alt="Artist drawing portrait"
              width={450}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl shadow-xl ${
                img.size === "large"
                  ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2 md:col-start-2"
                  : ""
              }`}
            >
              <Image
                src={img.src}
                alt={`Studio Image ${i + 1}`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
