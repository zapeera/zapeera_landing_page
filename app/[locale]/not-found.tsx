import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import NotFound from "@/app/pages/NotFound";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <NotFound />
      <Footer />
    </div>
  );
}
