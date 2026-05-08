'use client'

import { useTranslations } from "next-intl";
import { Pill, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Link } from "@/i18n/navigation";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

// Industry slugs paired by translation key — keeps i18n + routing decoupled.
const notYetSlugs: Array<{ slug: string; key: "retail" | "restaurant" | "wholesale" | "departmentalStore" | "distribution" }> = [
  { slug: "retail", key: "retail" },
  { slug: "restaurant", key: "restaurant" },
  { slug: "wholesale", key: "wholesale" },
  { slug: "departmental-store", key: "departmentalStore" },
  { slug: "distribution", key: "distribution" },
];

const Solutions = () => {
  const t = useTranslations("solutionsIndex");
  const tItems = useTranslations("solutionsIndex.otherIndustries.items");
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

        {/* Pharmacy — primary card */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/solutions/pharmacy"
                className="block bg-white rounded-2xl border border-neutral-200 hover:border-primary-600/50 hover:shadow-lg transition-all duration-300 p-8 md:p-12 group"
              >
                <Badge variant="secondary" className="mb-4">
                  {t("pharmacyCard.badge")}
                </Badge>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-h2 text-neutral-900 font-semibold mb-3 group-hover:text-primary-700 transition-colors">
                      {t("pharmacyCard.title")}
                    </h2>
                    <p className="text-body-lg text-neutral-600 leading-relaxed mb-6">
                      {t("pharmacyCard.body")}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold">
                      {t("pharmacyCard.cta")}
                      <ArrowRight className="w-4 h-4 rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </Container>
        </section>

        {/* Other industries — coming soon */}
        <section className="py-20 md:py-32 bg-primary-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading">{t("otherIndustries.heading")}</h2>
              <p className="section-paragraph">{t("otherIndustries.lead")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {notYetSlugs.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="group bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-600/40 hover:shadow-md transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-neutral-500" />
                  </div>
                  <div>
                    <div className="text-body font-semibold text-neutral-900 mb-0.5 group-hover:text-primary-700 transition-colors">
                      {tItems(item.key)}
                    </div>
                    <div className="text-body-sm text-neutral-500">
                      {t("otherIndustries.comingSoon")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7" asChild>
                <a
                  href={getWhatsAppLink(whatsappMessages.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tBtn("notifyOnWhatsapp")}
                </a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Solutions;
