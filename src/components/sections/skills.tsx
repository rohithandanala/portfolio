"use client";

import { skillsColumns } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Skills() {
  return (
    <section id="skills" className="py-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline text-destructive">Technical Expertise</h2>
            <p className="max-w-[900px] text-xs text-muted-foreground md:text-sm/relaxed">
              Full-lifecycle engineering from clinical data standards to production GenAI deployment.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl items-start gap-8 py-8 md:grid-cols-2">
            {skillsColumns.map((column, colIndex) => (
              <div 
                key={`col-${colIndex}`} 
                className={`flex flex-col gap-6 ${colIndex === 0 ? 'md:border-r md:border-primary/20 md:pr-8' : ''}`}
              >
                {column.map((category, catIndex) => (
                  <div key={category.name} className="space-y-3 animate-fade-in-zoom" style={{animationDelay: `${100 + (catIndex * 50)}ms`}}>
                    <h3 className="text-lg font-bold font-headline text-primary">{category.name}</h3>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1 shrink-0 text-[10px]">▸</span>
                          <span className="leading-tight">{skill}</span>
                        </li>
                      ))}
                    </ul>
                    {catIndex < column.length - 1 && <Separator className="my-2 opacity-30" />}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
