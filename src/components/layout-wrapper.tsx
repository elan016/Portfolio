'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { Loader } from '@/components/loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
