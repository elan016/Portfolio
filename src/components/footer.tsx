import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year} Elansuriyan. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Elan026" target="_blank" aria-label="Github">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/elansuriyan-s/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:elansuriyan26@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="/Elan_suriyan_Resume.pdf" target="_blank" aria-label="Resume">
              <FileText className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
