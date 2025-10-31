"use client";

import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [accentColor, setAccentColor] = useState("#e74c3c"); // default fallback

  useEffect(() => {
    const updateAccentColor = () => {
      const rootColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-color")
        .trim();
      if (rootColor) setAccentColor(rootColor);
    };

    updateAccentColor();

    const observer = new MutationObserver(() => updateAccentColor());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="relative w-full text-center text-white overflow-hidden z-[50]"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === Top fade === */}
      <div
        className="absolute top-0 left-0 w-full h-[100px] sm:h-[140px] md:h-[160px] z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) 0%, rgb(255 250 250 / 85%) 35%, rgb(255 255 255 / 46%) 65%, rgb(143 143 143 / 10%) 100%)",
        }}
      />

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/45 z-[4]" />

      {/* === Content === */}
      <div className="relative z-[10] flex flex-col items-center justify-center pt-32 sm:pt-44 md:pt-56 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12">
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-3 max-w-[90%] sm:max-w-[80%] leading-relaxed">
          Copyright © 2025{" "}
          <span className="font-semibold text-white">Painter</span> | Powered by{" "}
          <span className="font-semibold text-white">Painter</span>
        </p>

        {/* === Social Icons === */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-3 flex-wrap">
          {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social-link"
              className="transition transform hover:scale-110 duration-200 rounded-md flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
              style={{
                backgroundColor: "var(--accent-color, #e74c3c)",
                boxShadow: `0 4px 15px ${"var(--accent-color"}40`,
              }}
            >
              <Icon className="text-white text-xl sm:text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
