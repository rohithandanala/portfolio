import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 animate-fade-in duration-500">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Ready to Scale Your AI Strategy? Let's Connect.</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="icon">
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:8607674975" className="text-muted-foreground hover:text-primary transition-colors">
                      (860) 767-4975
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:sairohith8157@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sairohith8157@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}