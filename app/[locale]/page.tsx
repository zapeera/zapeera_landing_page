import dynamic from 'next/dynamic';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";
import HeroSection from "@/app/components/home/HeroSection";
import Loading from "@/app/components/ui/loading";
import StructuredData from "@/app/components/StructuredData";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/", metaKey: "home", locale: params.locale });
}

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
