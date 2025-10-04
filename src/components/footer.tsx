import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2025 elan026.dev
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:elangokandhasamy76@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
            elangokandhasamy76@gmail.com
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            +91 9123578496
          </div>
        </div>
      </div>
    </footer>
  );
}
