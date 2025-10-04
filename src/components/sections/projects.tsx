import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import projects from '@/data/projects.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProjectsSection() {
  return (
    <AnimatedSection>
      <section id="projects" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A selection of my work, from infrastructure automation to web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.image);
            return (
              <Card
                key={project.title}
                className="flex flex-col bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg overflow-hidden group"
              >
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </CardHeader>
                <div className="flex flex-col flex-1 p-6">
                  <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="flex-1">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardFooter className="p-0 pt-4">
                    <Link href={project.url} className="flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
