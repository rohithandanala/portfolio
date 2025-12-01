
"use client";

import Link from "next/link";
import { Menu, Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Image src="https://storage.googleapis.com/project-magnolia-build-artifacts/867f139c-29b1-4c62-b91c-7f51152a2221/668478d1-d242-45e3-85cb-44e262174c65.webp" alt="RA Logo" width={24} height={24} className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block font-headline">
                Rohith Andanala
                </span>
            </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                    {link.label}
                </Link>
                ))}
            </div>
        </nav>
        
        <div className="flex-1 flex justify-end">
            <Button asChild size="sm" variant="outline" className="hidden md:flex text-green-400 border-green-400/50 hover:bg-green-400 hover:text-background">
                <a href="/resume.pdf" download="Rohith_Andanala_Resume.pdf">
                    Download Résumé
                    <Download className="ml-2 h-4 w-4"/>
                </a>
            </Button>
        </div>

        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <div className="flex justify-between items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image src="https://storage.googleapis.com/project-magnolia-build-artifacts/867f139c-29b1-4c62-b91c-7f51152a2221/668478d1-d242-45e3-85cb-44e262174c65.webp" alt="RA Logo" width={24} height={24} className="h-6 w-6" />
                    <span className="font-bold font-headline">Rohith Andanala</span>
                    </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                    ))}
                     <Button asChild size="sm" variant="outline" className="text-green-400 border-green-400/50 hover:bg-green-400 hover:text-background">
                        <a href="/resume.pdf" download="Rohith_Andanala_Resume.pdf">
                            Download Résumé
                            <Download className="ml-2 h-4 w-4"/>
                        </a>
                    </Button>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
