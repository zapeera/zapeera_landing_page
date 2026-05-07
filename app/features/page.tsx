import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Features from "@/app/pages/Features";

export const metadata: Metadata = {
  title: 'Features | Zapeera',
  description: 'Three things Zapeera does well for Pakistani pharmacies — expiry tracking, inventory you can trust, and reports that tell you what to do next. Plus the supporting capabilities that make them work.',
  keywords: [
    'pharmacy features Pakistan',
    'expiry tracking',
    'medicine inventory',
    'pharmacy POS features',
    'batch tracking',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Features | Zapeera',
    description: 'Three things Zapeera does well for Pakistani pharmacies — expiry tracking, inventory you can trust, and reports that tell you what to do next.',
    url: 'https://zapeera.com/features',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Features | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | Zapeera',
    description: 'Three things Zapeera does well for Pakistani pharmacies.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/features',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Features />
      <Footer />
    </div>
  );
}
