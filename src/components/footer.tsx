'use client';

import { Code2, Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const expertise = [
    "AI/ML",
    "Full-Stack Development",
    "Computer Vision",
    "Cloud Computing",
    "DevOps"
];

export function Footer() {

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-card/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Code2 className="h-7 w-7" />
                    <span className="font-bold text-xl">Elango Kandhasamy</span>
                </Link>
                 <p className="text-muted-foreground text-sm max-w-xs">
                    AI Engineer and Software Developer crafting intelligent, scalable, and adaptive digital experiences that bridge the gap between human and machine.
                </p>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {quickLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

             <div>
                <h3 className="font-semibold mb-4">Expertise</h3>
                <ul className="space-y-3">
                    {expertise.map(skill => (
                        <li key={skill} className="text-sm text-muted-foreground">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/elan026" target="_blank" aria-label="GitHub">
                            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors"/>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors"/>
                        </Link>
                    </div>
                    <Link href="mailto:elangokandhasamy76@gmail.com" className="flex items-center gap-3 group">
                        <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Email me</span>
                    </Link>
                     <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground"/>
                        <span className="text-sm text-muted-foreground">+91 9123578496</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between">
             <p className="text-center text-sm leading-loose text-muted-foreground">
                &copy; {new Date().getFullYear()} elan026.dev
            </p>
            <button 
                onClick={scrollToTop} 
                className="mt-4 sm:mt-0 p-2 rounded-md border border-primary/20 bg-card/50 hover:bg-card/80 transition-colors"
                aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </div>
      </div>
    </footer>
  );
}
