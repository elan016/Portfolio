'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { Loader } from '@/components/loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowUp } from 'lucide-react';

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Reduce loader time to 1.2s for faster perceived performance and better recruiter UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-xl border border-primary/20 bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 shadow-xl backdrop-blur-md hover:scale-110 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
