import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Per-request i18n config. next-intl calls this on every request to
 * resolve which locale + message bundle to render.
 *
 * If the URL's locale segment is missing or unsupported, fall back to the
 * configured default (Urdu). The middleware in middleware.ts handles
 * that redirect at the URL level; this is the runtime safety net.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
