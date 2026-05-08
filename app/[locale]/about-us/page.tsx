import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import About from "@/app/pages/About";

export const metadata: Metadata = {
  title: 'About — Zapeera',
  description: 'A small Pakistani team building cloud POS and inventory software for Pakistani pharmacies. Honest about what we have shipped and what is still coming.',
  keywords: [
    'about zapeera',
    'pharmacy software Pakistan',
    'Pakistani team',
    'pharmacy startup',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'About — Zapeera',
    description: 'A small Pakistani team building cloud POS and inventory software for Pakistani pharmacies.',
    url: 'https://zapeera.com/about-us',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'About — Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Zapeera',
    description: 'A small Pakistani team building cloud POS and inventory software for Pakistani pharmacies.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/about-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}
