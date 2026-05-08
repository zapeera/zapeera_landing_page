import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Updates from "@/app/pages/Updates";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/product-update", metaKey: "updates", locale: params.locale });
}

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Updates />
      <Footer />
    </div>
  );
}
