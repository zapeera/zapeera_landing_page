import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";
import HeroSection from "@/app/components/home/HeroSection";
import Loading from "@/app/components/ui/loading";
import StructuredData from "@/app/components/StructuredData";

export const metadata: Metadata = {
  title: 'Zapeera - Unified Business Management Solutions',
  description: 'Transform your business with Zapeera\'s comprehensive management platform. POS, inventory, staff management, and analytics - all in one solution. Start your free trial today!',
  keywords: [
    'business management software',
    'POS system',
    'inventory management',
    'staff management',
    'retail management',
    'pharmacy management',
    'restaurant management',
    'business analytics',
    'cloud-based solution',
    'unified platform'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Zapeera - Unified Business Management Solutions',
    description: 'Transform your business with Zapeera\'s comprehensive management platform. POS, inventory, staff management, and analytics - all in one solution.',
    url: 'https://zapeera.com',
    siteName: 'Zapeera',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Zapeera - Unified Business Management Solutions',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapeera - Unified Business Management Solutions',
    description: 'Transform your business with Zapeera\'s comprehensive management platform.',
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

// Lazy load heavy components
const ClientLogos = dynamic(() => import("@/app/components/home/ClientLogos"), {
  loading: () => <div className="h-32 bg-muted/30 animate-pulse rounded-lg" />
});

const FeaturesOverview = dynamic(() => import("@/app/components/home/FeaturesOverview"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});


const HowItWorks = dynamic(() => import("@/app/components/home/HowItWorks"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const Testimonials = dynamic(() => import("@/app/components/home/Testimonials"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const WhyChooseUs = dynamic(() => import("@/app/components/home/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const PricingSection = dynamic(() => import("@/app/components/home/PricingSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const FAQSection = dynamic(() => import("@/app/components/home/FAQSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const CTASection = dynamic(() => import("@/app/components/home/CTASection"), {
  loading: () => <div className="h-64 bg-muted/30 animate-pulse rounded-lg" />
});

const SolutionsSection = dynamic(() => import("@/app/components/home/SolutionsSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
});

const AboutSection = dynamic(() => import("@/app/components/home/AboutSection"), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-lg" />
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
            <ClientLogos />
            <AboutSection />
            <WhyChooseUs />
            <SolutionsSection />
            <FeaturesOverview />
            <HowItWorks />
            <PricingSection />
            <Testimonials />
            <FAQSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </Loading>
    </>
  );
}
