import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">Case Studies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my production-grade case studies to see how I solve complex business problems with data-driven AI solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none">
          {projects.map((project, index) => (
            <div key={project.slug} className={`animate-slide-in-from-${index % 2 === 0 ? 'left' : 'right'} duration-500`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
