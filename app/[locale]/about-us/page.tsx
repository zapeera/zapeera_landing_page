import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import About from "@/app/pages/About";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/about-us", metaKey: "about", locale: params.locale });
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}
