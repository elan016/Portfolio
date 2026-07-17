'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Github, Linkedin, FileDown, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const titles = [
  'Software Engineer',
  'AI Engineer',
  'Full Stack Developer',
  'Machine Learning Enthusiast',
];

export function HeroSection() {
  const { toast } = useToast();
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('opacity-0 -translate-y-2');
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setFadeState('opacity-0 translate-y-2');
        setTimeout(() => {
          setFadeState('opacity-100 translate-y-0');
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    toast({
      title: 'Resume Download Started',
      description: 'Thank you for downloading my resume! Best of luck with your recruitment process.',
    });
  };

  return (
    <AnimatedSection>
      <section id="home" className="container flex flex-col justify-center items-center min-h-[90vh] py-20 sm:py-32 relative overflow-hidden">
        {/* Decorative background glow circles */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="h-3 w-3 animate-pulse" /> Open to Internships & Job Opportunities
          </div>

          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Elango Kandhasamy
          </h1>

          <div className="h-12 flex justify-center items-center">
            <p className={`text-xl sm:text-2xl md:text-3xl font-semibold text-primary transition-all duration-300 transform ${fadeState}`}>
              {titles[titleIndex]}
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            AI & Data Science Student. Building AI-powered, computer vision, and Full Stack applications with scale and performance in mind.
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/20 transition-all gap-2" onClick={handleResumeDownload}>
              <a href="/Elango_Kandhasamy_Resume.pdf" download="Elango_Kandhasamy_Resume.pdf">
                <FileDown className="h-5 w-5" /> Resume
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="glass-card gap-2">
              <Link href="https://github.com/elan026" target="_blank">
                <Github className="h-5 w-5" /> GitHub
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="glass-card gap-2">
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </Link>
            </Button>

            <Button asChild variant="secondary" size="lg" className="glass-card gap-2">
              <Link href="#contact">
                <Mail className="h-5 w-5" /> Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Tech Badges underneath */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl w-full text-center relative z-10 px-4">
          <div className="p-4 rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm flex items-center justify-center gap-3">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Python & Java</span>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm flex items-center justify-center gap-3">
            <Code className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">React & Node</span>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">GenAI & ML</span>
          </div>
          <div className="p-4 rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm flex items-center justify-center gap-3">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">FastAPI & Flask</span>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
