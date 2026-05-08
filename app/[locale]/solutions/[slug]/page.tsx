import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, Boxes, BarChart3, Check, Clock } from "lucide-react";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import Container from "@/app/components/ui/container";
import { getWhatsAppLink, whatsappMessages, earlyAccessMessage } from "@/app/lib/whatsapp";
import { routing } from "@/i18n/routing";

/* -----------------------------------------------------------------------------
 * Slug catalog
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

// Map URL slug → message-bundle key (notYet.industries.<key>).
const slugLabelKey: Record<Exclude<Slug, "pharmacy">, string> = {
  retail: "retail",
  restaurant: "restaurant",
  wholesale: "wholesale",
  "departmental-store": "departmentalStore",
  distribution: "distribution",
};

/* -----------------------------------------------------------------------------
 * Static params + metadata
 * --------------------------------------------------------------------------- */

interface SolutionPageProps {
  params: { locale: string; slug: string };
}

// Pre-render every (locale × slug) combination.
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SUPPORTED_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { locale, slug } = params;

  if (!SUPPORTED_SLUGS.includes(slug as Slug)) {
    return { title: "Solution not found | Zapeera" };
  }

  if (slug === "pharmacy") {
    const t = await getTranslations({ locale, namespace: "meta.solutionsPharmacy" });
    return {
      title: t("title"),
      description: t("description"),
      alternates: { canonical: `https://zapeera.com/${locale}/solutions/${slug}` },
      openGraph: {
        title: t("title"),
        description: t("description"),
        url: `https://zapeera.com/${locale}/solutions/${slug}`,
        siteName: "Zapeera",
        images: ["https://zapeera.com/og-home.jpg"],
        type: "website",
      },
    };
  }

  const tMeta = await getTranslations({ locale, namespace: "meta.solutionsNotYet" });
  const tNotYet = await getTranslations({ locale, namespace: "solutionSlug.notYet.industries" });
  const industry = tNotYet(slugLabelKey[slug as Exclude<Slug, "pharmacy">]);
  return {
    title: tMeta("titleFn", { industry }),
    description: tMeta("descriptionFn", { industry }),
    alternates: { canonical: `https://zapeera.com/${locale}/solutions/${slug}` },
    robots: { index: true, follow: true },
  };
}

/* -----------------------------------------------------------------------------
 * Page entry
 * --------------------------------------------------------------------------- */

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  if (!SUPPORTED_SLUGS.includes(slug as Slug)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {slug === "pharmacy" ? (
        <PharmacyPage />
      ) : (
        <NotYetPage slug={slug as Exclude<Slug, "pharmacy">} />
      )}
      <Footer />
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * Pharmacy — fully-supported page
 * --------------------------------------------------------------------------- */

const pillarIcons = [Calendar, Boxes, BarChart3];

async function PharmacyPage() {
  const t = await getTranslations("solutionSlug.pharmacy");
  const tBtn = await getTranslations("common.buttons");
  const tBack = await getTranslations("solutionSlug");
  const pillars = (t.raw("pillars") as Array<{ title: string; body: string }>);
  const extras = (t.raw("extras") as string[]);

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
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
              {tBack("backToSolutions")}
            </Link>

            <Badge variant="secondary" className="mb-4">{t("badge")}</Badge>
            <h1 className="text-h1 text-neutral-900 font-bold mb-6">{t("heroH1")}</h1>
            <p className="text-body-lg text-neutral-600 leading-relaxed">{t("heroLead")}</p>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">{t("pillarsHeading")}</h2>
            <p className="section-paragraph">{t("pillarsLead")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((p, idx) => {
              const Icon = pillarIcons[idx] ?? pillarIcons[0];
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:border-primary-600/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="card-heading">{p.title}</h3>
                  <p className="text-body text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pakistan-specific extras */}
      <section className="py-20 md:py-32 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">{t("extrasHeading")}</h2>
            <p className="section-paragraph">{t("extrasLead")}</p>
          </div>

          <ul className="max-w-3xl mx-auto space-y-4">
            {extras.map((item) => (
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
            <h2 className="section-heading">{t("ctaHeading")}</h2>
            <p className="section-paragraph">{t("ctaBody")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7" asChild>
                <a
                  href={getWhatsAppLink(whatsappMessages.heroTrial)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tBtn("messageOnWhatsapp")}
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                <Link href="/pricing">{tBtn("seePricing")}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* -----------------------------------------------------------------------------
 * Not-yet-supported stub
 * --------------------------------------------------------------------------- */

async function NotYetPage({ slug }: { slug: Exclude<Slug, "pharmacy"> }) {
  const t = await getTranslations("solutionSlug.notYet");
  const tBack = await getTranslations("solutionSlug");
  const tBtn = await getTranslations("common.buttons");

  const industryKey = slugLabelKey[slug];
  const industryLabel = t(`industries.${industryKey}`);
  const headline = t("headlineFn", { industry: industryLabel });

  return (
    <section className="bg-cream pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-xl mx-auto">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            {tBack("backToSolutions")}
          </Link>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>

            <Badge variant="secondary" className="mb-4">{t("badge")}</Badge>
            <h1 className="text-h2 text-neutral-900 font-bold mb-4">{headline}</h1>
            <p className="text-body text-neutral-600 leading-relaxed mb-8">{t("body")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                asChild
              >
                <a
                  href={getWhatsAppLink(earlyAccessMessage(industryLabel))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tBtn("notifyOnWhatsapp")}
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                <Link href="/solutions/pharmacy">{tBtn("seeThePharmacyPage")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
