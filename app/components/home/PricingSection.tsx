"use client";

'use client';

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import { Switch } from "@/app/components/ui/switch";
import Container from "../ui/container";

interface PricingSectionProps {
  showHeading?: boolean;
}

const PricingSection = ({ showHeading = true }: PricingSectionProps) => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1); // Professional plan (index 1) is default active

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      tier: "Basic",
      features: [
        "1 Business",
        "1 Branch",
        "1 Manager Account",
        "1 Cashier Account",
        "Basic Reports & Analytics",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with multiple locations",
      monthlyPrice: 20000,
      yearlyPrice: 200000,
      tier: "Standard",
      features: [
        "1 Business",
        "5 Branches",
        "5 Manager Accounts",
        "5 Cashier Accounts",
        "Advanced Reports & Analytics",
        "Multi-branch Reports",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: true,
    },
    {
      name: "Business",
      description: "For businesses with multiple operations",
      monthlyPrice: 100000,
      yearlyPrice: 1000000,
      tier: "Business",
      features: [
        "3 Businesses",
        "5 Branches per Business",
        "5 Manager Accounts per Branch",
        "5 Cashier Accounts per Branch",
        "Advanced Reports & Analytics",
        "Multi-branch Reports",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pt-[40px] md:pt-[80px] md:pb-[110px] pb-[40px] gradient-to-br from-[#26D2C6]/15 to-[white]/15" style={{ backgroundColor: 'rgb(239 246 255)' }}>
     <Container size="full" padding="none">
     <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header Section */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto ">
            <h2 className="section-heading">
              Simple,Transparent Pricing
            </h2>
            <p className="section-paragraph">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
        )}

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-6 lg:mb-16">
          <span className={`text-sm ${!isYearly ? "font-semibold text-black" : "text-gray-500"}`}>
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={`text-sm ${isYearly ? "font-semibold text-black" : "text-gray-500"}`}>
            Yearly
            <span className="ml-2 text-xs text-[#0C2C8A]">(Save 17%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              onClick={() => {
                setSelectedPlan(index);
              }}
              className={`relative p-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer ${
                selectedPlan === index
                  ? "!border-2 !border-[#0C2C8A] lg:scale-105 scale-[1.02] bg-white shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {/* Active Badge - Shows "Most Popular" for Professional, "Selected" for others */}
              {selectedPlan === index && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[#0C2C8A] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    {index === 1 ? "Most Popular" : "Selected"}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="card-heading">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

                {plan.monthlyPrice ? (
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      Rs {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </div>
                )}
              </div>

              {/* Button */}
              <Button
                className={`w-full mb-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedPlan === index
                    ? "text-white bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 shadow-lg hover:shadow-xl"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] hover:border-transparent shadow-sm hover:shadow-lg"
                }`}
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <Link href="/contact-us">
                  {plan.monthlyPrice ? "Start Free Trial" : "Contact Sales"}
                </Link>
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0C2C8A]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#0C2C8A]" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
     </Container>
    </section>
  );
};

export default PricingSection;