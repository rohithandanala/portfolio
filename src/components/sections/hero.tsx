import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot } from "lucide-react";

const impactCards = [
  { title: "12%", description: "Risk Reduction" },
  { title: "20%", description: "Accuracy (Clinical AI)" },
  { title: "15%", description: "Improved Returns" },
];

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-grid-plus px-4 py-8 md:py-12">
      <div className="w-[90%] md:w-[60%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-4 text-center md:text-left">
            <div className="space-y-2 pt-2">
              <p className="text-xs text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, my name is</p>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-destructive animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Venkata Sai Rohith Andanala</h1>
              <p className="text-sm font-semibold text-primary animate-fade-in-up" style={{ animationDelay: '0.3s' }}>AI/ML Engineer</p>
              <p className="max-w-[700px] text-foreground text-sm mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                I build Production-Ready AI Systems that Drive Business Impact, specializing in Scalable Predictive Modeling, MLOps, and Agentic AI solutions across Healthcare and Enterprise IT.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start items-center">
              <Button asChild size="sm" className="group w-full sm:w-fit border-primary hover:bg-destructive hover:border-destructive hover:text-destructive-foreground animate-slide-in-from-left" variant="outline" style={{ animationDelay: '0.6s' }}>
                <Link href="#case-studies">
                  Explore My Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="sm" className="group w-full sm:w-fit border-primary animate-slide-in-from-left" variant="default" style={{ animationDelay: '0.7s' }}>
                <Link href="#rag-agent">
                  <Bot className="mr-2 h-4 w-4" />
                  Interact with Agent
                </Link>
              </Button>
            </div>

            <div className="w-full pt-4 flex flex-row gap-2">
              {impactCards.map((card, index) => (
                <div key={index} className="animate-slide-up w-1/3" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                    <CardHeader className="p-2">
                      <CardTitle className="text-destructive text-base font-bold font-headline">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 pt-0">
                      <p className="text-[10px] text-foreground leading-tight">{card.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Desktop Image) */}
          <div className="md:col-span-2 hidden md:flex items-center justify-center relative h-full">
            <div className="w-[280px] h-[280px] relative">
              <div className="absolute inset-0 border-2 border-primary rounded-md animate-fade-in" style={{ animationDelay: '0.6s', transform: 'translate(15px, 15px)' }}></div>
              <div className="absolute inset-0 border-2 border-destructive rounded-md animate-fade-in" style={{ animationDelay: '0.8s', transform: 'translate(30px, 30px)' }}></div>
              <div className="relative w-full h-full rounded-md overflow-hidden animate-jelly-border border-2 border-primary/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFbVhWI1t5zYw/profile-displayphoto-shrink_200_200/B4EZa26K12GcAY-/0/1746825425164?e=2147483647&v=beta&t=OnlZTQyhtQqJsxz6XXQVI74qxLqcY0yxIwqX77ISOsc"
                  alt="Rohith Andanala"
                  data-ai-hint="professional portrait"
                  fill
                  sizes="(max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
