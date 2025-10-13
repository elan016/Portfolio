'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import certifications from '@/data/certifications.json';
import { Button } from '../ui/button';
import { ExternalLink, Award, Code, BarChart3, BrainCircuit, Sparkles } from 'lucide-react';
import { FC } from 'react';

type IconName = 'Award' | 'Code' | 'BarChart3' | 'BrainCircuit' | 'Sparkles';

const iconComponents: Record<IconName, FC<{ className?: string }>> = {
  Award,
  Code,
  BarChart3,
  BrainCircuit,
  Sparkles,
};

const getIconComponent = (iconName: string | undefined) => {
  return iconComponents[iconName as IconName] || Award;
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {certifications.map((cert) => {
              const IconComponent = getIconComponent(cert.icon);
              return (
                <Card
                  key={cert.title}
                  className="flex flex-col bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  <CardHeader className="flex-row items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className='flex-1'>
                          <CardTitle className="font-headline text-xl mb-1">{cert.title}</CardTitle>
                          <CardDescription>{cert.issuer}</CardDescription>
                      </div>
                  </CardHeader>
                  <CardContent>
                      {cert.url && (
                          <Button asChild variant="outline" size="sm">
                              <Link href={cert.url} target="_blank">
                                  View Credential <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                      )}
                  </CardContent>
                </Card>
              )
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
