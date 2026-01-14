
import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center group-data-[[data-animate=true]]:animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">Case Studies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my production-grade case studies to see how I solve complex business problems with data-driven AI solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-8 group-data-[[data-animate=true]]:animate-fade-in-zoom" style={{animationDelay: '200ms'}}>
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={project.slug} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <ProjectCard project={project} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary/50 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary/50 hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
