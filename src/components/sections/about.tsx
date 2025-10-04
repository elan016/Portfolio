import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function AboutSection() {
  return (
    <AnimatedSection>
      <section id="about" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            I'm an AI Engineer and Software Developer with a love for providing intelligent, scalable and user friendly solutions. I am an expert in machine learning and computer vision, with strong skills in full stack development, integrating data-driven solutions with the latest web technologies to craft products that think and adapt. My main focus is on translating science into AI-driven systems, automating processes, improving decision making and bringing machines to change the real world for better. I focus on connecting AI and software engineering by combining artificial intelligence with cloud deployment, deep learning, NLP technologies to build intelligent solutions which are not just smart but also impeccably seamless, efficient and future-proof!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6" />
                        Education
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">B.Tech in Artificial Intelligence & Data Science</h3>
                        <p className="text-muted-foreground">Nandha Engineering College, Erode, Tamil Nadu</p>
                        <p className="text-sm text-muted-foreground">Expected Sep 2027</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">High School</h3>
                        <p className="text-muted-foreground">Lions Matric Higher Secondary, Tamil Nadu</p>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Relevant Coursework & Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Machine Learning & Deep Learning</li>
                        <li>Computer Vision</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Cloud Computing</li>
                        <li>Full-Stack Web Development</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
