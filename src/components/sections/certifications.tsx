'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import { certificationsData } from '@/data/certifications';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, BrainCircuit, Code, Award, Cloud, Sparkles, Trophy } from 'lucide-react';
import { type LucideProps } from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  BrainCircuit,
  Code,
  Award,
  Cloud,
  Sparkles,
  Trophy,
};

interface Certification {
  title: string;
  issuer: string;
  url: string;
  icon: string;
}

export function CertificationsSection() {
  const certifications: Certification[] = certificationsData as Certification[];

  return (
    <AnimatedSection>
      <section id="certifications" className="container py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements & Credentials
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Sparkles;
            return (
              <Card
                key={cert.title}
                className="glass-card flex flex-col justify-between hover:border-primary/30 group"
              >
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  {cert.url ? (
                    <Button asChild variant="link" className="p-0 h-auto text-xs text-primary gap-1 group/btn hover:no-underline">
                      <Link href={cert.url} target="_blank">
                        Verify Credential <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  ) : (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded border border-border/40">
                      Academic Honor
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
