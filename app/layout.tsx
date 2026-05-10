import type { Metadata } from 'next';
import { Inter, Noto_Sans_Tamil, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { StickyCtas } from '@/components/sticky-ctas';
import { brand } from '@/lib/site-data';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const tamil = Noto_Sans_Tamil({ subsets: ['tamil'], variable: '--font-tamil', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://thulirinterior.com'),
  title: 'Luxury Interior Designer Chennai | THULIR Interior Work',
  description: 'Premium interior design for Chennai homes and workspaces with transparent pricing, 3D design consultations and craft-led execution.',
  keywords: brand.keywords,
  openGraph: { title: 'THULIR Interior Work', description: 'Grow Beautiful Spaces.', type: 'website', locale: 'en_IN' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable} ${tamil.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <StickyCtas />
      </body>
    </html>
  );
}
