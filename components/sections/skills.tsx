
"use client";

import { skillsColumns } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center group-data-[[data-animate=true]]:animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-destructive">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise spans across the entire machine learning lifecycle, from data engineering to deployment and beyond.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2">
            {skillsColumns.map((column, colIndex) => (
              <div 
                key={`col-${colIndex}`} 
                className={`flex flex-col gap-8 ${colIndex === 0 ? 'md:border-r md:border-border md:pr-8' : ''}`}
              >
                {column.map((category, catIndex) => (
                  <div key={category.name} className="space-y-4 group-data-[[data-animate=true]]:animate-fade-in-zoom" style={{animationDelay: `${200 + (catIndex * 100) + (colIndex * 100)}ms`}}>
                    <h3 className="text-xl font-bold font-headline text-primary">{category.name}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1 shrink-0">▸</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                    {catIndex < column.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
