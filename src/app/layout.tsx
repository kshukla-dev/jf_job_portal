import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif, Caveat } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CronRunner } from '@/components/common/CronRunner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jackson & Frank | Global Jobs & Career Opportunities',
  description: 'Explore global job opportunities, connect with leading companies and build your career without borders with Jackson & Frank.',
  keywords: ['Global jobs', 'International recruitment', 'Tech careers Europe', 'Jackson & Frank', 'Netherlands jobs', 'Relocation jobs'],
  openGraph: {
    title: 'Jackson & Frank | Global Jobs & Career Opportunities',
    description: 'Explore global job opportunities, connect with leading companies and build your career without borders with Jackson & Frank.',
    url: 'https://jacksonfrank.com',
    siteName: 'Jackson & Frank',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable} ${caveat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
