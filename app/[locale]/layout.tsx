import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Gulzar } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import "../globals.css";
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { ReactQueryProvider } from "../providers";
import Loading from "../components/ui/loading";
import PerformanceMonitor from "../components/PerformanceMonitor";
import GoogleVerification from "../components/GoogleVerification";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { routing, type Locale } from "@/i18n/routing";

// English / Latin script — Montserrat. Weights trimmed to those in active use
// (font-normal/medium/semibold/bold) plus italic for the hero emphasis.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

// Urdu — Gulzar is a modern Nastaliq-style font on Google Fonts. Cleaner and
// faster to render than Noto Nastaliq Urdu (which we tried first), with better
// readability at body sizes. Weight 400 only is what Gulzar ships with; we
// reuse Montserrat for embedded English fragments inside Urdu copy via the
// .lang-en utility class (globals.css).
const nastaliq = Gulzar({
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
  variable: "--font-nastaliq",
});

export const metadata: Metadata = {
  title: {
    default: "Zapeera — Pharmacy software, built for Pakistan",
    template: "%s | Zapeera",
  },
  description:
    "Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab, and see which medicines actually make profit. Free for 30 days, no credit card.",
  keywords: [
    "pharmacy software Pakistan",
    "pharmacy POS",
    "medicine inventory software",
    "expiry tracking pharmacy",
    "pharmacy management Pakistan",
    "cloud POS Pakistan",
    "PKR pharmacy software",
    "Lahore pharmacy software",
    "Karachi pharmacy software",
  ],
  authors: [{ name: "Zapeera Team" }],
  creator: "Zapeera",
  publisher: "Zapeera",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://zapeera.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zapeera.com",
    title: "Zapeera — Pharmacy software, built for Pakistan",
    description:
      "Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab.",
    siteName: "Zapeera",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zapeera — Pharmacy software, built for Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapeera — Pharmacy software, built for Pakistan",
    description:
      "Cloud POS and inventory software for Pakistani pharmacies. Free for 30 days, no credit card.",
    images: ["/og-image.jpg"],
    creator: "@zapeera",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "q021Kxdt-XlMmlEMsW8LMeSppqPXjr3IfMw1llhujFI",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Statically generate every locale at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

/**
 * The locale layout is the de-facto root layout under next-intl with App Router:
 * it owns the <html> + <body> tags. The original `app/layout.tsx` was removed.
 *
 * - `<html lang>` is set to the resolved locale.
 * - `<html dir>` is "rtl" for Urdu, "ltr" for English. Phase 1 ships English
 *   strings under both locales, so /ur/ pages currently display Latin text in
 *   an RTL container — this is expected for Phase 1 and will look correct once
 *   Phase 3 lands the Nastaliq font and the layout audit, and Phase 4 lands
 *   the actual Urdu translations.
 * - `setRequestLocale` enables static rendering for translated content.
 */
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  const dir = locale === "ur" ? "rtl" : "ltr";
  // For Urdu, the body font defaults to Nastaliq; English copy embedded inside
  // Urdu sentences (POS, WhatsApp, etc.) gets the Latin font via .lang-en
  // (defined in globals.css). Western Arabic numerals stay default.
  const bodyFont = locale === "ur" ? "font-nastaliq" : "font-montserrat";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${nastaliq.variable} ${bodyFont} bg-white`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <GoogleVerification />
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <TooltipProvider>
              <Loading>
                <PerformanceMonitor />
                <Toaster />
                <Sonner />
                {children}
              </Loading>
            </TooltipProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
