'use client'

import { memo, useState } from "react";
import { useTranslations } from "next-intl";
import FloatingCTA from "@/app/components/FloatingCTA";
import { Button } from "@/app/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Loading from "../components/ui/loading";
import PricingSection from "../components/home/PricingSection";
import { Link } from "@/i18n/navigation";
import Container from "../components/ui/container";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

const Pricing = memo(() => {
  const [openItem, setOpenItem] = useState<string>("item-0");
  const t = useTranslations("pricing.page");
  const tBtn = useTranslations("common.buttons");
  const faqs = t.raw("faqs") as Array<{ question: string; answer: string }>;

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
            <Container>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-h1 text-neutral-900 font-bold mb-6">{t("heroH1")}</h1>
                <p className="text-body-lg text-neutral-600 mb-4">{t("heroLead")}</p>
                <p className="text-body text-neutral-500">{t("heroNote")}</p>
              </div>
            </Container>
          </section>

          {/* Pricing cards */}
          <PricingSection showHeading={false} />

          {/* Pricing FAQ */}
          <section className="py-20 md:py-32 bg-white">
            <Container>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="section-heading">{t("faqHeading")}</h2>
                <p className="section-paragraph">{t("faqLead")}</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                  className="space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group border border-neutral-200 rounded-xl shadow-sm bg-white"
                    >
                      <AccordionTrigger className="p-6 text-start hover:no-underline">
                        <div className="flex items-start gap-4 w-full">
                          <div className="w-3 h-3 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="card-heading">{faq.question}</h3>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-6">
                        <div className="ps-7 border-s-2 border-primary-600/20">
                          <p className="text-body text-neutral-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Container>
          </section>

          {/* Closing CTA */}
          <section className="py-20 md:py-32 bg-primary-50">
            <Container>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="section-heading">{t("closingHeading")}</h2>
                <p className="section-paragraph">{t("closingBody")}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    size="lg"
                    className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(whatsappMessages.contact)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tBtn("messageOnWhatsapp")}
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                    <Link href="/#faq">{tBtn("seeFAQ")}</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </Loading>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
