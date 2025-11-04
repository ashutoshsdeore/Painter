"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
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
             style={{
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
           Contact me for custom abstract paintings, collaborations, or commissions.

          </motion.p>
        </div>

        {/* ===== CONTACT INFO + FORM SECTION ===== */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 px-6 md:px-20 items-start">
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-4"
             style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Get in Touch
            </h3>
            <p className="text-white text-base mb-8 max-w-md"
             style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>
             Get in touch to bring emotion and color to your space through original artwork. Also check out our YouTube Channel and don't forget to subscribe and like the videos that I bring to Color your Day .
            </p>

            <div className="space-y-8 text-gray-100">
              <div>
                <h4 className="font-semibold text-gray-300"
                 style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>Phone</h4>
                <p className="text-3xl font-bold text-white mt-1"
                 style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>
                +91 8830910740
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300"
                 style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>Email</h4>
                <p className="text-2xl font-bold text-white mt-1"
                 style={{
              fontFamily: "'Montserrat', sans-serif"
            }}>
                  info@example.com
                </p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-gray-300">Address</h4>
                <p className="text-xl font-medium text-white mt-1">
                  123 Fifth Avenue, New York, NY 10160
                </p>
              </div> */}
            </div>

           <div className="flex space-x-4 mt-10">
  {[
    { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    { Icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  ].map(({ Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-[#e74c3c] rounded-full flex items-center justify-center text-white hover:bg-[#ff5a4c] transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
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
  <div className="p-10 max-w-5xl mx-auto"> {/* larger container for big image */}
    <div className="flex justify-center">
      <Image
        src="/studio6.jpg"  // 🔹 your image path
        alt="Send Me a Message"
        width={900}     // keep width manageable
        height={1200}   // 🔹 increased height
        className="rounded-lg  w-[90vw] sm:w-[80vw] md:w-[800px] lg:w-[900px] h-[600px]  h-auto sm:h-auto md:h-[700px]"
      />
    </div>
  </div>
</motion.div>


        </div>
      </section>
    </>
  );
}
