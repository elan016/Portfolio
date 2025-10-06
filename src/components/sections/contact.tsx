import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, Instagram, Facebook, Code } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const XIcon = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors fill-current"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

const RedditIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors fill-current"
    >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.01 16.14c-1.09.64-2.52.98-4.01.98-1.49 0-2.92-.34-4.01-.98-.38-.22-.53-.71-.31-1.09.22-.38.71-.53 1.09-.31.81.47 1.93.73 3.23.73.57 0 1.13-.07 1.66-.2.43-.1.87.17.97.6.11.44-.17.88-.6.99zm-1.89-3.23c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96zm-6.24 0c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96zm8.83-2.92c.38-.22.53-.71.31-1.09-.22-.38-.71-.53-1.09-.31-1.3.75-2.92 1.16-4.63 1.16-1.71 0-3.33-.41-4.63-1.16-.38-.22-.87 0-1.09.31-.22.38-.07.87.31 1.09 1.51.87 3.33 1.34 5.41 1.34s3.9-.47 5.41-1.34z" />
    </svg>
);


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
              Have a project in mind, a question, or just want to connect? Send me a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactForm />
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
                    <CardContent className="grid grid-cols-2 gap-4">
                        <Link href="https://github.com/elan026" target="_blank" className="flex items-center gap-4 group">
                           <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-4 group">
                           <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
                        </Link>
                        <Link href="https://www.instagram.com/ft.elan/" target="_blank" className="flex items-center gap-4 group">
                           <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">Instagram</span>
                        </Link>
                        <Link href="https://x.com/elan026" target="_blank" className="flex items-center gap-4 group">
                           <XIcon />
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">X</span>
                        </Link>
                        <Link href="https://www.reddit.com/user/DeliciousSweet7036/" target="_blank" className="flex items-center gap-4 group">
                           <RedditIcon />
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">Reddit</span>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61576269130739" target="_blank" className="flex items-center gap-4 group">
                           <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">Facebook</span>
                        </Link>
                         <Link href="https://leetcode.com/u/elan026/" target="_blank" className="flex items-center gap-4 group">
                           <Code className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                           <span className="text-muted-foreground group-hover:text-foreground transition-colors">LeetCode</span>
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
