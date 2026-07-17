'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Scroll Progress Indicator
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    // 2. Active Section Highlighting
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-30% 0px -60% 0px', // Triggers when section is comfortably in view
      threshold: 0,
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-primary transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold">elan026</span>
        </Link>
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors text-muted-foreground hover:text-foreground",
                  isActive ? "text-primary font-semibold" : ""
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end" style={{ minWidth: '130px' }}>
          <Button asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
        <div className="flex items-center justify-end md:hidden ml-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur border-l border-border/40">
              <SheetTitle className="text-left font-headline text-lg font-bold border-b border-border/20 pb-4">
                Navigation
              </SheetTitle>
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-muted-foreground transition-colors hover:text-primary",
                        isActive ? "text-primary font-semibold pl-2 border-l-2 border-primary" : ""
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
