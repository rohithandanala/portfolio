
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const impactCards = [
  { title: "12%", description: "Risk Reduction (Portfolio Mgmt)" },
  { title: "92%", description: "Data Accuracy (Doc Intelligence)" },
  { title: "15%", description: "Improved Returns (Trading Algo)" },
];

type HeroProps = {
  setChatbotOpen?: (open: boolean) => void;
};

export default function Hero({ setChatbotOpen }: HeroProps) {
  const handleOpenChatbot = () => {
    if (setChatbotOpen) {
      setChatbotOpen(true);
    }
  };
  
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-grid-plus px-4 py-8 md:py-12">
      <div className="w-[90%] md:w-[60%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Mobile Image (Visible on small screens) */}
          <div className="md:hidden flex items-center justify-center relative animate-fade-in-scale-up duration-500">
             <div className="w-[300px] h-[300px] relative">
              <div className="absolute inset-0 border-2 border-primary rounded-md animate-fade-in" style={{ animationDelay: '1.0s', transform: 'translate(15px, 15px)' }}></div>
              <div className="absolute inset-0 border-2 border-destructive rounded-md animate-fade-in" style={{ animationDelay: '1.2s', transform: 'translate(30px, 30px)' }}></div>
              <div className="relative w-full h-full rounded-md overflow-hidden animate-jelly-border border-2 border-primary/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFbVhWI1t5zYw/profile-displayphoto-shrink_200_200/B4EZa26K12GcAY-/0/1746825425164?e=2147483647&v=beta&t=OnlZTQyhtQqJsxz6XXQVI74qxLqcY0yxIwqX77ISOsc"
                  alt="Rohith Andanala"
                  data-ai-hint="professional portrait"
                  fill
                  sizes="(max-width: 768px) 75vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-4 text-center md:text-left">
            <div className="space-y-2 pt-2">
              <p className="text-xs text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, my name is</p>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-destructive animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Venkata Sai Rohith Andanala</h2>
              <p className="text-sm font-semibold text-primary animate-fade-in-up" style={{ animationDelay: '0.3s' }}>AI/ML Engineer</p>
              <p className="max-w-[700px] text-foreground text-sm mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                I build Production-Ready AI Systems that Drive Business Impact, specializing in Scalable Predictive Modeling, MLOps, and Generative AI solutions across Healthcare and Enterprise IT.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start items-center">
              <Button asChild size="sm" className="group w-full sm:w-fit border-primary hover:bg-destructive hover:border-destructive hover:text-destructive-foreground animate-slide-in-from-left" variant="outline" style={{ animationDelay: '0.6s' }}>
                <Link href="#case-studies">
                  Explore My Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="pt-1 space-y-2 text-center md:text-left">
              <h2 className="text-xs font-semibold text-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Want to know more about me!</h2>
                <div className="relative inline-block animate-slide-in-from-left" style={{ animationDelay: '0.7s' }}>
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground relative overflow-hidden"
                        onClick={handleOpenChatbot}
                    >
                         <span className="absolute h-full w-full animate-rotating-border bg-[conic-gradient(from_90deg_at_50%_50%,#7DF9FF_0%,#FF0044_50%,#7DF9FF_100%)]"></span>
                         <span className="relative z-10 bg-background rounded-md px-3 py-1 text-destructive group-hover:text-destructive-foreground">Ask my RAG Agent</span>
                    </Button>
                </div>
            </div>


            <div className="w-full pt-2 flex flex-row gap-2">
              {impactCards.map((card, index) => (
                <div key={index} className="animate-slide-up w-1/3" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                    <CardHeader className="p-3">
                      <CardTitle className="text-destructive text-lg font-bold font-headline">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <p className="text-xs text-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Desktop Image) */}
          <div className="md:col-span-2 hidden md:flex items-center justify-center relative h-full">
            <div className="w-[300px] h-[300px] relative">
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

    