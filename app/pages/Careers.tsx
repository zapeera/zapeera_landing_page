'use client'

import { useTranslations } from "next-intl";
import { Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Link } from "@/i18n/navigation";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

const Careers = () => {
  const t = useTranslations("careers");
  const tBtn = useTranslations("common.buttons");

  return (
    <Loading>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 text-neutral-900 font-bold mb-6">{t("heroH1")}</h1>
              <p className="text-body-lg text-neutral-600">{t("heroLead")}</p>
            </div>
          </Container>
        </section>

        {/* Honest empty state */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-8">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="section-heading">{t("bodyHeading")}</h2>
              <p className="section-paragraph">{t("bodyP1")}</p>
              <p className="text-body text-neutral-600 mb-10">{t("bodyP2")}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(whatsappMessages.careers)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tBtn("messageOnWhatsapp")}
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                  <Link href="/about-us">{tBtn("aboutTheTeam")}</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Careers;
