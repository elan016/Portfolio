'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  Layout, 
  Server, 
  BrainCircuit, 
  Database, 
  Settings,
  Sparkles,
  Award,
  Users,
  Film,
  Compass
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const iconMap: Record<string, LucideIcon> = {
  'Programming': Terminal,
  'Frontend': Layout,
  'Backend': Server,
  'AI / ML': BrainCircuit,
  'Database': Database,
  'DevOps & Tools': Settings,
};

export function SkillsSection() {
  const skillData: SkillCategory[] = skillsData.skills;
  const otherActivities = skillsData.otherActivities;

  return (
    <AnimatedSection>
      <section id="skills" className="container py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Activities
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillData.map((category) => {
            const Icon = iconMap[category.category] || Sparkles;
            return (
              <Card
                key={category.category}
                className="glass-card flex flex-col hover:border-primary/30 group"
              >
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-2 flex-1">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/40 border border-border/40 hover:bg-primary/10 hover:border-primary/30 transition-all font-medium py-1 px-2.5 rounded-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}

          {/* Activities Card */}
          <Card className="glass-card md:col-span-2 lg:col-span-3 hover:border-primary/30">
            <CardHeader className="pb-3 border-b border-border/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Compass className="h-5 w-5 text-primary" />
                Leadership & Other Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Innovation Day</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{otherActivities[0]}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-blue-400/10 border border-blue-400/20 text-blue-400">
                  <Film className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Film Workshop 2025</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Organizer & Coordinator for workshop with 70+ active participants.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-green-400/10 border border-green-400/20 text-green-400">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Cultural Club</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Joint Secretary for the cultural club (2025–2026), orchestrating college-wide events.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
