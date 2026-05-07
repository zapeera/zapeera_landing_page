'use client'

import { memo, useMemo } from "react";
import FloatingCTA from "@/app/components/FloatingCTA";
import { Button } from "@/app/components/ui/button";
import { Check, X } from "lucide-react";
import Loading from "../components/ui/loading";
import PricingSection from "../components/home/PricingSection";
import Link from "next/link";
import Container from "../components/ui/container";

const Pricing = memo(() => {
  // Extra Features data for all plans
  const plansWithExtraFeatures = [
    {
      name: "Starter",
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Basic",
        "Customer Reports": "Basic",
        "Profit & Loss Reports": "Basic",
        "Sales Analytics": "Basic",
        "Real-time Dashboard": "✓",
        "Branch Performance": false,
        "Export Data": "Basic",
        "Staff Management": "Basic",
        "Role-based Access": "Basic",
        "Branch Management": false,
        "Company Management": false,
        "Shift Management": false,
        "Advanced Analytics": false,
        "Custom Reports": false,
        "Data Backup": "Basic",
        "Security Features": "Basic",
        "Audit Logs": "Basic",
        "Offline Mode": false,
        "Data Import/Export": false,
        "24/7 Support": false,
        "Dedicated Account Manager": false,
        "Custom Development": false,
        "White-label Solution": false,
        "Training & Onboarding": "Basic",
        "Documentation": "Basic",
      },
    },
    {
      name: "Professional",
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Advanced",
        "Customer Reports": "Advanced",
        "Profit & Loss Reports": "Advanced",
        "Sales Analytics": "Advanced",
        "Real-time Dashboard": "✓",
        "Branch Performance": "Advanced",
        "Export Data": "Advanced",
        "Staff Management": "Advanced",
        "Role-based Access": "Advanced",
        "Branch Management": "✓",
        "Company Management": "✓",
        "Shift Management": "✓",
        "Advanced Analytics": "✓",
        "Custom Reports": "✓",
        "Data Backup": "Advanced",
        "Security Features": "Advanced",
        "Audit Logs": "Advanced",
        "Offline Mode": "✓",
        "Data Import/Export": "Advanced",
        "24/7 Support": "✓",
        "Dedicated Account Manager": false,
        "Custom Development": false,
        "White-label Solution": false,
        "Training & Onboarding": "Advanced",
        "Documentation": "Advanced",
      },
    },
    {
      name: "Business",
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Advanced",
        "Customer Reports": "Advanced",
        "Profit & Loss Reports": "Advanced",
        "Sales Analytics": "Advanced",
        "Real-time Dashboard": "✓",
        "Branch Performance": "Advanced",
        "Export Data": "Advanced",
        "Staff Management": "Advanced",
        "Role-based Access": "Advanced",
        "Branch Management": "✓",
        "Company Management": "✓",
        "Shift Management": "✓",
        "Advanced Analytics": "✓",
        "Custom Reports": "✓",
        "Data Backup": "Advanced",
        "Security Features": "Advanced",
        "Audit Logs": "Advanced",
        "Offline Mode": "✓",
        "Data Import/Export": "Advanced",
        "24/7 Support": "✓",
        "Dedicated Account Manager": "✓",
        "Custom Development": "✓",
        "White-label Solution": "✓",
        "Training & Onboarding": "Advanced",
        "Documentation": "Advanced",
      },
    },
  ];

  const extraFeaturesList = useMemo(() => 
    Object.keys(plansWithExtraFeatures[0].extraFeatures), 
    []
  );

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simple, transparent{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  pricing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                In PKR. Built for the way Pakistani pharmacies actually buy software. Free for 30 days, no credit card.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32">
          <PricingSection showHeading={false} />
        </section>

        {/* Extra Features Table */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Extra Features</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-semibold">Features</th>
                      {plansWithExtraFeatures.map((plan, index) => (
                        <th key={index} className="p-3 text-center font-semibold text-sm">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {extraFeaturesList.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border hover:bg-muted/30">
                        <td className="p-3 font-medium text-sm">{feature}</td>
                        {plansWithExtraFeatures.map((plan, planIndex) => {
                          const featureValue = (plan.extraFeatures as any)[feature];
                          return (
                            <td key={planIndex} className="p-3 text-center">
                              {typeof featureValue === "boolean" ? (
                                featureValue ? (
                                  <Check className="w-4 h-4 text-primary mx-auto" />
                                ) : (
                                  <X className="w-4 h-4 text-muted-foreground mx-auto" />
                                )
                              ) : typeof featureValue === "string" && featureValue === "✓" ? (
                                <Check className="w-4 h-4 text-primary mx-auto" />
                              ) : typeof featureValue === "string" && featureValue === "✗" ? (
                                <X className="w-4 h-4 text-muted-foreground mx-auto" />
                              ) : (
                                <span className="text-xs font-medium">{featureValue}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still deciding?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Message us on WhatsApp with how many counters and branches you run. We will tell you which plan fits — honestly, even if it is the smallest one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7" asChild>
                <a href="https://wa.me/923107100663" target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                <Link href="/#faq">Read the FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
        </main>
      </div>
    </Loading>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
