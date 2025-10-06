import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 sm:py-32 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Ready to discuss AI strategies, software architecture, or collaboration opportunities? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="bg-card/60 backdrop-blur-sm border-primary/10 shadow-inner-glow">
                <CardHeader>
                    <CardTitle>Book a Consultation</CardTitle>
                    <CardDescription>
                        I'm available for consultations, mentorship, and project discussions. Let's connect to explore how we can work together.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                        <li>Personalized 1:1 discussion</li>
                        <li>Professional advice based on your needs</li>
                        <li>Flexible scheduling options</li>
                    </ul>
                    <Button asChild size="lg" className="w-full">
                        <Link href="mailto:elangokandhasamy76@gmail.com">
                            <MessageCircle className="mr-2 h-5 w-5" /> Schedule a Meeting
                        </Link>
                    </Button>
                </CardContent>
            </Card>
            <div className="space-y-8">
                <Card className="bg-card/60 backdrop-blur-sm border-primary/10 shadow-inner-glow">
                    <CardHeader>
                        <CardTitle>Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="mailto:elangokandhasamy76@gmail.com" className="flex items-center gap-4 group">
                           <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">elangokandhasamy76@gmail.com</span>
                        </Link>
                        <div className="flex items-center gap-4 group">
                           <Phone className="h-5 w-5 text-muted-foreground"/>
                           <span className="text-muted-foreground">+91 9123578496</span>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-card/60 backdrop-blur-sm border-primary/10 shadow-inner-glow">
                    <CardHeader>
                        <CardTitle>Connect With Me</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="https://github.com" target="_blank" className="flex items-center gap-4 group">
                           <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-4 group">
                           <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
                        </Link>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
