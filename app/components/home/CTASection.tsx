"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/app/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

const CTASection = () => {
  const t = useTranslations("home.cta");
  const tBtn = useTranslations("common.buttons");

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="section-heading md:mb-6 mb-4">{t("heading")}</h2>
          <p className="section-paragraph max-w-2xl mx-auto">{t("body")}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
              asChild
            >
              <a
                href={getWhatsAppLink(whatsappMessages.heroTrial)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tBtn("messageOnWhatsapp")}
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
              <Link href="/pricing">{tBtn("seePricing")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
