"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/app/lib/utils";

interface LanguageSwitcherProps {
  /** Display variant: inline desktop pill, or full-width mobile row. */
  variant?: "desktop" | "mobile";
  /** Optional onClick — used to close the mobile drawer when a locale is picked. */
  onSelect?: () => void;
}

/**
 * Language toggle: shows "English | اردو" with the current locale muted
 * and the other locale rendered as a link to the same path under the
 * other locale prefix. Uses next-intl's locale-aware Link, which preserves
 * the current pathname and query when switching.
 */
const LanguageSwitcher = ({ variant = "desktop", onSelect }: LanguageSwitcherProps) => {
  const active = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common.languageToggle");

  const linkClass = (locale: string) =>
    cn(
      "transition-colors",
      active === locale
        ? "text-neutral-400 font-medium pointer-events-none"
        : "text-neutral-700 hover:text-primary-700 font-semibold",
    );

  // Flag glyphs render as emoji on macOS / iOS / Android / modern Chromium on
  // Linux. Windows Chromium falls back to two-letter region indicators (GB,
  // PK) which is acceptable. Wrapped in a span pinned to Latin font so the
  // emoji stays readable inside the Nastaliq body font.
  const flag = (locale: "en" | "ur") => (
    <span className="font-montserrat text-base leading-none" aria-hidden="true">
      {locale === "en" ? "🇬🇧" : "🇵🇰"}
    </span>
  );

  if (variant === "mobile") {
    return (
      <div className="flex items-center justify-between w-full px-2 sm:px-4 py-3 border-t border-neutral-200">
        <span className="text-sm text-neutral-500">{t("ariaLabel")}</span>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href={pathname}
            locale="en"
            onClick={onSelect}
            className={cn(linkClass("en"), "inline-flex items-center gap-1.5")}
          >
            {flag("en")}
            {t("english")}
          </Link>
          <span className="text-neutral-300" aria-hidden="true">|</span>
          <Link
            href={pathname}
            locale="ur"
            onClick={onSelect}
            className={cn(linkClass("ur"), "inline-flex items-center gap-1.5")}
          >
            {flag("ur")}
            {t("urdu")}
          </Link>
        </div>
      </div>
    );
  }

  // Desktop variant — small inline pill in the header.
  return (
    <div
      className="hidden lg:flex items-center gap-2 text-sm whitespace-nowrap"
      aria-label={t("ariaLabel")}
    >
      <Link
        href={pathname}
        locale="en"
        className={cn(linkClass("en"), "inline-flex items-center gap-1.5")}
      >
        {flag("en")}
        {t("english")}
      </Link>
      <span className="text-neutral-300" aria-hidden="true">|</span>
      <Link
        href={pathname}
        locale="ur"
        className={cn(linkClass("ur"), "inline-flex items-center gap-1.5")}
      >
        {flag("ur")}
        {t("urdu")}
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
