"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import Abstract from "./Abstract";
// import ImageGrid from "./ImageGrid";
export default function artworksPage() {
  return (
    <main className="font-sans text-gray-900 bg-white w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Abstract />
     
      <Footer />
    </main>
  );
}
