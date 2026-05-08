import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Updates from "@/app/pages/Updates";

export const metadata: Metadata = {
  title: 'Updates | Zapeera',
  description: 'What we are building right now and what we shipped recently. We post in small honest steps.',
  keywords: [
    'zapeera updates',
    'pharmacy software changelog',
    'product roadmap',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Updates | Zapeera',
    description: 'What we are building right now and what we shipped recently.',
    url: 'https://zapeera.com/product-update',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Updates | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Updates | Zapeera',
    description: 'What we are building right now and what we shipped recently.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/product-update',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Updates />
      <Footer />
    </div>
  );
}
