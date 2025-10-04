import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="home" className="container flex flex-col justify-center items-center text-center py-32 sm:py-48">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elansuriyan
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A Passionate Full-Stack Web Developer.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/Elan_suriyan_Resume.pdf" target="_blank">Download CV</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Contact Info</Link>
          </Button>
        </div>
        <div className="mt-8 flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Elan026" target="_blank" aria-label="Github">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/elansuriyan-s/" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:elansuriyan26@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <Link href="/Elan_suriyan_Resume.pdf" target="_blank" aria-label="Resume">
                <FileText className="h-6 w-6" />
              </Link>
            </Button>
          </div>
      </section>
    </AnimatedSection>
  );
}
