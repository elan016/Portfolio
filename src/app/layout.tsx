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
  title: 'Elango Kandhasamy | AI/ML and Full-Stack Developer',
  description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, and end-to-end product development.',
  openGraph: {
    title: 'Elango Kandhasamy | AI/ML and Full-Stack Developer',
    description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, and end-to-end product development.',
    url: 'https://elan026.dev',
    siteName: 'Elango Kandhasamy Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elango Kandhasamy | AI/ML and Full-Stack Developer',
    description: 'AI/ML and Full-Stack Developer specializing in Computer Vision, NLP, and end-to-end product development.',
    images: ['https://picsum.photos/seed/twitter-image/1200/600'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable, poppins.variable)}>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <BackgroundAnimation />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
