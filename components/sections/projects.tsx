
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Eye, Rocket, Bot, Github, BookOpen } from "lucide-react";

const projectIcons: { [key: string]: React.ElementType } = {
  "MLOps End-to-End": Rocket,
  "Computer Vision": Eye,
  "Generative AI": Bot,
  "Time-Series & RNNs": Bot
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center group-data-[[data-animate=true]]:animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">
              Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my hands-on technical projects, from end-to-end MLOps pipelines to generative AI models.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          {projectsData.map((project, index) => {
            const Icon = projectIcons[project.category] || Rocket;
            return (
              <Card key={project.title} className={`flex flex-col group-data-[[data-animate=true]]:animate-slide-in-from-${index % 2 === 0 ? 'left' : 'right'} duration-500 border-primary/30`} style={{animationDelay: `${200 + (index * 100)}ms`}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-xl text-primary">
                    <Icon className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.links.live && (
                    <Button asChild size="sm" variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <Link href={project.links.live} target="_blank">
                        <Rocket className="mr-2 h-4 w-4" /> Live Project
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild size="sm" variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <Link href={project.links.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.medium && (
                    <Button asChild size="sm" variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <Link href={project.links.medium} target="_blank">
                        <BookOpen className="mr-2 h-4 w-4" /> Medium Post
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
