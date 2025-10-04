import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="about" className="container flex flex-col justify-center items-center text-center py-32 sm:py-48">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Sayed — DevOps & Cloud Engineer
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Specializing in building resilient, scalable infrastructure and automating software delivery pipelines. Passionate about cloud-native technologies and open-source.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </AnimatedSection>
  );
}
