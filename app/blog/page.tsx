import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Blog from "@/app/pages/Blog";

export const metadata: Metadata = {
  title: 'Blog | Zapeera',
  description: 'Practical pieces for Pakistani pharmacy owners — coming soon. Notify me on WhatsApp when the first article ships.',
  keywords: [
    'pharmacy blog Pakistan',
    'pharmacy management articles',
    'expiry tracking pharmacy',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Blog | Zapeera',
    description: 'Practical pieces for Pakistani pharmacy owners — coming soon.',
    url: 'https://zapeera.com/blog',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog | Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Zapeera',
    description: 'Practical pieces for Pakistani pharmacy owners — coming soon.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Blog />
      <Footer />
    </div>
  );
}
