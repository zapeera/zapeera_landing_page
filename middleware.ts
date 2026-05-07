import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Force short Cache-Control on HTML page responses.
 *
 * Background: Next.js's Full Route Cache for static pages defaults to
 * `Cache-Control: s-maxage=31536000, stale-while-revalidate` — a one-year
 * shared cache. Combined with hash-named JS/CSS chunks that change on every
 * deploy, that means a deploy lands a new build but caches in front (nginx
 * proxy_cache, CDN, the Next.js full-route cache itself) keep serving the
 * previous build's HTML, which references chunks that no longer exist on
 * disk. Result: 400s on /_next/static/css/<old-hash>.css and the
 * MIME-type errors users see in the browser console.
 *
 * Fix: HTML pages are short-cached (60s shared, 120s stale-while-revalidate).
 * Hash-named static chunks remain immutable for a year — they're keyed by
 * content hash, so caching them forever is correct.
 *
 * The matcher excludes /_next/*, /api/*, and any path with a file extension
 * (favicon, og-image, etc.), so this only fires on HTML routes.
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
  );
  return response;
}

export const config = {
  matcher: [
    // All routes except: _next/* (Next internals), api/*, anything with a
    // file extension. This leaves only HTML page routes.
    "/((?!api|_next|.*\\..*).*)",
  ],
};
