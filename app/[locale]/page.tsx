import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";
import HeroSection from "@/app/components/home/HeroSection";
import Loading from "@/app/components/ui/loading";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: 'Zapeera — Pharmacy software, built for Pakistan',
  description: 'Zapeera is cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab, and see which medicines actually make profit. Free for 30 days, no credit card.',
  keywords: [
    'pharmacy software Pakistan',
    'pharmacy POS',
    'medicine inventory software',
    'expiry tracking pharmacy',
    'pharmacy management Pakistan',
    'cloud POS Pakistan',
    'PKR pharmacy software',
    'Lahore pharmacy software',
    'Karachi pharmacy software',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Zapeera — Pharmacy software, built for Pakistan',
    description: 'Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry. Free for 30 days, no credit card.',
    url: 'https://zapeera.com',
    siteName: 'Zapeera',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Zapeera — Pharmacy software, built for Pakistan',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapeera — Pharmacy software, built for Pakistan',
    description: 'Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry. Free for 30 days, no credit card.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Lazy-loaded home sections.
// Composition is intentionally pharmacy-focused — no industry-tab carousel,
// no fake-testimonial wall, no decorative client-logo strip.
const AboutSection = dynamic(() => import("@/app/components/home/AboutSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const FeaturesOverview = dynamic(() => import("@/app/components/home/FeaturesOverview"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const BuiltForPakistan = dynamic(() => import("@/app/components/home/BuiltForPakistan"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const HowItWorks = dynamic(() => import("@/app/components/home/HowItWorks"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const PricingSection = dynamic(() => import("@/app/components/home/PricingSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const FAQSection = dynamic(() => import("@/app/components/home/FAQSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />,
});

const CTASection = dynamic(() => import("@/app/components/home/CTASection"), {
  loading: () => <div className="h-64 bg-muted/30 animate-pulse rounded-lg" />,
});

export default function Home() {
  return (
    <>
      <StructuredData type="Organization" data={{}} />
      <StructuredData type="WebSite" data={{}} />
      <StructuredData type="SoftwareApplication" data={{}} />
      <Loading>
        <div className="min-h-screen bg-background">
          <Navigation />
          <FloatingCTA />
          <main>
            <HeroSection />
            <AboutSection />
            <FeaturesOverview />
            <BuiltForPakistan />
            <HowItWorks />
            <PricingSection />
            <FAQSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </Loading>
    </>
  );
}
