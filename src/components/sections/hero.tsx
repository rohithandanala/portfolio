import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const impactCards = [
  { title: "$2.3M", description: "Annual Savings (Automated Claim Intake)" },
  { title: "92%", description: "Data Accuracy (Document Intelligence Pipelines)" },
  { title: "3+ Years", description: "End-to-End ML & MLOps Experience" },
];

export default function Hero() {
  return (
    <section className="w-full min-h-[100vh] flex items-center justify-center bg-grid-slate-900/[0.04] px-4 py-16 md:py-0">
      <div className="w-[90%] md:w-[60%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Mobile Image (Visible on small screens) */}
          <div className="md:hidden flex items-center justify-center relative h-full animate-fade-in-scale-up duration-500">
            <div className="w-64 h-64 relative aspect-square">
                <div className="absolute inset-0 animate-jelly-border border-2 border-primary"></div>
              <Image
                src="https://media.licdn.com/dms/image/D4E03AQGgW4g9gfQd5w/profile-displayphoto-shrink_400_400/0/1718318451952?e=1726704000&v=beta&t=4GDb-E4aG_9yv1J7pC-MYk2n5hUvL83l1-nGCmO_O6E"
                alt="Rohith Andanala"
                data-ai-hint="professional portrait"
                fill
                className="object-cover border-4 border-primary/20 shadow-2xl shadow-primary/10 animate-jelly-border"
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-6 text-center md:text-left">
            <div className="space-y-4 animate-slide-up duration-400 [animation-delay:200ms]">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Building Production-Ready AI Systems that Drive Business Impact
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-lg mx-auto md:mx-0">
                AI/ML Engineer specializing in Scalable Predictive Modeling, MLOps, and Generative AI across Healthcare and Enterprise IT.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in duration-500 [animation-delay:400ms]">
              <Button asChild size="lg" className="group w-full sm:w-fit">
                <Link href="#case-studies">
                  Explore My Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="w-full pt-4 grid gap-4 sm:grid-cols-3">
              {impactCards.map((card, index) => (
                <div key={index} className="animate-slide-up duration-400" style={{ animationDelay: `${500 + index * 100}ms` }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                    <CardHeader className="p-4">
                      <CardTitle className="text-primary text-2xl font-bold font-headline">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Desktop Image) */}
          <div className="md:col-span-2 hidden md:flex items-center justify-center relative h-full animate-fade-in-scale-up duration-500">
            <div className="w-full h-full relative aspect-square">
               <div className="absolute inset-0 animate-jelly-border border-2 border-primary"></div>
              <Image
                src="https://media.licdn.com/dms/image/D4E03AQGgW4g9gfQd5w/profile-displayphoto-shrink_400_400/0/1718318451952?e=1726704000&v=beta&t=4GDb-E4aG_9yv1J7pC-MYk2n5hUvL83l1-nGCmO_O6E"
                alt="Rohith Andanala"
                data-ai-hint="professional portrait"
                fill
                className="object-cover border-4 border-primary/20 shadow-2xl shadow-primary/10 animate-jelly-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}