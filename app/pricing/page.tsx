import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Pricing from "@/app/pages/Pricing";

export const metadata: Metadata = {
  title: 'Pricing | Zapeera',
  description: 'In PKR. Built for the way Pakistani pharmacies actually buy software. Free for 30 days, no credit card.',
  keywords: [
    'pharmacy software pricing Pakistan',
    'zapeera pricing PKR',
    'pharmacy POS cost',
    'free trial pharmacy software',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Pricing | Zapeera',
    description: 'In PKR. Built for the way Pakistani pharmacies actually buy software. Free for 30 days, no credit card.',
    url: 'https://zapeera.com/pricing',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Pricing | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Zapeera',
    description: 'In PKR. Built for Pakistani pharmacies. Free for 30 days, no credit card.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/pricing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Pricing />
      <Footer />
    </div>
  );
}
