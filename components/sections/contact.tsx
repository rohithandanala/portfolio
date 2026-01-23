
import { socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { CodeBlock } from "../code-block";

export default function Contact() {
  const curlCommand = `curl -X POST "https://app.therohithandanala.in/api/query" -H "Content-Type: application/json" -d '{"question": "What was Rohith’s impact at Bank of America?"}'`;
  
  return (
    <section id="contact" className="">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-2 animate-fade-in duration-500">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">Ready to Scale Your AI Strategy? Let's Connect.</h2>
            <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> West Haven, CT</p>
                <Link href={socialLinks.phone} className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4 text-primary" /> +1 (203) 285-3970</Link>
                <Link href={socialLinks.email} className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4 text-primary" /> rohitha5241@gmail.com</Link>
            </div>
             <div className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
             <h3 className="text-xl font-bold font-headline text-primary">RAG Assistant API Endpoint & Test</h3>
             <CodeBlock code={curlCommand} />
             <Card className="border-primary/30">
                <CardContent className="p-4">
                    <p className="text-sm font-semibold text-primary">Response Preview:</p>
                    <p className="text-sm text-muted-foreground mt-2">"Rohith reduced portfolio risk by 12% and improved returns by 15% using Monte Carlo simulations."</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
