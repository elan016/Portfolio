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
            I design and build intelligent, scalable applications combining deep learning systems with modern web stacks. My background spans machine learning and full-stack development, with experience in computer vision, NLP, and generative AI. I enjoy shipping production-ready features, mentoring, and translating real-world problems into AI products.
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
