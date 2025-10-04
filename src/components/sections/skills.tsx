import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import skills from '@/data/skills.json';
import { Badge } from '../ui/badge';
import { Award, Gamepad2, Handshake } from 'lucide-react';

interface SkillCategory {
  category: string;
  skills: string[];
}

export function SkillsSection() {
  const skillData: SkillCategory[] = skills.skills;
  const otherActivities = skills.otherActivities;

  return (
    <AnimatedSection>
      <section id="skills" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Activities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            My technical expertise and community involvement.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillData.map((category) => (
            <Card
              key={category.category}
              className="flex flex-col bg-card/60 backdrop-blur-sm border-primary/10 rounded-lg shadow-inner-glow"
            >
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
          <Card className="md:col-span-2 lg:col-span-1 bg-card/60 backdrop-blur-sm border-primary/10 rounded-lg shadow-inner-glow">
              <CardHeader>
                <CardTitle>Leadership & Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <p>{otherActivities[0]}</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <Handshake className="h-6 w-6 text-green-400" />
                    <div>
                        <p>{otherActivities[1]}</p>
                        <p>{otherActivities[2]}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Gamepad2 className="h-6 w-6 text-blue-400" />
                    <p>{otherActivities[3]}</p>
                 </div>
              </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
