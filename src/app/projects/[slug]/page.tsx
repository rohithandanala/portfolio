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
    <div className="flex flex-col min-h-[100dvh]">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary" /> The Business Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Cpu className="w-5 h-5 text-primary" /> Solution Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.methodology}</p>
                  <div className="aspect-video overflow-hidden rounded-lg border">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Wrench className="w-5 h-5 text-primary" /> My Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BarChart className="w-5 h-5 text-primary" /> Key Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Business Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.results.businessImpact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Technical Performance</h4>
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
