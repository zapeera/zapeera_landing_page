'use client'

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Container from "@/app/components/ui/container";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string>("item-0");
  const faqs = [
    {
      question: "Will it work for my single shop, or do I need multiple branches?",
      answer:
        "Both. Zapeera works the same whether you run one counter or three branches. Multi-branch only kicks in when you turn it on.",
    },
    {
      question: "What if my internet goes down?",
      answer:
        "The till keeps working. Sales are saved locally and sync to the cloud the moment your connection is back. You will not lose a sale because PTCL went down.",
    },
    {
      question: "Do you have Pakistani medicines pre-loaded?",
      answer:
        "Yes. We start you with a database of medicines registered in Pakistan, plus common generics and brand alternatives. You can add or correct any entry on your account.",
    },
    {
      question: "Can my staff use it without training?",
      answer:
        "The till screen is built so a new cashier can ring a sale within 10 minutes. We also do a free setup call when you start, in Urdu or English, and walk your team through it.",
    },
    {
      question: "What happens after the free month?",
      answer:
        "You pick a plan. We do not auto-charge a card and we do not need one upfront for the trial. If 30 days is not enough, message us — we are reasonable about it.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Your data is encrypted in transit and at rest, backed up daily, and tied to your account only. We do not sell or share pharmacy data with anyone, ever.",
    },
    {
      question: "What if I want to stop using Zapeera?",
      answer:
        "Cancel from your account or message us. We export your inventory, sales history, and customer list as CSV so nothing is locked in.",
    },
    {
      question: "Do you charge in PKR or USD?",
      answer: "PKR. All plans are priced in rupees — no exchange-rate surprises at the end of the month.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-primary-50">
      <Container className="relative z-10" size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-10">
            <h2 className="section-heading">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
                >
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-3 h-3 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="card-heading">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-7 border-l-2 border-primary-600/20">
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
