import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Solutions from "@/app/pages/Solutions";
import { buildPageMetadata } from "@/app/lib/page-metadata";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return buildPageMetadata({ path: "/solutions", metaKey: "solutions", locale: params.locale });
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Solutions />
      <Footer />
    </div>
  );
}
