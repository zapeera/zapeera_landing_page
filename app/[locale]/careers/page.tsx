import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Careers from "@/app/pages/Careers";

export const metadata: Metadata = {
  title: 'Careers | Zapeera',
  description: 'A small Pakistani team building cloud POS for pharmacies. We are not actively hiring yet — message us on WhatsApp if you want to help.',
  keywords: [
    'zapeera careers',
    'pharmacy software Pakistan jobs',
    'Lahore startup jobs',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Careers | Zapeera',
    description: 'A small Pakistani team building cloud POS for pharmacies. We are not actively hiring yet — message us on WhatsApp if you want to help.',
    url: 'https://zapeera.com/careers',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Zapeera',
    description: 'A small Pakistani team building cloud POS for pharmacies. We are not actively hiring yet — message us on WhatsApp if you want to help.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/careers',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
}
