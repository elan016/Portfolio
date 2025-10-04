import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const experiences = [
    {
        role: "Director & Chief Technology Officer",
        company: "Levroun Enterprise",
        location: "Erode, Tamil Nadu",
        period: "Apr 2025 – Present",
        description: "Defining the company's technological vision and strategic direction, overseeing the full product development lifecycle, leading innovation initiatives, and ensuring cross-functional collaboration to align technology with business goals."
    },
    {
        role: "AI/ML Intern",
        company: "ShenAi Private Solutions",
        location: "Erode, Tamil Nadu",
        period: "Aug 2024 – Oct 2024",
        description: "Contributed to a live Speech-to-Text project using deep learning. Responsibilities included curating and preparing datasets, running experiments, and training models to iteratively improve accuracy and performance."
    }
];

export function ExperienceSection() {
  return (
    <AnimatedSection>
      <section id="experience" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            My professional journey and key contributions.
          </p>
        </div>
        <div className="relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
             {experiences.map((exp, index) => (
                <div key={exp.role} className={`md:flex items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-5/12"></div>
                    <div className="md:w-2/12 hidden md:flex justify-center">
                        <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                           <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                    </div>
                     <div className="md:w-5/12">
                        <Card className={`bg-card/60 backdrop-blur-sm border-primary/10 shadow-inner-glow`}>
                            <CardHeader>
                                <CardTitle>{exp.role}</CardTitle>
                                <CardDescription>
                                    {exp.company} • {exp.location}
                                    <br />
                                    <span className="text-sm">{exp.period}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
             ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
