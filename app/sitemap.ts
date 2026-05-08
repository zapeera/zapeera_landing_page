import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://zapeera.com";

// Every public route under app/[locale]/. The [slug] solutions pages are
// expanded explicitly so each industry stub gets its own sitemap entry.
const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/features", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/solutions", changeFrequency: "weekly", priority: 0.8 },
  { path: "/solutions/pharmacy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/retail", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/restaurant", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/wholesale", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/departmental-store", changeFrequency: "monthly", priority: 0.6 },
  { path: "/solutions/distribution", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
  { path: "/product-update", changeFrequency: "weekly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * Sitemap emits an entry per (locale, route) pair so search engines see
 * both Urdu and English versions. Each entry carries `alternates.languages`
 * with hreflang pointers to the other locale, including an `x-default`
 * entry that points at the Urdu version (the default locale).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap(({ path, changeFrequency, priority }) =>
    routing.locales.map((locale) => {
      const url = `${baseUrl}/${locale}${path}`;
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[l] = `${baseUrl}/${l}${path}`;
      }
      languages["x-default"] = `${baseUrl}/${routing.defaultLocale}${path}`;

      return {
        url,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      };
    }),
  );
}
