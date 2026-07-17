import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { BackgroundAnimation } from '@/components/background-animation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Elango Kandhasamy | AI/ML & Full-Stack Developer',
  description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, Deep Learning, and end-to-end product development.',
  keywords: ['Elango Kandhasamy', 'AI Engineer', 'Machine Learning Engineer', 'Full Stack Developer', 'Software Engineer Portfolio', 'Vite', 'React', 'Next.js'],
  authors: [{ name: 'Elango Kandhasamy' }],
  openGraph: {
    title: 'Elango Kandhasamy | AI/ML & Full-Stack Developer',
    description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, Deep Learning, and end-to-end product development.',
    url: 'https://elango-kandhasamy.vercel.app/',
    siteName: 'Elango Kandhasamy Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Elango Kandhasamy Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elango Kandhasamy | AI/ML & Full-Stack Developer',
    description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, Deep Learning, and end-to-end product development.',
    images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Elango Kandhasamy',
    'url': 'https://elango-kandhasamy.vercel.app/',
    'jobTitle': 'AI/ML and Full-Stack Developer',
    'alumniOf': {
      '@type': 'EducationalOrganization',
      'name': 'Nandha Engineering College',
    },
    'sameAs': [
      'https://github.com/elan026',
      'https://leetcode.com/u/elan026/',
      'https://linkedin.com',
    ],
    'knowsAbout': [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Full Stack Web Development',
      'React',
      'Flask',
      'Node.js',
    ],
  };

  return (
    <html lang="en" className={cn('dark', inter.variable, poppins.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <BackgroundAnimation />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
