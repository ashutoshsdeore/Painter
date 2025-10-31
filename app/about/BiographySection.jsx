"use client";

import Image from "next/image";

export default function BiographySection() {
  return (
    <section
      id="biography"
      className="relative pt-[10rem] sm:pt-[14rem] md:pt-[20rem] pb-[10rem] sm:pb-[14rem] md:pb-[20rem] px-4 sm:px-6 md:px-12 overflow-hidden z-[20]"
      style={{
        backgroundImage: "url('/bg5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        marginTop: "-200px",
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

      {/* 🔹 Title */}
      <h1
        className="text-[16vw] sm:text-[12vw] md:text-[100px] lg:text-[160px] leading-none mb-10 sm:mb-16 relative z-10 text-center"
        style={{
          fontFamily: "'Kristi', cursive",
          color: "#b41e10",
          fontWeight: 400,
        }}
      >
        Biography
      </h1>

      {/* 🔸 Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 sm:gap-16 relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#b41e10]">
            How My Passion Began
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-900">
            I invent and develope a visual language which expresses various
            forms and emotions of subjects. According to me this art is not a
            self expression, but expression of hidden and deep rooted beauty of
            that perticular subject. Beside painting I am working on various
            projects., unleash your interest in this art and experience new
            dimensions modern contemporary art.
          </p>
        </div>

        {/* 🔹 Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[550px]">
            <Image
              src="/lady.jpg"
              alt="Artist painting"
              width={500}
              height={600}
              className="rounded-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 🔸 Bottom Space (kept) */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[300px] z-20" />
    </section>
  );
}
