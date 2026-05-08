import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Features from "@/app/pages/Features";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/features", metaKey: "features", locale: params.locale });
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Features />
      <Footer />
    </div>
  );
}
