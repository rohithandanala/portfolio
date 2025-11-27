import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import CaseStudies from '@/components/sections/case-studies';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <CaseStudies />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
