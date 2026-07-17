'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Code, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
  features?: string[];
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = projectsData as Project[];

  return (
    <AnimatedSection>
      <section id="projects" className="container py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        
        <Dialog open={!!selectedProject} onOpenChange={(isOpen) => { if (!isOpen) setSelectedProject(null); }}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="glass-card flex flex-col rounded-xl overflow-hidden group hover:border-primary/30"
              >
                {/* Image Container with click to open dialog */}
                <DialogTrigger asChild>
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="block w-full relative aspect-[16/9] overflow-hidden bg-black/50 border-b border-border/20 cursor-pointer"
                    aria-label={`Open details for ${project.title}`}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      data-ai-hint={project.imageHint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-background/90 text-foreground px-4 py-2 rounded-lg border border-primary/20 text-xs font-semibold shadow-lg backdrop-blur-sm">
                        View Detailed Spec
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 min-h-[60px]">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-secondary/40 border border-border/30 hover:bg-primary/5 text-xs py-0.5 px-2 rounded"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/20 flex gap-4">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" className="flex-1 gap-2 glass-card">
                        <Link href={project.githubUrl} target="_blank">
                          <Code className="h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <Button asChild size="sm" className="flex-1 gap-2">
                        <Link href={project.liveUrl} target="_blank">
                          <Eye className="h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    ) : (
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedProject(project)} size="sm" className="flex-1 gap-2">
                          <Sparkles className="h-4 w-4" /> Learn More
                        </Button>
                      </DialogTrigger>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {selectedProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur border border-primary/20">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl font-bold flex items-center gap-2">
                  <span>{selectedProject.title}</span>
                </DialogTitle>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/70">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                <div className="md:col-span-6">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border bg-black/50">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={`Screenshot of ${selectedProject.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </DialogDescription>
                    
                    {selectedProject.features && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-foreground">Key Features:</h4>
                        <ul className="space-y-1.5">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border/20">
                    {selectedProject.githubUrl && (
                      <Button asChild variant="outline" className="flex-1 gap-2 glass-card">
                        <Link href={selectedProject.githubUrl} target="_blank">
                          <Code className="h-4 w-4" /> Repository
                        </Link>
                      </Button>
                    )}
                    {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                      <Button asChild className="flex-1 gap-2">
                        <Link href={selectedProject.liveUrl || selectedProject.githubUrl} target="_blank">
                          <Eye className="h-4 w-4" /> {selectedProject.liveUrl ? 'Live Demo' : 'View Code'}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </section>
    </AnimatedSection>
  );
}
