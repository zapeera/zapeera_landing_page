"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import Container from "../ui/container";
import { cn } from "@/app/lib/utils";
import { waUrl, pricingCtaMessages } from "@/app/lib/whatsapp";

interface PricingSectionProps {
  showHeading?: boolean;
}

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  ctaMessage: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Solo",
    tagline: "For single-shop pharmacies",
    monthly: 1500,
    yearly: 15000,
    ctaMessage: pricingCtaMessages.solo,
    features: [
      "1 user account",
      "1 pharmacy / 1 branch",
      "Full POS with barcode scanning",
      "Inventory management",
      "Expiry alerts (30 / 60 / 90 days)",
      "Daily sales reports",
      "Pakistani medicines pre-loaded",
      "WhatsApp support",
      "30-day free trial — no credit card",
    ],
  },
  {
    name: "Team",
    tagline: "For pharmacies with a small team",
    monthly: 3500,
    yearly: 35000,
    ctaMessage: pricingCtaMessages.team,
    popular: true,
    features: [
      "Everything in Solo",
      "3 user accounts",
      "Role-based access (owner / cashier / manager)",
      "Advanced reports — profit by medicine, dead stock, top customers",
      "Customer credit tracking",
      "WhatsApp support",
    ],
  },
  {
    name: "Business",
    tagline: "For multi-branch pharmacies",
    monthly: 7500,
    yearly: 75000,
    ctaMessage: pricingCtaMessages.business,
    features: [
      "Everything in Team",
      "10 user accounts",
      "Up to 3 branches with consolidated reporting",
      "Multi-branch inventory transfer",
      "Priority WhatsApp support",
      "Onboarding assistance",
    ],
  },
];

const enterprise = {
  name: "Enterprise / Chain",
  tagline: "For pharmacy chains and groups",
  ctaMessage: pricingCtaMessages.enterprise,
  features: [
    "Custom pricing",
    "Unlimited users and branches",
    "Dedicated account manager",
    "Custom integrations",
  ],
};

const formatPkr = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-primary-50">
      <Container size="full" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {showHeading && (
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading">Simple, transparent pricing</h2>
              <p className="section-paragraph">
                In PKR. Built for the way Pakistani pharmacies actually buy software. 30-day free trial — no credit card.
              </p>
            </div>
          )}

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
            <span className={cn("text-body-sm", !isYearly ? "font-semibold text-neutral-900" : "text-neutral-500")}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} aria-label="Toggle annual billing" />
            <span className={cn("text-body-sm flex items-center gap-2", isYearly ? "font-semibold text-neutral-900" : "text-neutral-500")}>
              Annual
              <span className="text-xs font-medium text-primary-700 bg-primary-100 rounded-full px-2 py-0.5">
                Save 17%
              </span>
            </span>
          </div>

          {/* Three pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {plans.map((plan) => {
              const price = isYearly ? plan.yearly : plan.monthly;
              const suffix = isYearly ? "/year" : "/month";
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "relative bg-white rounded-2xl p-8 transition-all duration-300 flex flex-col",
                    plan.popular
                      ? "border-2 border-primary-700 shadow-lg lg:scale-[1.02]"
                      : "border border-neutral-200 shadow-sm hover:shadow-md",
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary-700 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-h3 text-neutral-900 font-semibold mb-1">{plan.name}</h3>
                  <p className="text-body-sm text-neutral-500 mb-6">{plan.tagline}</p>

                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                      {formatPkr(price)}
                    </span>
                    <span className="text-body text-neutral-500 ml-1">{suffix}</span>
                  </div>

                  <Button
                    size="md"
                    className={cn(
                      "w-full rounded-full mb-8 font-semibold",
                      "bg-primary-800 hover:bg-primary-900 text-white",
                    )}
                    asChild
                  >
                    <a href={waUrl(plan.ctaMessage)} target="_blank" rel="noopener noreferrer">
                      Start free trial
                    </a>
                  </Button>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary-700" />
                        </div>
                        <span className="text-body-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Enterprise card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-h3 text-neutral-900 font-semibold mb-1">{enterprise.name}</h3>
                <p className="text-body-sm text-neutral-500 mb-4">{enterprise.tagline}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-2xl">
                  {enterprise.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary-700 mt-1 flex-shrink-0" />
                      <span className="text-body-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right md:flex-shrink-0">
                <div className="text-h3 text-neutral-900 font-semibold mb-3">Custom pricing</div>
                <Button
                  size="md"
                  className="rounded-full px-7 bg-primary-800 hover:bg-primary-900 text-white font-semibold"
                  asChild
                >
                  <a href={waUrl(enterprise.ctaMessage)} target="_blank" rel="noopener noreferrer">
                    Contact us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <p className="text-body-sm text-neutral-500 text-center mt-8 max-w-2xl mx-auto">
            Prices in Pakistani Rupees (PKR). Excludes applicable taxes.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
