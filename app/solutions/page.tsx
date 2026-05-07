import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Solutions from "@/app/pages/Solutions";

export const metadata: Metadata = {
  title: 'Solutions | Zapeera',
  description: 'Zapeera is built for Pakistani pharmacies first. Other retail industries are not currently supported — message us if you would like to be in the first non-pharmacy cohort.',
  keywords: [
    'pharmacy software Pakistan',
    'pharmacy POS Pakistan',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Solutions | Zapeera',
    description: 'Zapeera is built for Pakistani pharmacies first. Other industries: not yet.',
    url: 'https://zapeera.com/solutions',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Solutions | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Zapeera',
    description: 'Zapeera is built for Pakistani pharmacies first.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Solutions />
      <Footer />
    </div>
  );
}
