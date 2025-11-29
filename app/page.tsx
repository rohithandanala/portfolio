
"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import CaseStudies from '@/components/sections/case-studies';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import KineticGears from '@/components/kinetic-gears';

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.15); 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="relative">
          {/* Gear 1 (Top Left of Skills) */}
          <div className="absolute -top-10 -left-48 w-96 h-96 opacity-30 hidden md:block z-0 pointer-events-none">
            <KineticGears mainRotation={rotation} />
          </div>
          <CaseStudies />
          <Skills />
        </div>
        <div className="relative">
           {/* Gear 2 (Bottom Right of Experience) */}
           <div className="absolute top-[calc(100%-18rem)] -right-48 w-96 h-96 opacity-30 hidden md:block z-0 pointer-events-none">
              <KineticGears mainRotation={-rotation * 0.8} />
            </div>
          <Projects />
          <Experience />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
