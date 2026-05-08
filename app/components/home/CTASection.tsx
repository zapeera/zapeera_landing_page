import { Button } from "@/app/components/ui/button";
import { Link } from "@/i18n/navigation";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="section-heading md:mb-6 mb-4">
            Be one of our first 50 pharmacies.
          </h2>
          <p className="section-paragraph max-w-2xl mx-auto">
            Free for 30 days. No credit card. We set it up for you and pre-load your medicines. Message us on WhatsApp — we reply within an hour during business hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
              asChild
            >
              <Link href="/contact-us">Message us on WhatsApp</Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
