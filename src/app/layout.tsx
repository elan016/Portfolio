import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

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
  title: 'Elansuriyan | Full-Stack Developer',
  description: 'A passionate Full-Stack Web Developer with a knack for creating dynamic and responsive web applications.',
  openGraph: {
    title: 'Elansuriyan | Full-Stack Developer',
    description: 'A passionate Full-Stack Web Developer with a knack for creating dynamic and responsive web applications.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Elansuriyan Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elansuriyan | Full-Stack Developer',
    description: 'A passionate Full-Stack Web Developer with a knack for creating dynamic and responsive web applications.',
    images: ['https://picsum.photos/seed/twitter-image/1200/600'], // Replace with your actual Twitter image
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 px-4 md:px-6">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
