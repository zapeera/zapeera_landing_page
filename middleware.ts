import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

/**
 * Combined middleware:
 *
 *  1. next-intl locale routing — redirects /pricing -> /ur/pricing,
 *     handles the Accept-Language header, persists the user's locale
 *     in a cookie. Configured via i18n/routing.ts.
 *
 *  2. Cache-Control on HTML — keeps the year-long stale-HTML problem
 *     from recurring. Without this, Next.js's Full Route Cache defaults
 *     a one-year s-maxage on static pages, and any cache layer in front
 *     (nginx proxy_cache, CDN) holds onto HTML referencing chunk hashes
 *     from earlier deploys long after those chunks are gone — which is
 *     what was breaking zapeera.com with 400s on /_next/static/* and
 *     deleted images. Short s-maxage (60s) means future deploys are
 *     visible at the cache layer within a minute.
 */
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const url = request.nextUrl.pathname;

  // Static assets and API routes keep their own cache strategy. Don't
  // touch their headers; just return the next-intl response untouched.
  const isStaticOrApi =
    url.startsWith("/_next/") || url.startsWith("/api/") || /\.[a-zA-Z0-9]+$/.test(url);

  if (!isStaticOrApi) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
    );
  }

  return response;
}

export const config = {
  // Match all routes except: /api/*, /_next/*, anything with a file extension
  // (favicon.ico, og-image.jpg, robots.txt, sitemap.xml, etc.). next-intl runs
  // on the rest and applies locale routing.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
