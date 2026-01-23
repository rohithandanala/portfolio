
import { experienceData, educationData } from "@/lib/data";
import { CircleCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center group-[.animate-fade-in]/experience:animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">
              Experience & Education
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and academic background in computer science and machine learning.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-12 py-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-primary">Work History</h3>
            <div className="relative space-y-8 border-l-2 border-primary/50 pl-8">
              {experienceData.map((job, index) => (
                <div key={job.company} className="relative group-data-[[data-animate=true]]:animate-slide-in-from-left" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <h4 className="text-lg font-semibold text-primary">{job.title}</h4>
                  <p className="font-medium text-foreground/80">{job.company}</p>
                  <ul className="mt-2 space-y-1">
                    {job.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CircleCheck className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-primary">Education</h3>
            <div className="relative space-y-8 border-l-2 border-primary/50 pl-8">
              {educationData.map((edu, index) => (
                <div key={edu.institution} className="relative group-data-[[data-animate=true]]:animate-slide-in-from-left" style={{animationDelay: `${(experienceData.length + index) * 200}ms`}}>
                   <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                  <p className="font-medium text-foreground/80">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
