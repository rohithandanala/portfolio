"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import RagTerminal from '@/components/sections/rag-terminal';
import CaseStudies from '@/components/sections/case-studies';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import KineticGears from '@/components/kinetic-gears';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function Home() {
  const [rotation, setRotation] = useState(0);

  const experienceRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const caseStudiesRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

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
    <div className="relative flex flex-col min-h-[100dvh] overflow-x-hidden pt-14">
      <Header />
      <main className="flex-1">
        {/* Section Gaps set to 0 to create dashboard feel */}
        <div className="flex flex-col space-y-0">
          <Hero />
          
          <div className="w-full bg-background border-y border-primary/10">
            <RagTerminal />
          </div>

          <div className="md:w-[85%] mx-auto py-8">
            <div className="relative">
              <div className="absolute -top-24 -left-96 w-[450px] h-[450px] opacity-10 hidden md:block z-0 pointer-events-none">
                <KineticGears mainRotation={rotation} />
              </div>
              
              <div ref={experienceRef.ref} className={cn('opacity-0', { 'animate-fade-in': experienceRef.isVisible })}>
                <Experience />
              </div>
              
              <div ref={skillsRef.ref} className={cn('opacity-0', { 'animate-fade-in': skillsRef.isVisible })}>
                <Skills />
              </div>
            </div>

            <div className="relative">
               <div className="absolute top-[calc(100%-28rem)] -right-96 w-[450px] h-[450px] opacity-10 hidden md:block z-0 pointer-events-none">
                  <KineticGears mainRotation={-rotation * 0.8} />
                </div>
              <div ref={projectsRef.ref} className={cn('opacity-0', { 'animate-fade-in': projectsRef.isVisible })}>
                <Projects />
              </div>
              <div ref={caseStudiesRef.ref} className={cn('opacity-0', { 'animate-fade-in': caseStudiesRef.isVisible })}>
                <CaseStudies />
              </div>
            </div>

            <div ref={contactRef.ref} className={cn('opacity-0', { 'animate-fade-in': contactRef.isVisible })}>
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
