import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://zapeera.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface PageMetaArgs {
  /** The route path under the locale (e.g. "/pricing", "/", "/about-us"). */
  path: string;
  /** Translation key under the `meta` namespace, e.g. "home", "pricing". */
  metaKey: string;
  /** Locale resolved from the page's params. */
  locale: string;
}

/**
 * Build per-page Metadata using the translated title/description from the
 * `meta.<key>` namespace. Each page also picks up canonical + hreflang
 * alternates so search engines see /ur and /en as the same page in two
 * languages, with `x-default` pointing at the Urdu version.
 */
export async function buildPageMetadata({ path, metaKey, locale }: PageMetaArgs): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.${metaKey}` });
  const title = t("title");
  const description = t("description");

  const canonical = `${SITE_URL}/${locale}${path === "/" ? "" : path}`;
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${SITE_URL}/${l}${path === "/" ? "" : path}`;
  }
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Zapeera",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
      creator: "@zapeera",
    },
  };
}
