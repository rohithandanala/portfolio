import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart, Briefcase, Cpu, Wrench } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-[100dvh] pt-14">
      <Header />
      <main className="flex-1">
        <article className="container py-12 md:py-24 lg:py-32">
          <div className="mb-8">
            <Link href="/#case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>

          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
              {project.title}
            </h1>
          </header>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive"><Briefcase className="w-5 h-5 text-destructive" /> The Business Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.problem}</p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive"><Cpu className="w-5 h-5 text-destructive" /> Solution Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.methodology}</p>
                  <div className="aspect-video overflow-hidden rounded-lg border border-primary/50">
                    <Image
                      src={project.architectureImage}
                      alt="Solution Architecture Diagram"
                      data-ai-hint={project.architectureImageHint}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <aside className="space-y-8 lg:col-span-1">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary"><Wrench className="w-5 h-5 text-primary" /> My Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary"><BarChart className="w-5 h-5 text-primary" /> Key Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-destructive">Business Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.results.businessImpact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive">Technical Performance</h4>
                    <p className="text-sm text-muted-foreground">{project.results.technicalPerformance}</p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
