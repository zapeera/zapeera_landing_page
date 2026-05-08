'use client'

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, Boxes, BarChart3, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

// Icons paired by index with the pillars in the message bundle.
const pillarIcons = [Calendar, Boxes, BarChart3];

const Features = () => {
  const t = useTranslations("features");
  const tBtn = useTranslations("common.buttons");
  const pillars = t.raw("pillars") as Array<{ title: string; intro: string; points: string[] }>;
  const supporting = t.raw("supporting") as Array<{ title: string; body: string }>;

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

        {/* Three pillars */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pillars.map((feature, idx) => {
                const Icon = pillarIcons[idx] ?? pillarIcons[0];
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 hover:border-primary-600/40 hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h2 className="text-h3 text-neutral-900 font-semibold mb-4">{feature.title}</h2>
                    <p className="text-body text-neutral-600 mb-6 leading-relaxed">{feature.intro}</p>
                    <ul className="space-y-3 mt-auto">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary-600" />
                          </div>
                          <span className="text-body-sm text-neutral-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Supporting capabilities */}
        <section className="py-20 md:py-28 bg-primary-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading">{t("supportingHeading")}</h2>
              <p className="section-paragraph">{t("supportingLead")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {supporting.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:border-primary-600/40 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="card-heading">{item.title}</h3>
                  <p className="text-body text-neutral-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-heading">{t("ctaHeading")}</h2>
              <p className="section-paragraph">{t("ctaBody")}</p>
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
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Features;
