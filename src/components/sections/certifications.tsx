import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import certifications from '@/data/certifications.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CertificationsSection() {
  return (
    <AnimatedSection>
      <section id="certifications" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            My commitment to continuous learning and professional growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const image = PlaceHolderImages.find((img) => img.id === cert.image);
            return (
              <Card
                key={cert.name}
                className="bg-card/60 backdrop-blur-sm border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  )}
                  <div>
                    <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
