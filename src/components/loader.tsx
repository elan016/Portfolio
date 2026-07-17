'use client';

import { Code2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-60 h-60 bg-primary/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      
      <div className="flex flex-col items-center space-y-6 z-10">
        {/* Glowing Logo Container */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-card/60 border border-primary/20 shadow-2xl backdrop-blur-sm">
          {/* Animated Spinner Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/10 border-t-primary animate-spin" style={{ animationDuration: '1.5s' }} />
          <Code2 className="h-10 w-10 text-primary animate-pulse" />
        </div>
        
        {/* Modern font layout */}
        <div className="flex flex-col items-center space-y-1">
          <span className="font-headline font-bold text-lg tracking-wider text-foreground">
            elan026.dev
          </span>
          <span className="text-xs text-muted-foreground animate-pulse font-medium">
            Initializing workspace...
          </span>
        </div>
      </div>
    </div>
  );
}
