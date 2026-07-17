'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code2, Award, Briefcase, FileBadge2, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    label: 'LeetCode Problems Solved',
    value: '150+',
    icon: Code2,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
  },
  {
    label: 'Major Portfolio Projects',
    value: '4',
    icon: Award,
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    label: 'Industry Internships',
    value: '2',
    icon: Briefcase,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    label: 'Certifications Completed',
    value: '8+',
    icon: FileBadge2,
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
];

export function AboutSection() {
  return (
    <AnimatedSection>
      <section id="about" className="container py-24 sm:py-32 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Recruiter-focused about details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Passionate AI Engineer & Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a B.Tech Artificial Intelligence & Data Science student with a strong engineering foundation. I specialize in building end-to-end products, combining robust backend services with modern responsive user interfaces and integrating custom machine learning models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Languages</h4>
                  <p className="text-xs text-muted-foreground">Java, Python, JavaScript</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Frameworks</h4>
                  <p className="text-xs text-muted-foreground">React, Node.js, Flask, FastAPI</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Development Focus</h4>
                  <p className="text-xs text-muted-foreground">Scalable Software, ML Ops</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Infrastructure</h4>
                  <p className="text-xs text-muted-foreground">Linux Environment, Docker, Git</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <Card className="glass-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-base">B.Tech in Artificial Intelligence & Data Science</h4>
                  <p className="text-sm text-muted-foreground">Nandha Engineering College, Tamil Nadu</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-xs font-medium text-muted-foreground">
                    <span className="bg-secondary/50 px-2.5 py-1 rounded-md border border-border">CGPA: 8.4</span>
                    <span className="bg-secondary/50 px-2.5 py-1 rounded-md border border-border">Graduation: Expected 2027</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="glass-card flex flex-col justify-between p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.bg} mb-4`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold tracking-tight mb-1">{stat.value}</h4>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
