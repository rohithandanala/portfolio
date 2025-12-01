import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu } from "lucide-react";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    thumbnail?: string;
    thumbnailHint?: string;
    role: string;
    results: {
      businessImpact: string;
      technicalPerformance: string;
    };
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  // Example: "$2.3M in annual cost savings"
  const metric1 = project.results.businessImpact.split(',')[0]; 
  // Example: "Improved data accuracy by 92%"
  const metric2 = project.results.technicalPerformance.split(',')[0];
  // Example: "Built AI pipelines integrating OCR, NLP..."
  const technicalFocus = project.role.split('. ')[0];

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        {project.thumbnail && (
          <div className="relative w-full h-48">
            <Image
              src={project.thumbnail}
              alt={`Thumbnail for ${project.title}`}
              data-ai-hint={project.thumbnailHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow justify-between">
            <div className="space-y-3">
                 <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">{metric1}</Badge>
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">{metric2}</Badge>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-primary">
                    <Cpu className="w-4 h-4 mt-0.5 shrink-0" />
                    <p className="line-clamp-2">{technicalFocus}</p>
                 </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}
