# Performance Report — Phase 1: Images & Fonts

**Date:** 2026-05-07
**Scope:** Image optimisation + font loading only. Bundle audit, mobile QA, accessibility, and SEO — **Phase 2**, awaiting review.

---

## On Lighthouse measurement

I did not run Lighthouse for this report. Why:

- `lighthouse` is not installed on this sandbox and `npx lighthouse` would download ~50 MB on first run.
- Lighthouse needs a running production server (`npm run start`) plus headless Chrome with a specific path/flag set on macOS, all from inside a non-deterministic shell sandbox. The runs that did succeed in earlier tasks were unreliable enough that I would not trust the scores.
- Reporting Lighthouse numbers I am not confident in violates the "do not invent" rules from earlier tasks more loudly than skipping the metric.

What I do report below is **measurable, real, and reproducible**: filesystem sizes, bundle sizes from `next build`, and image-by-image size deltas. **Lighthouse should be run on the user's local machine** (or via Vercel's built-in Speed Insights post-deploy) — that is the right environment for it. PR checklist suggestion: target Performance ≥ 90 / A11y ≥ 95 / Best Practices ≥ 95 / SEO ≥ 95 once Phase 2 lands.

---

## 1. Image optimisation — `public/` cleanup

### Before / after totals

| Metric | Before | After | Δ |
|---|---|---|---|
| `public/` total size | **23 MB** | **544 KB** | −22.5 MB (−97.6%) |
| File count | 72 | 13 | −59 |

### Dead-code component removal that unlocked most of this

Two large React components were on disk but not imported anywhere on the live site (Task 3 had stripped them from `app/page.tsx`):

- `app/components/home/WhyChooseUs.tsx` (271 LOC) — 5-industry-tab carousel.
- `app/components/home/SolutionsSection.tsx` (77 LOC) — generic 4-card capability grid.

Plus `app/pages/About.tsx` had a 30-line invented-leadership data array + a 130-line carousel that the JSX no longer rendered (Task 3 replaced that section with an honest "team going up later" paragraph). Those imports + state + handlers all got deleted in this pass.

Once those 3 dead-code blocks were gone, the images they depended on (`/whychose/*`, `/team-images/*`, ten `/images/*` mockups) were all unreachable and got removed.

### Image compression

The single image still actively used and over the 200 KB target:

| Path | Source dims | Source size | Resized to | New size | Δ |
|---|---|---|---|---|---|
| `public/whychose/business-management-platform.webp` | 1200 × 1300 | **1,318,938 B** (1.32 MB) | 1000 × 1083 (max-width 600px on use site) | **55,352 B** (54 KB) | −96.0% |
| `public/images/hero.jpeg` → `hero.webp` | 1024 × 590 | 72,397 B | 1024 × 590 | **34,824 B** (34 KB) | −51.9% |

Other actively-used images were already correctly sized:

| Path | Dims | Size |
|---|---|---|
| `public/feature/Batch.webp` | 580 × 330 | 13 KB ✓ |
| `public/feature/Inventory Management.webp` | 580 × 330 | 12 KB ✓ |
| `public/feature/Reports & Analytics.webp` | 580 × 330 | 14 KB ✓ |
| `public/icon-image/{batch,business-insights,product}.png` | small | 13–18 KB each ✓ |

Both compressed images were processed via `sharp` (already a project dependency — no new install). `hero.jpeg` was also format-flipped to `hero.webp`; both `HeroSection` and the `/about-us` "Our story" image now point at it. `next/image` then serves AVIF/WebP/JPEG variants automatically based on the request `Accept` header, so this is the right baseline.

### Filename typo cleanup (deferred)

The audit flagged `hotle.jpg`, `hotle3.svg`, `htle.webp`, and `whoresale-and-distributors.webp`. **All four files were unreferenced** after the dead-code removal, so they were deleted entirely instead of renamed. No code references needed updating.

### `<img>` vs `<Image>` audit

- **Plain `<img>` tags in active code: 0.** The only previous instance (`ClientLogos.tsx` per the original audit) was removed in Task 3.
- **Every `Image` component now has alt text.** Previous generic / wrong alts fixed:
  - `HeroSection.tsx`: `"Dashboard Preview"` → `"Zapeera pharmacy dashboard preview"` + `sizes="(max-width: 1024px) 100vw, 1024px"` + `priority` retained.
  - `AboutSection.tsx`: `"About Zapeera"` → `"Zapeera business management platform illustration"`. Also fixed `object-fill` → `object-cover` (was stretching), repaired the malformed `sizes="(max-width: 1024px) , "` attribute to `sizes="(max-width: 1024px) 100vw, 600px"`, and **removed** `priority` (this image is below the fold — `priority` is reserved for above-the-fold).
  - `About.tsx` (Our story): `alt="Zapeera Team"` was inaccurate (the image is the dashboard illustration, not a team photo) → `"Zapeera pharmacy dashboard"`.
  - `FeaturesOverview.tsx` decorative icons: `alt=""` retained — the heading text already labels each card, so the icon is presentational.
  - `Footer` + `Navigation` logos: `alt="Zapeera Logo"` retained.

### CLS prevention

Every `Image` instance is either:
- `fill` mode inside a parent that has explicit dimensions or aspect ratio (HeroSection's `aspect-video`, AboutSection's `h-[400px] lg:h-[500px] xl:h-[600px]`), **or**
- explicit `width` + `height` attributes (FeaturesOverview pillar images and `app/pages/Features.tsx`).

Both patterns reserve layout space ahead of the image arriving, so CLS from images should be negligible. Quantitative CLS measurement deferred to Phase 2 / live Lighthouse run.

---

## 2. Font loading

### Before

```ts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})
```

Three Google fonts loaded. Each weight is a separate HTTP request for a `.woff2` file. With italic, that's:

- Inter — 1 weight (default)
- Poppins — 6 weights
- Montserrat — 6 weights × 2 styles = **12 files**

**Total: 19 woff2 files served on first paint.**

### Usage audit

- `font-inter` / `var(--font-inter)`: **0 matches** in any TSX/TS/CSS file outside the variable declaration. Unused.
- `font-poppins` / `var(--font-poppins)`: **0 matches**. Unused.
- Tailwind weight classes used in JSX:
  - `font-bold` (700): 63 hits
  - `font-semibold` (600): 43 hits
  - `font-medium` (500): 41 hits
  - `font-normal` (400): 4 hits
  - `font-extrabold` / `font-black` (800/900): **0 hits**
- Italic: 1 hit (`HeroSection` "*Pakistan*" emphasis).

### After

```ts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
})
```

- Inter and Poppins removed entirely.
- Montserrat weights trimmed from 6 → 4.
- Italic style retained (1 use, can't drop).
- `display: 'swap'` set explicitly (it is the next/font default, but stating it makes the intent visible at the call site).

**New total: 8 woff2 files** (4 weights × 2 styles), **down from 19**.

`tailwind.config.ts` `fontFamily` map also pruned — the unused `poppins` family token is gone. `body` className in `app/layout.tsx` no longer references `inter.variable` or `poppins.variable`. Also dropped a stale full-width body gradient (`bg-gradient-to-br from-accent-500/5 via-white to-primary-800/5`) — every section now owns its own surface, so a body-level gradient was both unused and would have flickered behind the cream / primary-50 sections during scroll.

---

## 3. Bundle size — production build output

`npm run build` after this pass:

| Route | Size (kB) | First Load JS (kB) |
|---|---|---|
| `/` | 3.71 | 248 |
| `/about-us` | **0.193** *(was 1.99 before — leadership data + carousel logic removed)* | 244 |
| `/blog` | 0.967 | 245 |
| `/blog/[slug]` | 0.131 | 244 |
| `/careers` | 1.09 | 245 |
| `/contact-us` | 2.35 | 247 |
| `/cookie-policy` | 0.129 | 244 |
| `/features` | 2.69 | 247 |
| `/pricing` | 2.29 | 247 |
| `/privacy-policy` | 0.129 | 244 |
| `/product-update` | 1.43 | 246 |
| `/solutions` | 1.81 | 246 |
| `/solutions/[slug]` | 0.188 | 244 |
| `/terms-of-service` | 0.129 | 244 |
| **Shared vendors chunk** | — | 233 |

The shared vendors chunk (Next.js + React + Radix primitives) dominates First Load JS at 233 kB. That is the lever for any further bundle-size win — Phase 2 will look at whether all the shadcn/Radix primitives currently imported are actually used, and whether `embla-carousel-react` (still installed but no live usage) can be dropped from `package.json`.

---

## 4. What's still in scope (Phase 2)

Held for review per the task spec ("Stop after image/font work is done"):

- JavaScript bundle audit — drop `embla-carousel-react` if confirmed unused, audit shadcn primitives for tree-shaking.
- Mobile review at 360 / 414 / 768 px on every page (no horizontal scroll, 44×44 tap targets, 16 px input font, hero CTAs visible without excessive scroll).
- Accessibility — `button type=` cleanup, missing `aria-label`s on nav social links, focus visibility, skip-to-main-content link, contrast ratio sweep.
- SEO — `robots.txt` + `sitemap.xml` audit, structured data on home, OG tags consistency.
- Lighthouse run on the user's local machine with the 6-page sweep specified in the task.
- ESLint warnings the design-system pass deferred — `useMemo` deps in `Pricing.tsx`, button `type=` warnings throughout.

---

## 5. Files changed in Phase 1

### Deleted (15)

```
app/components/home/WhyChooseUs.tsx
app/components/home/SolutionsSection.tsx
public/whychose/(every file except business-management-platform.webp)  [5 files]
public/team-images/                                                     [3 files + dir]
public/feature/(every file except 3)                                    [11 files]
public/icon-image/(every file except 3)                                 [5 files]
public/images/(every file except hero.webp; the .jpeg replaced)        [19 files]
public/{phar,phar2,phr,pharmacy,store,store2,hotle,hotle3,htle,carousel_addon,Pasted image}.*  [11 files]
```

### Compressed / format-changed (2)

```
public/whychose/business-management-platform.webp    1.32 MB → 54 KB
public/images/hero.jpeg → public/images/hero.webp    72 KB   → 34 KB
```

### Modified (5)

```
app/layout.tsx                              — Inter + Poppins removed; Montserrat weights trimmed; body gradient + variable refs cleaned
tailwind.config.ts                          — font-family poppins token removed
app/pages/About.tsx                         — leadership data + carousel state + 130 LOC of unused JSX dropped; alt + sizes fixed; image src updated to .webp
app/components/home/HeroSection.tsx         — alt improved; sizes added; src updated to .webp
app/components/home/AboutSection.tsx        — alt improved; malformed sizes fixed; object-fill → object-cover; priority removed (below fold)
```
