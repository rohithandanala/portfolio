import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    thumbnail?: string;
    thumbnailHint?: string;
    results: {
      businessImpact: string;
    };
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const keyMetric = project.results.businessImpact.match(/\d+%?\s\w+\s\w+/)?.[0] || 'View Details';
  
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
            data-ai-hint={project.thumbnailHint}
            width={600}
            height={400}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full">
            <div>
                 <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">{keyMetric}</Badge>
                 <p className="text-muted-foreground text-sm line-clamp-2">{project.results.businessImpact}</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}
