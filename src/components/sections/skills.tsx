import { skillsData, type SkillCategory } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise spans across the entire machine learning lifecycle, from data engineering to deployment and beyond.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 py-12 lg:grid-cols-2 lg:gap-8">
          {skillsData.map((category, index) => (
             <div key={category.name} className={`animate-slide-in-from-${index % 2 === 0 ? 'left' : 'right'} duration-500`}>
                <SkillCategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary/90">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <div key={skill.name} className="animate-fade-in-zoom" style={{animationDelay: `${Math.random() * 500}ms`}}>
              <Badge variant="secondary" className="flex items-center gap-2 bg-transparent border-primary/20 hover:bg-primary/10 transition-colors">
                <skill.icon className="w-4 h-4 text-primary/80" />
                <span className="font-medium text-foreground/80">{skill.name}</span>
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}