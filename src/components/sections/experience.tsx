import { experienceData, educationData } from "@/lib/data";
import { CircleCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline text-destructive">
              Experience & Education
            </h2>
            <p className="max-w-[900px] text-xs text-muted-foreground md:text-sm/relaxed">
              My journey architecting high-impact clinical AI and scalable financial models.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-headline text-primary">Work History</h3>
            <div className="relative space-y-6 border-l-2 border-primary/30 pl-6">
              {experienceData.map((job, index) => (
                <div key={job.company} className="relative animate-slide-in-from-left" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{job.period}</p>
                  <h4 className="text-base font-bold text-primary">{job.title}</h4>
                  <p className="text-xs font-semibold text-foreground/80">{job.company}</p>
                  <ul className="mt-2 space-y-1.5">
                    {job.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CircleCheck className="h-3 w-3 mt-0.5 text-primary/60 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-headline text-primary">Education</h3>
            <div className="relative space-y-6 border-l-2 border-primary/30 pl-6">
              {educationData.map((edu, index) => (
                <div key={edu.institution} className="relative animate-slide-in-from-left" style={{animationDelay: `${(experienceData.length + index) * 150}ms`}}>
                   <div className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{edu.period}</p>
                  <h4 className="text-base font-bold text-primary">{edu.degree}</h4>
                  <p className="text-xs font-semibold text-foreground/80">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
