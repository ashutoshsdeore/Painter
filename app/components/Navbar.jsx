"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [accentColor, setAccentColor] = useState("#ffffff");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const rootColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-color")
      .trim();
    if (rootColor) setAccentColor(rootColor);
  }, []);

  const navLinks = ["Home", "About", "Artworks", "Studio", "Contact"];

  return (
    <nav
      className="
        absolute top-0 left-0 w-full z-40
        bg-transparent text-white
        transition-all duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* === Signature Logo === */}
        <Link href="/" className="flex items-center">
          <Image
            src="/signature2.png"
            alt="Ovi Chase Signature"
            width={180}
            height={90}
            className="object-contain h-12 w-auto brightness-0 invert "
            priority
          />
        </Link>

        {/* === Desktop Nav Links === */}
        <ul
          className="
            hidden md:flex space-x-8 text-sm uppercase tracking-wider
          "
        >
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="hover:text-[var(--accent-color)] transition-colors duration-300 whitespace-nowrap"
                style={{ color: "#fff" }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Mobile Menu Button === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* === Mobile Dropdown Menu === */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md
          flex flex-col items-center justify-center space-y-8 text-lg
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="text-white hover:text-[var(--accent-color)] transition-colors duration-300"
            onClick={() => setMenuOpen(false)} // close on click
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
