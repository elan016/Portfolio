'use client';

import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Have an internship/job opportunity, a project idea, or just want to connect? Send me a message.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Contact Form (7 columns) */}
            <div className="md:col-span-7 flex">
              <ContactForm />
            </div>

            {/* Contact Cards (5 columns) */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <Card className="glass-card flex-1 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Details</CardTitle>
                  <CardDescription className="text-xs">Direct communication channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link 
                    href="mailto:elangokandhasamy284@gmail.com" 
                    className="flex items-center gap-4 group p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Email Me</span>
                      <span className="text-sm font-semibold group-hover:text-primary transition-colors">elangokandhasamy284@gmail.com</span>
                    </div>
                  </Link>

                  <div className="flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Call Me</span>
                      <span className="text-sm font-semibold">+91 9123578496</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card flex-1 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Professional Networks</CardTitle>
                  <CardDescription className="text-xs">Connect with me online</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3">
                  <Link 
                    href="https://github.com/elan026" 
                    target="_blank" 
                    className="flex items-center gap-4 group p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">GitHub</span>
                  </Link>

                  <Link 
                    href="https://linkedin.com" 
                    target="_blank" 
                    className="flex items-center gap-4 group p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">LinkedIn</span>
                  </Link>

                  <Link 
                    href="https://leetcode.com/u/elan026/" 
                    target="_blank" 
                    className="flex items-center gap-4 group p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">LeetCode</span>
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
