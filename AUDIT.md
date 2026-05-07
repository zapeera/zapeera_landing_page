# Zapeera Landing Page — Codebase Audit

**Date:** 2026-05-07
**Scope:** Full codebase review prior to redesign work (Tasks 2–7).
**Repo:** `zapeera_landing_page` (branch `main`)

---

## 1. Tech Stack

| Area | Stack |
|---|---|
| Framework | Next.js **14.0.0** (App Router) |
| Runtime | React 18.3.1, TypeScript 5.9.3 |
| Styling | Tailwind CSS 3.4.17 + global CSS in [app/globals.css](app/globals.css) (HSL CSS variables) |
| UI primitives | shadcn/ui (60+ components in [app/components/ui/](app/components/ui/)) backed by Radix UI |
| Icons | lucide-react 0.462.0 |
| Fonts | `next/font/google` — Inter, Poppins, Montserrat (Montserrat is the de-facto body font) |
| Forms | react-hook-form 7.61.1 + Zod 3.25.76 |
| Email | nodemailer 7 (Gmail SMTP) |
| Carousels | Swiper 12 + embla-carousel-react 8 (both present — duplication) |
| Charts | recharts 2.15.4 |
| Image optim | sharp 0.34.4, next/image |
| Analytics | Custom GoogleAnalytics + GoogleVerification components |
| **i18n** | **None.** No `next-intl`, no `next-i18next`, no built-in `i18n` config in [next.config.js](next.config.js). All copy is hardcoded English JSX. |

**Recommendation for Task 5:** Add `next-intl` (App Router-native, minimal footprint, RTL-friendly). Use `[locale]` segment routing with `ur` as default.

Build/dev: dev and prod both run on port **3099**. SWC minify, image WebP/AVIF, package-import optimization for `lucide-react` and `@radix-ui/react-icons` already configured.

---

## 2. Page Routes

All routes live under `app/` (App Router). Each renders a top-level page composition.

| Route | File | Contents |
|---|---|---|
| `/` | [app/page.tsx](app/page.tsx) | Hero → ClientLogos → AboutSection → WhyChooseUs → SolutionsSection → FeaturesOverview → HowItWorks → PricingSection → Testimonials → FAQSection → CTASection (composed via `next/dynamic`) |
| `/pricing` | [app/pricing/page.tsx](app/pricing/page.tsx) | 3-tier pricing (Starter / Professional / Business), monthly–yearly toggle |
| `/features` | [app/features/page.tsx](app/features/page.tsx) | Feature grid + detailed sections |
| `/solutions` | [app/solutions/page.tsx](app/solutions/page.tsx) | 6 industry tiles |
| `/solutions/[slug]` | [app/solutions/[slug]/page.tsx](app/solutions/[slug]/page.tsx) | Dynamic — slugs: `retail`, `pharmacy`, `restaurant`, `wholesale`, `departmental-store`, `distribution`. Each contains hardcoded testimonials, add-on prices, hero, features. |
| `/about-us` | [app/about-us/page.tsx](app/about-us/page.tsx) | Mission, team, values |
| `/contact-us` | [app/contact-us/page.tsx](app/contact-us/page.tsx) | Contact form (name, email, company, phone, subject, message) → POST `/api/contact` |
| `/careers` | [app/careers/page.tsx](app/careers/page.tsx) | Job list + application form with resume upload → POST `/api/careers` |
| `/blog` | [app/blog/page.tsx](app/blog/page.tsx) | Blog index |
| `/blog/[slug]` | [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) | Dynamic blog post |
| `/blogs` | [app/blogs/page.tsx](app/blogs/page.tsx) | **DUPLICATE of `/blog`** — two routes serve identical content |
| `/blogs/[slug]` | [app/blogs/[slug]/page.tsx](app/blogs/[slug]/page.tsx) | **DUPLICATE** |
| `/product-update` | [app/product-update/page.tsx](app/product-update/page.tsx) | Changelog |
| `/privacy-policy` | [app/privacy-policy/page.tsx](app/privacy-policy/page.tsx) | Legal |
| `/cookie-policy` | [app/cookie-policy/page.tsx](app/cookie-policy/page.tsx) | Legal |
| `/terms-of-service` | [app/terms-of-service/page.tsx](app/terms-of-service/page.tsx) | Legal |
| `/not-found` | [app/not-found.tsx](app/not-found.tsx) | 404 |

**API routes:** `/api/contact` and `/api/careers` (both POST, both nodemailer to Gmail).

---

## 3. Reusable Components

### Layout / global
| Component | Path | Used in |
|---|---|---|
| Navigation | [app/components/Navigation.tsx](app/components/Navigation.tsx) | Layout (every page) |
| Footer | [app/components/Footer.tsx](app/components/Footer.tsx) | Layout (every page) |
| FloatingCTA | [app/components/FloatingCTA.tsx](app/components/FloatingCTA.tsx) | Layout — floating WhatsApp button (appears after 500px scroll) |

### Performance / SEO utilities
- [OptimizedImage.tsx](app/components/OptimizedImage.tsx), [OptimizedLink.tsx](app/components/OptimizedLink.tsx), [LazyWrapper.tsx](app/components/LazyWrapper.tsx)
- [PerformanceMonitor.tsx](app/components/PerformanceMonitor.tsx), [GoogleAnalytics.tsx](app/components/GoogleAnalytics.tsx), [GoogleVerification.tsx](app/components/GoogleVerification.tsx), [StructuredData.tsx](app/components/StructuredData.tsx)

### Home page sections — [app/components/home/](app/components/home/)
| Component | Used by |
|---|---|
| `HeroSection.tsx` | `/` |
| `AboutSection.tsx` | `/` (and About page) |
| `ClientLogos.tsx` | `/` (Trusted by carousel — **TO REMOVE**) |
| `FeaturesOverview.tsx` | `/`, `/features` |
| `HowItWorks.tsx` | `/` |
| `PricingSection.tsx` | `/`, `/pricing` |
| `Testimonials.tsx` | `/` (**TO REMOVE — fake testimonials**) |
| `FAQSection.tsx` | `/` |
| `WhyChooseUs.tsx` | `/`, `/about-us` |
| `CTASection.tsx` | `/` (footer CTA — **rewrite copy**) |
| `SolutionsSection.tsx` | `/`, `/solutions` |
| `PharmacySection.tsx` | `/`, `/solutions/pharmacy` |

### UI primitives — [app/components/ui/](app/components/ui/)
60+ shadcn/ui components (button, card, dialog, input, select, accordion, carousel, dropdown-menu, sheet, tabs, toast, etc.). Most are unused by current pages but kept in tree.

### Hooks / lib
- [app/hooks/use-mobile.tsx](app/hooks/use-mobile.tsx), [app/hooks/use-toast.ts](app/hooks/use-toast.ts), [app/hooks/usePerformance.ts](app/hooks/usePerformance.ts)
- [app/lib/utils.ts](app/lib/utils.ts) — `cn()` helper

---

## 4. Theme & Design Tokens

### Where they live
- **HSL CSS vars:** [app/globals.css](app/globals.css) — `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, `--muted`, `--destructive`, `--border`, `--ring`, `--radius`. Light + dark mode defined.
- **Tailwind theme:** [tailwind.config.ts](tailwind.config.ts) — extends with HSL var refs + an Indigo 50–950 palette + `montserrat`/`poppins` font families + custom keyframes.
- **Typography utility classes:** Defined in [app/globals.css](app/globals.css):
  - `.section-heading-h1` (48 → 28px responsive, 700)
  - `.section-heading` (42 → 28px responsive, 600)
  - `.section-paragraph` (18px / line-height 1.5 / gray-600)
  - `.card-heading` (20px / 500)

### What's broken — the actual problem

Despite the above tokens existing, **components mostly bypass them**:

#### Hardcoded hex colors (sample of grep counts across `app/`)
| Hex | Approx count | Where |
|---|---|---|
| `#1947C4` | ~44 | Footer, Navigation, AboutSection, CTASection, FeaturesOverview, HowItWorks, SolutionsSection, WhyChooseUs, PricingSection, FAQSection |
| `#0C2C8A` | ~14 | api/contact, PricingSection, About, layout |
| `#29CDCF` | ~9 | Navigation, CTASection, HeroSection, PricingSection, HowItWorks |
| `#1732BD` | ~7 | Navigation |
| `#26D2C6` | ~6 | layout, FeaturesOverview, FAQSection, PricingSection, HeroSection |
| `#1C22AA` | ~4 | layout, FeaturesOverview, About |
| `#22D5C7` | ~2 | Navigation |
| `#E9FAF9` | ~1 | HowItWorks |

These are five different blues and three different teals — there is **no single source of truth** for brand color.

#### Inline arbitrary Tailwind values
Pervasive across the home sections:
- Sizes: `text-[14px]`, `text-[16px]`, `text-[22px]`, `text-[28px]`, `text-[32px]`, `w-[20px]`, `h-[20px]`, `w-[15px]`
- Positioning: `top-[1px]`, `top-[20px]`, `top-[50%]`, `left-[200px]`, `translate-x-[-50%]`
- Colors: `bg-[#1947C4]`, `bg-[#E9FAF9]`, `bg-[#0C2C8A]`

#### Inline `style={{ ... }}` with rgb()
`rgb(239 246 255)`, `rgb(218 227 249)` in Footer, ClientLogos, FeaturesOverview, WhyChooseUs.

### Buttons
No central `Button` variant in active use. Instead, button styling is duplicated per-section with a mix of arbitrary classes — at least 4 distinct visual styles across Hero, CTA, Pricing, Navigation. The shadcn `Button` exists at [app/components/ui/button.tsx](app/components/ui/button.tsx) but most pages ignore it.

### Spacing
No custom Tailwind spacing scale. Sections use ad-hoc `pt-[40px]`, `pb-[60px]` etc. instead of `py-16` / `py-20`.

---

## 5. Dummy / Placeholder / Misleading Content

### "500+ Pakistani businesses" claim — confirmed locations
| File | Line | Text |
|---|---|---|
| [app/components/home/AboutSection.tsx](app/components/home/AboutSection.tsx) | 64 | "500+ Pakistani businesses use Zapeera…" |
| [app/components/home/CTASection.tsx](app/components/home/CTASection.tsx) | 17 | "Join over 500 Pakistani businesses already growing smarter…" |
| [app/pages/About.tsx](app/pages/About.tsx) | 73 | "500+ active enterprise partners worldwide" |
| [app/pages/Updates.tsx](app/pages/Updates.tsx) | 76, 199, 592, 711, 737 | Various "2,500+", "1,500+", "5,000+ active users", "Analyzed 500+ businesses" |
| [app/components/home/PharmacySection.tsx](app/components/home/PharmacySection.tsx) | 12 | "5,000+ deployments across the country" |

### Fake testimonials — [app/components/home/Testimonials.tsx](app/components/home/Testimonials.tsx)
Three fabricated testimonials at lines 13–40:
1. **Amir Farooq, Owner, Lahore Electronics** — generic POS quote
2. **Sara Ahmed, CEO, HealthPlus Pharmacy** — pharmacy quote
3. **Rizwan Ali, Manager, Karachi Bites** — restaurant quote

Each [app/solutions/[slug]/page.tsx](app/solutions/[slug]/page.tsx) page also embeds invented per-industry testimonials.

### "Trusted by Businesses" carousel
[app/components/home/ClientLogos.tsx](app/components/home/ClientLogos.tsx) — heading "Trusted by Businesses Across Pakistan" with placeholder logos. **Delete entirely** per Task 3.

### Lorem ipsum
**None found.** Copy is real (if generic SaaS-y).

### Typos
Searched for `trail`, `availabe`, `recieve`, `seperate`, `succesful`, `occured`. **No instances of these.** (The two hits for "trail" were legitimate uses — "audit trails".) The fix-pass for typos in Task 3 will need a closer manual read; nothing automated turned up.

### Other content red flags
- **Filename typo:** [public/whychose/whoresale-and-distributors.webp](public/whychose/whoresale-and-distributors.webp) (should be "wholesale")
- **Filename typo:** `public/hotle.jpg`, `public/hotle3.svg`, `public/htle.webp` (should be "hotel")
- **Generic team photo names:** `public/images/ali.jpeg`, `don.jpeg`, `me.jpeg`, `umair.jpeg` — unclear whether these are real team or stock
- **Stale `public/images/Discovery & Research/`** directory
- **`.DS_Store` files** committed/present in `public/`
- **Yandex/Yahoo placeholders:** [app/components/GoogleVerification.tsx](app/components/GoogleVerification.tsx) (or similar) contains literal `"your-yandex-verification-code"` placeholder strings

---

## 6. Hardcoded Prices

### Home pricing section — [app/components/home/PricingSection.tsx](app/components/home/PricingSection.tsx)
| Plan | Lines | Monthly | Yearly |
|---|---|---|---|
| Starter | 25–26 | Rs 5,000 | Rs 50,000 |
| Professional (popular) | 44–45 | Rs 20,000 | Rs 200,000 |
| Business | 64–65 | Rs 100,000 | Rs 1,000,000 |

These are the tiers Task 4 explicitly requires removed. Same prices likely echoed in [app/pricing/page.tsx](app/pricing/page.tsx) — needs verification during Task 4.

### Solutions add-on pricing — [app/solutions/[slug]/page.tsx](app/solutions/[slug]/page.tsx)
| Solution | Lines | Prices |
|---|---|---|
| Pharmacy | 107, 119, 133 | Rs 15,000 / Rs 25,000 / Rs 45,000 |
| Retail | 240, 252 | Rs 20,000 / Rs 35,000 |
| Restaurant | 639, 651 | Rs 25,000 / Rs 45,000 |
| Distribution | 772, 784, 798 | Rs 20,000 / Rs 35,000 / Rs 65,000 |

### FAQ — [app/components/home/FAQSection.tsx](app/components/home/FAQSection.tsx)
Line 29: "Plans start at PKR 5,000/month and include a 14-day free trial…" — both the price and the **14-day** (vs. 30-day per Task 4) need updating.

### Currency mention
[app/components/home/HowItWorks.tsx](app/components/home/HowItWorks.tsx) line 12: "Set up taxes, currency (PKR)…" — no price, just a feature reference. Leave as-is.

---

## 7. WhatsApp / Contact

| Item | Where | Notes |
|---|---|---|
| WhatsApp link | [app/components/FloatingCTA.tsx](app/components/FloatingCTA.tsx) line 29 | Hardcoded `https://wa.me/+923107100663` — **move to env var** per Task 6 |
| Floating button | FloatingCTA | Only appears after 500px scroll; should be persistent per Task 6 |
| "Request a Demo" CTA | [HeroSection.tsx](app/components/home/HeroSection.tsx) line 48, [CTASection.tsx](app/components/home/CTASection.tsx) | Links to `/contact-us` — **convert to WhatsApp** per Task 6 |
| Contact form | [app/contact-us/page.tsx](app/contact-us/page.tsx) → `/api/contact` | Keep as secondary |
| Quote modal | Embedded inside [Navigation.tsx](app/components/Navigation.tsx) | Duplicates `/contact-us`; suggest removing during Task 6 |

---

## 8. Recommendation for i18n Library (Task 5)

**Recommend `next-intl`.**

Reasons:
- Native App Router support (server components, layouts, metadata).
- Lightweight (~6 kB gzipped runtime).
- Supports `[locale]` segment routing — keeps clean URLs (`/ur/pricing`, `/en/pricing`).
- First-class RTL handling via `dir` on the layout.
- Used widely; mature.
- Next.js's old built-in `i18n` config is **not supported in App Router**, so it's a non-option.

Plan: install `next-intl`, restructure routes under `app/[locale]/`, set `defaultLocale: 'ur'`, add Nastaliq font via `next/font/google` (Noto Nastaliq Urdu).

---

## 9. Bugs Found Incidentally (Not Fixing in This Pass — Tracked Here)

1. **[BUG] Duplicate `/blog` and `/blogs` routes** — splits SEO. Pick one canonical, redirect the other.
2. **[BUG] `min-h-[90h]` in [HeroSection.tsx](app/components/home/HeroSection.tsx) line 10** — `90h` is not a valid CSS unit; intended `90vh`.
3. **[BUG] Quote modal in Navigation duplicates `/contact-us`** — two competing entry points for the same intent.
4. **[SEC] No rate limiting / CAPTCHA** on `/api/contact` and `/api/careers`.
5. **[SEC] No MIME-type validation** on the careers resume upload (size-only check).
6. **[SEC] Missing CSP and HSTS headers** in [next.config.js](next.config.js).
7. **Both Swiper and embla-carousel-react** are installed — only one is used in active code paths. Drop the other to save bundle.
8. **`.DS_Store` and the empty `public/images/Discovery & Research/`** should be cleaned up.
9. **Yandex/Yahoo verification placeholders** are literal `"your-yandex-verification-code"` strings shipping to production.

These are out of scope for Tasks 2–7 unless they block the work. The `90h` unit and the duplicate blog routes are cheap fixes worth doing alongside Task 7 polish.

---

## 10. Public Asset Inventory (high level)

```
public/
├── logo.png, logos.png, og-image.jpg, favicon.ico, robots.txt, placeholder.svg
├── phar.png, phar2.png, pharmacy.svg
├── hotle.jpg, hotle3.svg, htle.webp        ← typo: "hotle"
├── store.png, store2.png
├── carousel_addon.png, "Pasted image.png"
├── images/
│   ├── logo.png (duplicate of root)
│   ├── whatsapp.png  (used by FloatingCTA)
│   ├── hero.jpeg, dashboard.png, pos.png, pr.png, admin.png
│   ├── inventory.png/.jpeg, batches.png, mjid.png
│   ├── analysis.jpeg, performance.jpeg, security.jpeg
│   ├── multibranch.jpeg, smart_invoice.jpeg, business.webp, "Retail POS.jpeg"
│   ├── ali.jpeg, don.jpeg, me.jpeg, umair.jpeg   ← team(?) photos, unclear naming
│   └── Discovery & Research/                       ← appears unused
├── feature/         (14 .webp screenshots — POS, Inventory, Reports, etc.)
├── icon-image/      (8 feature icons .png)
├── whychose/        (8 industry images, includes "whoresale" typo)
└── team-images/
    └── Muhammad Bilal.jpeg
```

The `git status` at session start shows three deleted team images (`Mr Muhammad Majid.jpeg`, `Mr. Ali Mehtab.png`, `Mr. Muhammad Umair.png`) that are **already removed locally but not yet committed**.

---

## Summary — What This Means for Tasks 2–8

| Task | Friction level | Notes |
|---|---|---|
| **2 — Design system** | High | 70+ hardcoded hex values + arbitrary Tailwind values across 10+ components. Tokens exist but are bypassed; this is mostly a search-and-replace + button consolidation pass. |
| **3 — Dummy content** | Low–Medium | Specific files identified above. ClientLogos and Testimonials components delete cleanly. AboutSection / CTASection need copy rewrites in place. |
| **4 — Pricing** | Low | Two pricing sources: home `PricingSection.tsx` and `/pricing` page (and FAQ mention). All confirmed. |
| **5 — i18n + Urdu default** | High | No existing infrastructure. Requires App Router restructure to `app/[locale]/`, ~13.9k LOC of strings to extract, RTL CSS audit, Nastaliq font load. **This is the largest task.** |
| **6 — WhatsApp CTA** | Low | One existing FloatingCTA, two CTA call-sites to swap, env var for number. |
| **7 — Performance / polish** | Medium | Already has `next/image`, modern formats, SWC minify. Mostly verifying mobile breakpoints, fixing CLS, the `90h` bug, and adding alt text / labels where missing. |

**No blocking architectural decisions required** beyond confirming `next-intl` for Task 5.
