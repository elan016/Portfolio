'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import certifications from '@/data/certifications.json';
import { Button } from '../ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Certification = (typeof certifications)[0];

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
        
        <Dialog open={!!selectedCert} onOpenChange={(isOpen) => { if (!isOpen) setSelectedCert(null) }}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <Card
                key={cert.title}
                className="flex flex-col bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg overflow-hidden group"
              >
                 <DialogTrigger asChild>
                    <button onClick={() => setSelectedCert(cert)} className="block w-full text-left">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg bg-black/50">
                            <Image
                                src={cert.imageUrl}
                                alt={`Certificate for ${cert.title}`}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={cert.imageHint}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </button>
                </DialogTrigger>
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl mb-1">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                      {cert.url && (
                          <Button asChild variant="outline" size="sm">
                              <Link href={cert.url} target="_blank">
                                  View Credential <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                      )}
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          
          {selectedCert && (
            <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{selectedCert.title}</DialogTitle>
                <DialogDescription>{selectedCert.issuer}</DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto pr-4">
                <div className="relative aspect-video rounded-md overflow-hidden bg-black/50">
                  <Image
                    src={selectedCert.imageUrl}
                    alt={`Certificate for ${selectedCert.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                {selectedCert.url && (
                  <Button asChild>
                    <Link href={selectedCert.url} target="_blank">
                      <Eye className="mr-2 h-4 w-4" /> View Credential
                    </Link>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </section>
    </AnimatedSection>
  );
}
