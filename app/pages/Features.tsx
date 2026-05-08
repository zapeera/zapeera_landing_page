'use client'

import { Link } from "@/i18n/navigation";
import { Calendar, Boxes, BarChart3, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const pillars = [
  {
    icon: Calendar,
    title: "Expiry tracking that actually works",
    intro:
      "The biggest leak in a Pakistani pharmacy is medicines you do not return to the supplier in time. Zapeera tracks every batch from the moment it comes in, alerts you with enough runway to act, and tells you exactly how much each expiry would have cost you if you had missed it.",
    points: [
      "Alerts at 90, 60, and 30 days before any batch expires",
      "Per-supplier return-window tracking — know who takes returns and who does not",
      "Mark batches that cannot be returned and write them off cleanly",
      "End-of-month expiry report by supplier, by category, by branch",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory you can trust",
    intro:
      "Most pharmacy stock counts are wrong because the till and the inventory book are two different worlds. Zapeera makes them the same world. Barcode scan when stock comes in, scan again at the till. The number on the screen matches the number on the shelf without anyone counting at midnight.",
    points: [
      "Real-time stock levels across one shop or three branches",
      "Barcode at intake and at the till — no manual counting",
      "Low-stock alerts tied to your real selling speed, not a fixed threshold",
      "Inter-branch transfers with batch and expiry kept intact",
    ],
  },
  {
    icon: BarChart3,
    title: "Reports that tell you what to do next",
    intro:
      "Most reports show you what happened. Zapeera shows you what to do about it. Profit by medicine, dead stock by category, repeat customers by branch — straight on the dashboard, not buried five clicks deep.",
    points: [
      "Profit-per-medicine ranked highest to lowest",
      "Dead-stock list — items that have not sold in 60 / 90 / 180 days",
      "Repeat-customer report — who came back, what they bought, how often",
      "End-of-day in 5 seconds, not an hour with a calculator",
    ],
  },
];

const supporting = [
  { title: "POS that works offline", body: "Sales keep ringing when the internet drops. Everything syncs once the line is back." },
  { title: "Multi-branch", body: "Manage up to three branches from one dashboard. Transfer stock, compare branches, consolidate reports." },
  { title: "Smart billing & invoicing", body: "Tax-correct invoices in PKR. SMS or printed receipt. Returns and refunds without paperwork." },
  { title: "Role-based access", body: "What the cashier sees is not what the owner sees. Audit logs of who did what." },
  { title: "Customer records", body: "Phone-number lookup at the till. Repeat-prescription history. Loyalty without a separate app." },
  { title: "Suppliers & manufacturers", body: "Purchase history, return windows, and supplier performance ranked by reliability." },
];

const Features = () => {
  return (
    <Loading>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 text-neutral-900 font-bold mb-6">
                Three things Zapeera does well — in detail
              </h1>
              <p className="text-body-lg text-neutral-600">
                Expiry tracking, inventory you can trust, and reports that tell you what to do next. Plus the supporting capabilities that make them work for a Pakistani pharmacy.
              </p>
            </div>
          </Container>
        </section>

        {/* Three pillars — text-driven cards, no images for now.
            Real product screenshots will come back here once the team
            captures clean retina shots with realistic Pakistani medicine
            data (Panadol, Augmentin, Brufen, etc.). */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pillars.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 hover:border-primary-600/40 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h2 className="text-h3 text-neutral-900 font-semibold mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-body text-neutral-600 mb-6 leading-relaxed">
                    {feature.intro}
                  </p>
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
              ))}
            </div>
          </Container>
        </section>

        {/* Supporting capabilities */}
        <section className="py-20 md:py-28 bg-primary-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-heading">The supporting bits</h2>
              <p className="section-paragraph">
                The three pillars above are the headline. These are the everyday capabilities that sit behind them and make a Pakistani pharmacy actually run.
              </p>
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
              <h2 className="section-heading">Want to see it on your stock?</h2>
              <p className="section-paragraph">
                Free for 30 days. We pre-load your medicines and walk your team through it on a setup call.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                  asChild
                >
                  <a href="https://wa.me/923107100663" target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                  <Link href="/pricing">See pricing</Link>
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
