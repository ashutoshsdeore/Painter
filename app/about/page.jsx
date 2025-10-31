"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import BiographySection from "./BiographySection";
import ExhibitionsSection from "./ExhibitionsSection";

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-900 bg-white w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BiographySection />
      <ExhibitionsSection />
      <Footer />
    </main>
  );
}
