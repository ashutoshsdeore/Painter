"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Abstract() {
  return (
    <>
      {/* ===== ABSTRACT SECTION ===== */}
      <section
        id="abstract"
        className="relative min-h-[70vh] flex flex-col items-start justify-start text-left pt-20 pb-60 overflow-visible -mt-[200px] z-[20]"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ===== Overlays ===== */}
        {/* Top dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-[1]" />
        {/* Bottom fade to white to blend with footer */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/40 to-white z-[2]" />

        {/* ===== MESSAGE ME HEADING ===== */}
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
            Message Me
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-[3px] bg-[#e74c3c] mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
        </div>

        {/* ===== CONTACT INFO + FORM SECTION ===== */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 px-6 md:px-20 items-start">
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-base mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>

            <div className="space-y-8 text-gray-100">
              <div>
                <h4 className="font-semibold text-gray-300">Phone</h4>
                <p className="text-3xl font-bold text-white mt-1">
                  929-242-6868
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Email</h4>
                <p className="text-2xl font-bold text-white mt-1">
                  info@example.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300">Address</h4>
                <p className="text-xl font-medium text-white mt-1">
                  123 Fifth Avenue, New York, NY 10160
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-10">
              {["B", "Y", "D"].map((letter) => (
                <div
                  key={letter}
                  className="w-10 h-10 bg-[#e74c3c] rounded-full flex items-center justify-center text-white text-lg font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:-mt-40 z-[40]"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20 max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#e74c3c] text-white font-semibold rounded-lg hover:bg-[#c0392b] transition"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
