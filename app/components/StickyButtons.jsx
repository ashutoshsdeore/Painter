"use client";

import { useState } from "react";
import { ShoppingCart, Palette, X, RotateCcw } from "lucide-react";

export default function StickyButtons() {
  const [open, setOpen] = useState(false);

  // 🎨 Font combinations
  const fontOptions = [
    { name: "Playfair Display", primary: "'Open Sans', sans-serif", heading: "'Playfair Display', serif" },
    { name: "Poppins", primary: "'Poppins', sans-serif", heading: "'Poppins', sans-serif" },
    { name: "Roboto", primary: "'Roboto', sans-serif", heading: "'Roboto Slab', serif" },
    { name: "Lora", primary: "'Lora', serif", heading: "'Lora', serif" },
    { name: "Montserrat", primary: "'Montserrat', sans-serif", heading: "'Montserrat', sans-serif" },
    { name: "Raleway", primary: "'Raleway', sans-serif", heading: "'Raleway', sans-serif" },
    { name: "Nunito", primary: "'Nunito', sans-serif", heading: "'Nunito', sans-serif" },
    { name: "Merriweather", primary: "'Merriweather', serif", heading: "'Merriweather', serif" },
    { name: "Josefin Sans", primary: "'Josefin Sans', sans-serif", heading: "'Josefin Sans', sans-serif" },
    { name: "Kristi", primary: "'Karla', sans-serif", heading: "'Kristi', cursive" },
    { name: "Karla", primary: "'Karla', sans-serif", heading: "'Karla', sans-serif" },
  ];

  // 🎨 Color palette
  const colorOptions = [
    ["#ef4444", "#dc2626"], // Red
    ["#3b82f6", "#2563eb"], // Blue
    ["#22c55e", "#16a34a"], // Green
    ["#e11d48", "#be123c"], // Pink/Red
    ["#ec4899", "#db2777"], // Pink
    ["#f97316", "#ea580c"], // Orange
    ["#8b5cf6", "#7c3aed"], // Purple
    ["#f59e0b", "#d97706"], // Amber
    ["#14b8a6", "#0d9488"], // Teal
    ["#eab308", "#ca8a04"], // Yellow
    ["#0ea5e9", "#0284c7"], // Sky Blue
    ["#10b981", "#059669"], // Emerald
  ];

  // 🔄 Reset theme
  const resetTheme = () => {
    document.documentElement.style.removeProperty("--accent-color");
    document.documentElement.style.removeProperty("--font-primary");
    document.documentElement.style.removeProperty("--font-heading");
    document.documentElement.style.removeProperty("--text-color");
    document.body.style.backgroundColor = "";
  };

  // 🎨 Change accent + text color
 // 🎨 Change accent color + hero background (dark blend)
const changeColor = (color) => {
  document.documentElement.style.setProperty("--accent-color", color);
  document.documentElement.style.setProperty("--hero-bg-color", "#0b0810"); // stays dark
  document.documentElement.style.setProperty(
    "--hero-bg-tint",
    `${color}25` // light tint of the chosen color
  );
};



  // ✏️ Change fonts
  const changeFont = (font) => {
    document.documentElement.style.setProperty("--font-primary", font.primary);
    document.documentElement.style.setProperty("--font-heading", font.heading);
  };

  // 🧮 Helper to calculate brightness
  const getBrightness = (hex) => {
    const c = hex.replace("#", "");
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  return (
    <>
      {/* Sticky Buttons */}
      <div className="fixed right-0 top-1/3 flex flex-col items-center space-y-3 z-50">
        {/* Buy Now */}
        <a
          href="/contact"
          className="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition"
        >
          <ShoppingCart size={16} />
          <span>Buy Now</span>
        </a>

        {/* Customize */}
        {/* <button
          onClick={() => setOpen(!open)}
          className="bg-white text-black flex items-center gap-2 px-4 py-2 rounded shadow-md hover:shadow-lg transition"
        >
          <Palette size={16} />
          <span>Customize</span>
        </button> */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2
            className="text-lg font-semibold"
            style={{ color: "black" }}
          >
            Painter Theme
          </h2>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 text-sm text-gray-600 space-y-6 overflow-y-auto h-full">
          <p>Try different colors and fonts for your website look.</p>

          {/* Fonts */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 font-medium">Font Styles</h3>
              <button onClick={resetTheme} className="text-gray-400 hover:text-gray-600">
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {fontOptions.map((font, i) => (
                <button
                  key={i}
                  onClick={() => changeFont(font)}
                  className="border p-2 rounded hover:bg-gray-100 transition text-lg"
                  style={{ fontFamily: font.heading }}
                >
                  Aa
                </button>
              ))}
            </div>
          </div>

          <hr className="my-3" />

          {/* Colors */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 font-medium">Color Palettes</h3>
              <button onClick={resetTheme} className="text-gray-400 hover:text-gray-600">
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map((pair, i) => (
                <button
                  key={i}
                  onClick={() => changeColor(pair[0])}
                  className="w-10 h-6 rounded-md border flex justify-center items-center overflow-hidden"
                >
                  <div className="w-1/2 h-full" style={{ backgroundColor: pair[0] }} />
                  <div className="w-1/2 h-full" style={{ backgroundColor: pair[1] }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
