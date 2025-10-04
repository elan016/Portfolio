import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Award, Mic } from 'lucide-react';

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="home" className="container flex flex-col justify-center items-center text-center py-32 sm:py-48">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elango Kandhasamy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            AI Engineer & Software Developer building intelligent, scalable, and adaptive digital experiences.
          </p>
          <p className="mt-2 text-md text-muted-foreground">
            Director & CTO at Levroun Enterprise | Pursuing AI & Data Science @ Nandha Engineering College
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 p-2 border rounded-md bg-card/50">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">3rd Place — Innovation Day 2025 (Speech-to-Text App)</span>
            </div>
             <div className="flex items-center gap-2 p-2 border rounded-md bg-card/50">
                <Mic className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Live Speech-to-Text AI project</span>
            </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </AnimatedSection>
  );
}
