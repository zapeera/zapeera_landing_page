import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Contact from "@/app/pages/Contact";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/contact-us", metaKey: "contact", locale: params.locale });
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
