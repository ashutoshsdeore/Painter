import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecentArtworks from "./components/RecentArtworks";
import BiographySection from "./components/BiographySection";
import ExhibitionsSection from "./components/ExhibitionsSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="font-sans bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <RecentArtworks />
      <BiographySection />
      <ExhibitionsSection />
      <Footer />
    </main>
  );
}
