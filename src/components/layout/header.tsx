"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, Lock } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering theme-dependent UI after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Image src="https://storage.googleapis.com/project-magnolia-build-artifacts/867f139c-29b1-4c62-b91c-7f51152a2221/668478d1-d242-45e3-85cb-44e262174c65.webp" alt="RA Logo" width={24} height={24} className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block font-headline text-sm">
                Venkata Sai Rohith
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
        
        <div className="flex-1 flex justify-end items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex"
              >
                {mounted ? (
                  <>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </>
                ) : (
                  <div className="h-[1.2rem] w-[1.2rem]" /> // Placeholder to prevent layout shift
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              disabled
              className="hidden lg:flex gap-2 border-primary/30 text-muted-foreground opacity-50 cursor-not-allowed"
            >
              <Lock className="w-4 h-4" />
              Download Résumé
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
                    <span className="font-bold font-headline">Venkata Sai Rohith</span>
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
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="justify-start"
                    >
                        {mounted ? (
                          <>
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          </>
                        ) : (
                          <div className="h-[1.2rem] w-[1.2rem]" />
                        )}
                        <span className="ml-2">Toggle Theme</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="justify-start opacity-50 cursor-not-allowed"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Download Résumé
                    </Button>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}