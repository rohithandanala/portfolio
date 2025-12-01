
"use client";

import React, { useState } from 'react';
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Chatbot from '@/components/chatbot';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import CaseStudies from '@/components/sections/case-studies';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import { usePathname } from 'next/navigation';


const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
       <head>
        <title>Rohith Andanala | Sr. Machine Learning Engineer</title>
        <meta name="description" content="Portfolio of an experienced AI/ML Engineer specializing in Scalable Predictive Modeling and MLOps." />
      </head>
      <body className={cn("font-sans antialiased", fontInter.variable, fontSpaceGrotesk.variable)}>
          {isHomePage ? (
            React.cloneElement(children as React.ReactElement, { setChatbotOpen })
          ) : (
            <>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </>
          )}
          <Chatbot isOpen={isChatbotOpen} setIsOpen={setChatbotOpen} />
          <Toaster />
      </body>
    </html>
  );
}
