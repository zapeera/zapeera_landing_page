import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Pricing from "@/app/pages/Pricing";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/pricing", metaKey: "pricing", locale: params.locale });
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Pricing />
      <Footer />
    </div>
  );
}
