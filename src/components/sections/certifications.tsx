'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import certifications from '@/data/certifications.json';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ExternalLink, BrainCircuit, Code, BarChart3, Sparkles } from 'lucide-react';
import { type LucideProps } from 'lucide-react';

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  BrainCircuit,
  Code,
  BarChart3,
  Sparkles,
};

export function CertificationsSection() {
  return (
    <AnimatedSection>
      <section id="certifications" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            My professional certifications and credentials.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto bg-card/60 backdrop-blur-sm border-primary/10 shadow-inner-glow">
          <CardContent className="pt-6">
            <div className="divide-y divide-border">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon] || Sparkles;
                return (
                  <div
                    key={cert.title}
                    className={`py-4 ${index === 0 ? 'pt-0' : ''} ${index === certifications.length - 1 ? 'pb-0' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full border border-primary/20">
                          <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        {cert.url && (
                            <Button asChild variant="link" className="px-0 h-auto mt-1">
                                <Link href={cert.url} target="_blank">
                                    View Credential <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </AnimatedSection>
  );
}
