'use client'

import { memo, useState } from "react";
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
import Link from "next/link";
import Container from "../components/ui/container";
import { waUrl } from "@/app/lib/whatsapp";

const pricingFaqs = [
  {
    question: "What happens after the 30-day free trial?",
    answer:
      "Pick the plan that fits and we move you onto it. No auto-charge — we never need a card during the trial. If 30 days isn't enough, message us; we are reasonable about it.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. Upgrade any time and the change is immediate. Downgrades take effect at the next billing cycle so nothing breaks mid-month.",
  },
  {
    question: "Do you offer discounts for annual payment?",
    answer:
      "Yes. Annual billing saves 17% — Solo at Rs 15,000/year (vs Rs 18,000 monthly), Team at Rs 35,000/year, Business at Rs 75,000/year.",
  },
  {
    question: "What if I have more than 3 branches?",
    answer:
      "The Business plan covers up to 3 branches. Beyond that, the Enterprise plan covers unlimited branches with custom pricing — message us with how many shops you run and we'll quote.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. We do not charge a setup fee. The free trial includes a setup call where we load your stock, suppliers, and batches and walk your team through the till — at no cost.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account or message us. We export your inventory, sales history, and customer list as CSV so nothing is locked in.",
  },
];

const Pricing = memo(() => {
  const [openItem, setOpenItem] = useState<string>("item-0");

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
            <Container>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-h1 text-neutral-900 font-bold mb-6">
                  Simple, transparent pricing
                </h1>
                <p className="text-body-lg text-neutral-600 mb-4">
                  In PKR. Built for the way Pakistani pharmacies actually buy software.
                </p>
                <p className="text-body text-neutral-500">
                  30-day free trial. No credit card required. We set it up for you and pre-load your medicines.
                </p>
              </div>
            </Container>
          </section>

          {/* Pricing cards (Solo / Team / Business + Enterprise) */}
          <PricingSection showHeading={false} />

          {/* Pricing FAQ */}
          <section className="py-20 md:py-32 bg-white">
            <Container>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="section-heading">Pricing questions</h2>
                <p className="section-paragraph">
                  The things pharmacy owners ask before signing up. If yours is not here, message us — we will answer.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                  className="space-y-4"
                >
                  {pricingFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group border border-neutral-200 rounded-xl shadow-sm bg-white"
                    >
                      <AccordionTrigger className="p-6 text-left hover:no-underline">
                        <div className="flex items-start gap-4 w-full">
                          <div className="w-3 h-3 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="card-heading">{faq.question}</h3>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-6">
                        <div className="pl-7 border-l-2 border-primary-600/20">
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
                <h2 className="section-heading">Still deciding?</h2>
                <p className="section-paragraph">
                  Message us on WhatsApp with how many counters and branches you run. We will tell you which plan fits — honestly, even if it is the smallest one.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    size="lg"
                    className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                    asChild
                  >
                    <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                      Message us on WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                    <Link href="/#faq">Read the FAQ</Link>
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
