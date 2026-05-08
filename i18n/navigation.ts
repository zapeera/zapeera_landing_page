import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation primitives.
 *
 * Drop-in replacements for `next/link`'s `Link` and `next/navigation`'s
 * `usePathname` / `useRouter`. They automatically prepend the active
 * locale prefix on every internal link and strip it from `usePathname()`,
 * which is what almost every callsite wants.
 *
 * Use this everywhere instead of `next/link` for internal navigation:
 *
 *   import { Link } from "@/i18n/navigation";
 *   <Link href="/pricing">…</Link>   →   /<currentLocale>/pricing
 *
 * External links (https://wa.me/..., https://app.zapeera.com/) keep using
 * a plain `<a>` tag — those don't go through the locale router.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
