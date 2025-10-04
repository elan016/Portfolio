import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import projects from '@/data/projects.json';
import { Button } from '../ui/button';
import { Code, Eye } from 'lucide-react';

export function ProjectsSection() {
  return (
    <AnimatedSection>
      <section id="projects" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg overflow-hidden group"
              >
                <CardHeader>
                  <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                </CardHeader>
                <div className="flex flex-col flex-1 p-6 pt-0">
                  <CardDescription className="flex-1">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardFooter className="p-0 pt-4 flex justify-between">
                    {project.githubUrl && (
                        <Button asChild variant="outline">
                        <Link href={project.githubUrl} target="_blank">
                            <Code className="mr-2 h-4 w-4" /> Code
                        </Link>
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button asChild>
                        <Link href={project.liveUrl} target="_blank">
                            <Eye className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                        </Button>
                    )}
                  </CardFooter>
                </div>
              </Card>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
