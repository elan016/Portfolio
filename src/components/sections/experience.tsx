'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Project Intern (Speech-to-Text)",
    company: "ShenAi Private Solutions",
    location: "Erode, Tamil Nadu (Remote)",
    period: "Aug 2024 – Oct 2024",
    highlights: [
      "Built deep learning model architectures for speech-to-text transcription using Python.",
      "Designed robust audio preprocessing and noise-filtering pipelines for high-accuracy recognition.",
      "Collaborated on curating, preparing, and augmenting massive audio datasets.",
      "Integrated model checkpoints into the final web applications for real-world usability."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "SAN Technovation Pvt Ltd",
    location: "Erode, Tamil Nadu",
    period: "Jun 2024 – Jul 2024",
    highlights: [
      "Conducted data audits and insights discovery utilizing Python and MySQL.",
      "Built clean data pipelines, resolving missing values and cleaning anomalies.",
      "Developed interactive dashboards to visualize critical business metrics for management.",
      "Delivered quantitative reports highlighting operational trends and user patterns."
    ]
  }
];

export function ExperienceSection() {
  return (
    <AnimatedSection>
      <section id="experience" className="container py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 md:pl-8 border-l border-primary/20 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company + index} className="relative">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>

              <Card className="glass-card hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 border border-border/50 px-2.5 py-1 rounded-md w-fit">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm font-semibold text-primary flex items-center gap-4 mt-1">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-normal">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
