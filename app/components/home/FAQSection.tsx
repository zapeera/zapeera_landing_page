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
      question: "What can Zapeera do for my business?",
      answer: "Zapeera is an all-in-one cloud-based business management software that combines POS, inventory, staff management, and reporting, allowing you to manage sales and stock from anywhere.",
    },
    {
      question: "Can I manage multiple branches with Zapeera?",
      answer: "Yes. You can manage all branches from a single dashboard, sync inventory, transfer stock, and view consolidated sales reports in real time.",
    },
    {
      question: "Is Zapeera cloud-based and can I use it offline?",
      answer: "Yes. Zapeera is a cloud-based POS system and also works offline. Sales sync automatically once your internet connection is restored.",
    },
    {
      question: "What are the pricing options, and is there a free trial?",
      answer: "Plans start at PKR 5,000/month and include a 14-day free trial with full access. No credit card is required, and you can upgrade anytime.",
    },
    {
      question: "How secure is my data on Zapeera?",
      answer: "Your data is protected with encryption, automatic backups, and role-based access controls, following global security best practices.",
    },
  ];

  return (
    <section className="relative lg:pt-[80px] pt-[40px] md:pb-[90px] pb-[45px]  overflow-hidden gradient-to-br from-[#26D2C6]/15 to-[white]/15" style={{ backgroundColor: 'rgb(239 246 255)' }}>
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
                      <div className="w-3 h-3 rounded-full bg-[#1947C4] mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="card-heading">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6" style={{ backgroundColor: 'rgb(239 246 255)' }}>
                    <div className="pl-7 border-l-2 border-[#1947C4]/20">
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
