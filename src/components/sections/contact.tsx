import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 sm:py-32 bg-card/30">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
           Feel free to reach out to me for any inquiries or opportunities.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="mailto:elansuriyan26@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> elansuriyan26@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
