import Link from 'next/link';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import speaking from '@/data/speaking.json';
import { Separator } from '../ui/separator';

export function SpeakingSection() {
  return (
    <AnimatedSection>
      <section id="speaking" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Speaking
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Sharing knowledge and insights with the tech community.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <ul className="space-y-4">
            {speaking.map((talk, index) => (
              <li key={talk.topic}>
                <Link
                  href={talk.url}
                  className="block p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/10 shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <p className="font-headline text-xl font-semibold text-primary-foreground">{talk.topic}</p>
                      <p className="text-muted-foreground mt-1">{talk.event}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:text-right flex-shrink-0">
                      <div className="flex items-center justify-start sm:justify-end gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {talk.date}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {talk.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-accent mt-4 group">
                    View talk details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
                {index < speaking.length - 1 && <Separator className="my-4 md:hidden" />}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatedSection>
  );
}
