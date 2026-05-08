import { defineRouting } from "next-intl/routing";

/**
 * Locale routing config — single source of truth for next-intl.
 *
 * - `ur` is the default locale (Urdu, target market: Pakistani pharmacy
 *   owners). Visiting `/` or any unprefixed path redirects to `/ur/...`.
 * - `localePrefix: 'always'` means every URL has a locale prefix —
 *   `/ur/pricing`, `/en/pricing`. The middleware redirects unprefixed
 *   paths (`/pricing`) to the default locale (`/ur/pricing`).
 *
 * Phase 1 ships English content under both locales; the actual Urdu
 * translations land in Phase 4.
 */
export const routing = defineRouting({
  locales: ["ur", "en"],
  defaultLocale: "ur",
  localePrefix: "always",
  // Always send first-time visitors to /ur regardless of their browser's
  // Accept-Language. The target audience is Pakistani pharmacy owners; an
  // English-default browser does not signal a preference for English UI.
  // Once the user picks a locale via the language switcher, next-intl
  // persists it in the NEXT_LOCALE cookie and honors that on subsequent
  // visits.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
