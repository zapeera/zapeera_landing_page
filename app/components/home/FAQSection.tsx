'use client'

import { useState } from 'react';
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Container from "@/app/components/ui/container";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string>("item-0");
  const t = useTranslations("home.faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-primary-50">
      <Container className="relative z-10" size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-10">
            <h2 className="section-heading">{t("heading")}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
              {items.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
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
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
