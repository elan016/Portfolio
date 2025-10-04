'use client';

import { Code2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="loader">
        <Code2 className="h-16 w-16 text-primary" />
      </div>
    </div>
  );
}
