import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-24 items-center justify-center py-10">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; 2025 elan026.dev
        </p>
      </div>
    </footer>
  );
}
