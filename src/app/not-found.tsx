'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4 relative z-10">
      <div className="space-y-6 max-w-md p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-primary/10 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <h1 className="font-headline text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-tight">Page Not Found</h2>
        <p className="text-muted-foreground text-sm">
          Oops! The page you are looking for doesn't exist or has been moved to another universe. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <MoveLeft className="h-4 w-4" /> Go Back
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
