# i18n Implementation Notes

**Library:** [next-intl](https://next-intl.dev) v4.11
**Locales:** `ur` (Urdu — default) and `en` (English)
**Routing:** `localePrefix: "always"` — every URL has a locale prefix, unprefixed paths redirect to default

---

## What was delivered

Full bilingual site, Urdu-default, with:

- **Locale-prefixed routing** — `/ur/*` (default) and `/en/*`. `/`, `/pricing`, etc. redirect to `/ur/...`. Internal `<Link>` components are locale-aware via `@/i18n/navigation`.
- **String extraction** — every user-facing string lives in `messages/<locale>.json`. No hardcoded English in JSX.
- **RTL + Nastaliq** — `<html dir="rtl" lang="ur">` for Urdu, with [Noto Nastaliq Urdu](https://fonts.google.com/noto/specimen/Noto+Nastaliq+Urdu) loaded via `next/font/google`. English content stays on Montserrat.
- **Logical CSS** — `ms-/me-/ps-/pe-` and `text-start/text-end` on the surfaces that needed mirroring; directional icons (`ArrowLeft/Right`, `ChevronLeft/Right`) flip with `rtl:-scale-x-100`.
- **Idiomatic Pakistani Urdu translations** — mixed-script (Nastaliq for prose, Latin for technical terms), Western Arabic numerals for prices, "السلام علیکم،" pre-fills on every WhatsApp CTA.
- **Language switcher** — `<LanguageSwitcher>` in the Navigation header (desktop pill + mobile drawer row). Uses `next-intl`'s locale-aware `<Link>` so the route is preserved when toggling.
- **SEO** — every page emits `<title>`, `<meta description>`, `og:*`, `twitter:*` from translated metadata. `alternates.languages` includes both locales + `x-default`. `app/sitemap.ts` emits one entry per (locale × route) pair with the same hreflang structure.
- **Translation review document** — [TRANSLATIONS_REVIEW.md](TRANSLATIONS_REVIEW.md) with side-by-side English↔Urdu and confidence labels for every key, ready for native-speaker review.

---

## Configuration decisions

### Default locale: Urdu

Set `defaultLocale: "ur"` in [i18n/routing.ts](i18n/routing.ts). A first-time visitor with no locale in the URL is sent to `/ur/`. The reasoning matches the project brief: target audience is Pakistani pharmacy owners, most of whom prefer Urdu over English. English remains a fully-supported alternative for chain owners, IT staff, and overseas evaluators.

### Routing pattern: `localePrefix: "always"`

Every URL carries the locale prefix (`/ur/pricing`, `/en/pricing`). The middleware redirects unprefixed paths (`/pricing`) to `/ur/pricing`. Trade-off vs `as-needed`:

- Pro: explicit. SEO crawlers always see the locale in the URL. Sharing a link unambiguously preserves language.
- Con: slightly longer URLs. Existing inbound links to `/pricing` get a 307 hop before resolving.

The brief explicitly described this behaviour ("/ and /ur/ both serve the Urdu version… /pricing redirects to /ur/pricing") so `always` is the right call.

### Font choice: Noto Nastaliq Urdu

Loaded via `next/font/google` from [app/[locale]/layout.tsx](app/[locale]/layout.tsx) with subset `arabic`, weights 400-700, `display: 'swap'`. Falls back to Montserrat → system-ui so missing Nastaliq glyphs (e.g. embedded English fragments) render in Latin gracefully.

The body font is set per-locale at the layout level: `font-nastaliq` when `locale === 'ur'`, `font-montserrat` when `'en'`. Both font CSS variables (`--font-nastaliq`, `--font-montserrat`) are exposed on the root `<body>` so a `.lang-en` utility can opt back into Latin for embedded English fragments inside Urdu copy ("POS", "WhatsApp", "dashboard").

`html[lang="ur"]` selectors in [app/globals.css](app/globals.css) bump body line-height to `1.9` (Nastaliq sits taller than Latin) and headings to `1.5`.

### Numbers stay in Western Arabic

Per the brief: `1500`, not `١٥٠٠`. Pakistani business owners read prices in Western numerals. The `<PricingSection>` component uses `n.toLocaleString("en-PK")` regardless of locale to lock this in.

### Floating WhatsApp button position in RTL

The button uses logical positioning (`bottom-6 end-6`), which puts it bottom-right in LTR and bottom-left in RTL. This matches the Arabic-locale convention WhatsApp itself uses. If the team prefers a fixed bottom-right regardless of locale, swap `end-6` to `right-6` in [app/components/FloatingCTA.tsx](app/components/FloatingCTA.tsx).

---

## Files added (i18n-specific)

```
i18n/
├── routing.ts          — defineRouting({ locales, defaultLocale, localePrefix })
├── request.ts          — getRequestConfig (loads messages/<locale>.json per request)
└── navigation.ts       — locale-aware Link / usePathname / useRouter / redirect

messages/
├── en.json             — full English bundle (~470 strings)
└── ur.json             — full Urdu bundle (parallel structure)

middleware.ts           — combined next-intl routing + Cache-Control fix
                          (preserves the s-maxage=60 fix from the deploy task)

app/
├── [locale]/layout.tsx           — root layout; sets <html lang dir>, loads
│                                   Montserrat + Noto_Nastaliq_Urdu, wraps
│                                   <NextIntlClientProvider>
├── components/LanguageSwitcher.tsx  — desktop + mobile language toggle
└── lib/page-metadata.ts          — buildPageMetadata({ path, metaKey, locale })
                                    helper used by every page wrapper for
                                    translated <title>, <meta>, OG tags,
                                    canonical + hreflang alternates

TRANSLATIONS_REVIEW.md   — side-by-side English↔Urdu review table (this doc)
I18N_NOTES.md            — this file
```

## Files restructured

Every route under `app/<route>/` was moved to `app/[locale]/<route>/` via `git mv` (history preserved). The original `app/layout.tsx` was deleted; `app/[locale]/layout.tsx` is now the de-facto root layout.

`app/sitemap.ts` rewrites itself: each route now emits one entry per locale, with `alternates.languages` mapping both locales plus `x-default` to the default locale path.

`next.config.js` is wrapped with `createNextIntlPlugin('./i18n/request.ts')`.

## Components converted to use translations

Every component that renders user-facing copy. Server components use `await getTranslations()`; client components use `useTranslations()`. Highlights:

- `app/components/Navigation.tsx` — nav links + Solutions dropdown + login + contact + new LanguageSwitcher
- `app/components/Footer.tsx` — column titles + link names + tagline + copyright (`{year}` placeholder)
- `app/components/FloatingCTA.tsx` — aria-label + tooltip
- `app/components/home/{Hero,About,FeaturesOverview,BuiltForPakistan,HowItWorks,FAQ,CTA,Pricing}Section.tsx`
- `app/pages/{Pricing,Features,Solutions,Contact,Careers,Updates,About,NotFound}.tsx`
- `app/[locale]/solutions/[slug]/page.tsx` — server component with `getTranslations`; uses `earlyAccessMessage(industryLabel)` so the WhatsApp pre-fill carries the localised industry name

## Plus per-route metadata

All 8 page wrappers (home, pricing, features, solutions, about, contact, careers, product-update) use `generateMetadata` via `buildPageMetadata({ path, metaKey, locale })`. The legal pages (privacy, cookie, terms) keep their existing static English metadata pending lawyer review — flagged as a follow-up.

---

## Known issues / limitations

### Out of scope (intentional)

1. **Legal pages** (`/privacy-policy`, `/cookie-policy`, `/terms-of-service`) are not translated. Their bodies are boilerplate templates and translating them is a legal task, not a marketing task. They keep their existing static English metadata. Action: lawyer-reviewed Urdu legal copy before launch.
2. **API routes** (`/api/contact`, `/api/careers`) are not localised. The contact form submissions still go to a Gmail inbox in English; the auto-reply (if any) is whatever the backend sends. Action: if the team wants language-aware auto-replies, that's a backend change.
3. **Form-validation messages** from `react-hook-form` / `zod` (if any) currently fall back to library defaults. The contact form on this site uses native HTML `required` + custom toast messages (which **are** translated). No `react-hook-form` validation on visible forms today.
4. **`/blog` was hidden** in an earlier task and remains hidden — no localised version exists.

### Translation confidence

[TRANSLATIONS_REVIEW.md](TRANSLATIONS_REVIEW.md) flags 6 strings as **Medium — please verify**:

1. `common.nav.menuToggleAria` — verbose form, could shorten
2. `home.about.items[0].body` — "9pm on a Friday" idiom may localise better
3. `features.supportingHeading` — "Supporting بات" is informal-mix; verify register
4. `solutionSlug.pharmacy.extrasHeading` — "پاکستان-specific باتیں" mixes Latin-in-Urdu noun-phrase oddly
5. `common.buttons.askWhatIsNew` — literal phrasing, might flow better reordered
6. `home.faq.q2.answer` (PTCL reference) — verb choice "بند ہونا" vs "خراب ہونا"

A native Urdu speaker on the team should review and edit these before launch. The rest of the bundle reads as natural Pakistani Urdu and is marked High confidence.

### Things that work but should get a visual QA

- **`/ur/*` rendering** — strings render with Nastaliq, RTL is on. Phase 3 fixed the high-traffic logical-property mismatches but the sub-grid components inside `app/components/ui/` (shadcn primitives) were not exhaustively audited for `ml-*` / `pl-*` etc. Most use logical layout already; spot-check Accordion, Dialog, Sheet, Sidebar in Urdu mode if those surfaces become user-facing.
- **Floating WhatsApp button** flips to bottom-left under `dir="rtl"`. The team may prefer it locked to bottom-right in both locales — see the FloatingCTA note above.
- **Mobile menu** drawer slides from the right in LTR and from the left in RTL (default). If a different convention is preferred, the Navigation `Sheet`/dialog code controls direction.

### SEO follow-ups

- **`og-image.jpg`** — the OpenGraph image is the same English image for both locales. Ideally there's a separate Urdu OG image with the Urdu hero text. Out of scope for this task; flagged.
- **Structured data** — `app/components/StructuredData.tsx` emits Organization / WebSite / SoftwareApplication JSON-LD. The strings inside that component are not yet localised. Low impact (search engines mostly use English-keyword structured data) but worth a follow-up pass.
- **Lighthouse / live verification** — done via `npm run build` (all 27 routes prerender) but not against a live deploy. Run Lighthouse on the user's machine after the next deploy.

---

## How to add or edit translations

1. Edit `messages/en.json` to add a new key. Mirror the same key in `messages/ur.json` with the Urdu translation.
2. Use the new key in JSX: `useTranslations("namespace")` then `t("key")`. Or `getTranslations({ locale, namespace })` in a server component.
3. For dynamic data (variables in messages), use ICU-style placeholders: `"Hello {name}"` and call `t("greeting", { name })`.
4. For arrays/objects (FAQ items, plan feature lists), pull with `t.raw("items")` and cast to the expected type.
5. After editing JSONs, run `npm run build` — if a key is missing in either bundle, the build fails with `MISSING_MESSAGE`.
6. Update `TRANSLATIONS_REVIEW.md` so the review doc stays in sync with the bundles.

## Build output

```
ƒ Middleware                            38.1 kB

12 routes × 2 locales prerendered + 6 solution slugs × 2 locales = 36 static HTML pages.
+ /api/contact, /api/careers (server-rendered)
+ /robots.txt, /sitemap.xml (static)
+ /_not-found

First Load JS shared by all: 250 kB (next-intl client runtime adds ~12 kB
to the vendors chunk vs the pre-i18n baseline).
```

---

## Phase recap

| Phase | Commit | Scope |
|---|---|---|
| 1 | `028363d` | next-intl install + locale routing + restructure to `app/[locale]/` |
| 2 | `f9116e7` | Extract every string into `messages/en.json` + convert all components |
| 3 | `318e00c` | Noto Nastaliq Urdu font + RTL adjustments + logical-property swaps |
| 4 | `c0a8252` | Full Urdu translations + `TRANSLATIONS_REVIEW.md` |
| 5 | (this commit) | LanguageSwitcher + I18N_NOTES.md final doc |
