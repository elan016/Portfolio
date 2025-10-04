import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 sm:py-32 bg-card/30">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="mailto:hello@example.com">
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Github">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
