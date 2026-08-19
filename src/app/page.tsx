"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />

        <hr className="section-divider" />
        <About />

        <Philosophy />

        <hr className="section-divider" />
        <FeaturedWork />

        <Projects />

        <hr className="section-divider" />
        <Skills />

        <Timeline />

        <hr className="section-divider" />
        <Experience />

        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
