import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Careers from "@/app/pages/Careers";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/careers", metaKey: "careers", locale: params.locale });
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
}
