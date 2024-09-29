import Image from "next/image";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 mx-auto ring-1 ring-primary/30">
      Salut
      <Hero />
      <SectionTwo />
      <AboutSection />
      <Footer />
    </div>
  );
}
