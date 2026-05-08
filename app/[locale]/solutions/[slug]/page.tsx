import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, Boxes, BarChart3, Check, Clock } from "lucide-react";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import Container from "@/app/components/ui/container";

/* -----------------------------------------------------------------------------
 * Slug catalog
 *
 * Pharmacy is the only fully-supported industry today. The other industry slugs
 * remain on the site so that crawled URLs keep resolving and any traffic landing
 * on them gets routed to a WhatsApp lead — but they are explicitly marked as
 * "not currently supported."
 *
 * Anything outside this list returns 404.
 * --------------------------------------------------------------------------- */

type Slug =
  | "pharmacy"
  | "retail"
  | "restaurant"
  | "wholesale"
  | "departmental-store"
  | "distribution";

const SUPPORTED_SLUGS: Slug[] = [
  "pharmacy",
  "retail",
  "restaurant",
  "wholesale",
  "departmental-store",
  "distribution",
];

const labels: Record<Exclude<Slug, "pharmacy">, string> = {
  retail: "Retail",
  restaurant: "Restaurants",
  wholesale: "Wholesale",
  "departmental-store": "Departmental stores",
  distribution: "Distribution",
};

/* -----------------------------------------------------------------------------
 * Metadata
 * --------------------------------------------------------------------------- */

interface SolutionPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  if (!SUPPORTED_SLUGS.includes(params.slug as Slug)) {
    return {
      title: "Solution not found | Zapeera",
      description: "The requested solution page does not exist.",
    };
  }

  if (params.slug === "pharmacy") {
    return {
      title: "Pharmacy software, built for Pakistan | Zapeera",
      description:
        "Cloud POS and inventory software for Pakistani pharmacies — batch and expiry tracking, multi-branch inventory, profit-per-medicine reporting, WhatsApp-first support. Free for 30 days, no credit card.",
      keywords: [
        "pharmacy software Pakistan",
        "pharmacy POS",
        "medicine inventory",
        "expiry tracking",
        "Lahore pharmacy software",
        "Karachi pharmacy software",
      ],
      alternates: { canonical: `https://zapeera.com/solutions/${params.slug}` },
      openGraph: {
        title: "Pharmacy software, built for Pakistan | Zapeera",
        description:
          "Cloud POS and inventory software for Pakistani pharmacies. Batch + expiry tracking, multi-branch inventory, profit-per-medicine reporting.",
        url: `https://zapeera.com/solutions/${params.slug}`,
        siteName: "Zapeera",
        images: ["https://zapeera.com/og-home.jpg"],
        locale: "en_US",
        type: "website",
      },
    };
  }

  const label = labels[params.slug as Exclude<Slug, "pharmacy">];
  return {
    title: `${label} — coming soon | Zapeera`,
    description: `Zapeera for ${label.toLowerCase()} is coming soon. We are focused on Pakistani pharmacies first. Message us on WhatsApp for early access.`,
    alternates: { canonical: `https://zapeera.com/solutions/${params.slug}` },
    robots: { index: true, follow: true },
  };
}

/* -----------------------------------------------------------------------------
 * Page
 * --------------------------------------------------------------------------- */

export default function SolutionPage({ params }: SolutionPageProps) {
  if (!SUPPORTED_SLUGS.includes(params.slug as Slug)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {params.slug === "pharmacy" ? <PharmacyPage /> : <NotYetPage slug={params.slug as Exclude<Slug, "pharmacy">} />}
      <Footer />
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * Pharmacy — the fully-supported page
 * --------------------------------------------------------------------------- */

const pharmacyPillars = [
  {
    icon: Calendar,
    title: "Track every batch and expiry",
    body:
      "Every medicine that comes into your shop is logged with its batch number, supplier, and expiry date. Zapeera alerts you 90, 60, and 30 days before expiry — enough runway to return to the supplier on time. End-of-month report tells you exactly how much each supplier cost you in returns vs write-offs.",
  },
  {
    icon: Boxes,
    title: "Stock that matches the shelf",
    body:
      "Barcode scan when stock comes in, scan again at the till. The till and the inventory book are the same world. Multi-branch transfers keep batch and expiry intact, so a medicine moved from one shop to another does not lose its history.",
  },
  {
    icon: BarChart3,
    title: "Profit by medicine, not just by day",
    body:
      "See which medicines actually make profit and which are dead stock. Repeat-customer reports tell you who comes back and what they buy. End-of-day takes 5 seconds. End-of-month gives you the answers you used to spend a Sunday afternoon on.",
  },
];

const pharmacyExtras = [
  "Pakistani medicines pre-loaded — start with a real database, not an empty one",
  "Prices and reports in PKR by default",
  "Works on slow internet — sales keep ringing when the line drops",
  "WhatsApp-first support — message us, we reply within an hour during business hours",
  "Single-shop or up to 3 branches on the same dashboard",
  "Cashier till is simple enough that a new staff member can ring sales within 10 minutes",
];

function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to solutions
            </Link>

            <Badge variant="secondary" className="mb-4">For pharmacies</Badge>
            <h1 className="text-h1 text-neutral-900 font-bold mb-6">
              The pharmacy software, built for Pakistan.
            </h1>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              Track every batch and expiry. Replace the end-of-day hisaab. See which medicines actually make profit and which are dead stock — across one shop or three. Pakistani medicines pre-loaded, PKR by default, WhatsApp-first support.
            </p>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">What it does for a pharmacy</h2>
            <p className="section-paragraph">
              Three things, done properly. The capability list is longer — these three are what you will notice first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pharmacyPillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:border-primary-600/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="card-heading">{p.title}</h3>
                <p className="text-body text-neutral-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Built for Pakistani pharmacies — extras */}
      <section className="py-20 md:py-32 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">The Pakistan-specific bits</h2>
            <p className="section-paragraph">
              International POS software gets these wrong. Local desktop software never bothered to add them.
            </p>
          </div>

          <ul className="max-w-3xl mx-auto space-y-4">
            {pharmacyExtras.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl border border-neutral-200 px-5 py-4"
              >
                <div className="w-7 h-7 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-body text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-heading">Be one of our first 50 pharmacies.</h2>
            <p className="section-paragraph">
              Free for 30 days. No credit card. We set it up for you and pre-load your medicines. Message us on WhatsApp — we reply within an hour during business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7" asChild>
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
    </>
  );
}

/* -----------------------------------------------------------------------------
 * Not-yet-supported industry stub (retail / restaurant / wholesale / dept / dist)
 * --------------------------------------------------------------------------- */

function NotYetPage({ slug }: { slug: Exclude<Slug, "pharmacy"> }) {
  const label = labels[slug];

  return (
    <section className="bg-cream pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to solutions
          </Link>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>

            <Badge variant="secondary" className="mb-4">Coming soon</Badge>
            <h1 className="text-h2 text-neutral-900 font-bold mb-4">
              Zapeera for {label.toLowerCase()} — coming soon.
            </h1>
            <p className="text-body text-neutral-600 leading-relaxed mb-8">
              We are focused on Pakistani pharmacies first. Message us for early access when we open this up.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7" asChild>
                <a href="https://wa.me/923107100663" target="_blank" rel="noopener noreferrer">
                  Notify me on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                <Link href="/solutions/pharmacy">See the pharmacy page</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
