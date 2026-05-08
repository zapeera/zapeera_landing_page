import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Contact from "@/app/pages/Contact";

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Zapeera',
  description: 'Contact Zapeera for business management solutions. Get support, schedule a demo, or start your free trial. Our team is here to help your business grow.',
  keywords: [
    'contact zapeera',
    'business management support',
    'schedule demo',
    'zapeera support',
    'business software contact',
    'POS system support',
    'inventory management help',
    'customer support',
    'business software inquiry',
    'software demo request'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Contact Us - Get in Touch with Zapeera',
    description: 'Contact Zapeera for business management solutions. Get support, schedule a demo, or start your free trial. Our team is here to help your business grow.',
    url: 'https://zapeera.com/contact-us',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Get in Touch with Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch with Zapeera',
    description: 'Contact Zapeera for business management solutions. Get support, schedule a demo, or start your free trial.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
