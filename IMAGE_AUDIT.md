# Image Audit

**Date:** 2026-05-07
**Scope:** Every image currently in `public/` and the page/section it appears on.
**Status:** Audit only. No replacements yet — awaiting review on the recommendations at the bottom.

After Task 7 (performance) deleted 22 MB of unreferenced assets, only 12 image files remain in `public/`. This audit walks each one with a visual inspection.

---

## Inventory

| # | File | Size | Used in | Classification |
|---|---|---|---|---|
| 1 | `public/logo.png` | 95 KB | layout metadata, structured data | Brand mark — keep |
| 2 | `public/logos.png` | 57 KB | Footer, Navigation, /api email templates | Brand mark — keep functionally; tagline concern below |
| 3 | `public/favicon.ico` | n/a | layout metadata | Standard favicon — keep |
| 4 | `public/placeholder.svg` | 3 KB | (unreferenced) | shadcn utility — can delete |
| 5 | `public/images/hero.webp` | 34 KB | HeroSection, About.tsx "Our story" | Real dashboard inside **fake-office stock framing** → REPLACE |
| 6 | `public/whychose/business-management-platform.webp` | 54 KB | AboutSection (home "Why we built this") | **AI-generated/stock photo of "happy office workers"** → REPLACE / REMOVE |
| 7 | `public/feature/Batch.webp` | 13 KB | Features.tsx pillar 1 | Real product screenshot — keep, flag demo data |
| 8 | `public/feature/Inventory Management.webp` | 12 KB | Features.tsx pillar 2 | Real product screenshot — keep, flag demo data |
| 9 | `public/feature/Reports & Analytics.webp` | 14 KB | Features.tsx pillar 3 | Real product screenshot — keep, partial mismatch with feature pitch |
| 10 | `public/icon-image/batch-and-expiry-tracking.png` | 14 KB | Home FeaturesOverview card 1 | Decorative gradient illustration — replace with lucide |
| 11 | `public/icon-image/business-insights-and-dashboard.png` | 18 KB | Home FeaturesOverview card 3 | Decorative gradient illustration — replace with lucide |
| 12 | `public/icon-image/product-and-category-management.png` | 13 KB | Home FeaturesOverview card 2 | Decorative gradient illustration — replace with lucide |

---

## Per-image visual notes

### 1 / 2 / 3. Logo files — `logo.png`, `logos.png`, `favicon.ico`

The Z mark itself is a clean, on-brand glyph (blue/teal gradient, two interlocking arrows forming a stylised Z). Used consistently. **Keep.**

⚠️ **Brand concern, not copy:** the wide variant `logos.png` ships with the tagline **"ROAR SMARTER. GROW FASTER"** baked into the asset itself. This tagline is from the previous "generic SaaS" positioning and is at odds with the new pharmacy-Pakistan-first messaging. Not a blocker for this task — the wordmark renders fine without users reading the tagline carefully — but eventually the wide logo asset should be re-exported either with no tagline or with a pharmacy-aligned tagline ("Built for Pakistan" would be the natural choice). This is a brand-design decision, not something to fix in code.

### 4. `placeholder.svg`

Default shadcn placeholder graphic. **No active references** anywhere in `app/`. Recommend deleting in the cleanup commit alongside any image replacements.

### 5. `images/hero.webp` — Hero section + About "Our story"

**Real Zapeera dashboard rendered inside a stock photo of an iMac on a wooden desk with potted plants and a blurred-office background.**

The dashboard data inside is genuinely good and pharmacy-specific:
- Header: "Abdullah Pharma Dashboard" / "Overview of Abdullah Pharma's branches, revenue, users, and products"
- Metric cards: Total Revenue Rs 285, Total Sales 3, Total Products 6, All My Branches 2, All My Users 3
- "Near Expiry (2)" panel with batches: "azithro" (18 days left, 12/26/2025) and "Amoxil" (30 days left, 1/7/2026)
- "Recent Sales" panel with three rows
- "Low Stock Alert" panel ("All products are well stocked!")
- Sidebar: Dashboard / Sales / Inventory / Customers / Business Management / Reports / Zapeera / Log Out

The problem is the framing: the dashboard is laid into an iMac mockup on a desk, with a potted plant and a blurred office in the background. Per Task 9 spec verbatim:

> "Primary visual: a real, clean Zapeera dashboard screenshot on a neutral background — no fake office, no blurred environment, no laptop mockup with stock background"

This image is the exact pattern called out as forbidden.

**Recommendation:** strip the office mockup and ship just the dashboard. Two paths:
- **Best:** team re-exports the dashboard as a standalone PNG/WebP at 2x resolution, no monitor frame, no desk, no environmental backdrop. Renders inside the existing `border + shadow + rounded-2xl` card the HeroSection already wraps it in — that's all the framing the design system needs.
- **Acceptable interim:** crop the existing image to just the screen bounds (would be a slight quality hit; the screen area in the source is roughly 60% of the image so post-crop it would be ~615×390 — usable but not retina-sharp).

Same image is also used in `/about-us` "Our story" with `alt="Zapeera pharmacy dashboard"`. Per the spec's About guidance ("If no real team photo: no image at all, just confident text") my recommendation is to **drop the image from the About page entirely** and keep this asset only on the home Hero.

### 6. `whychose/business-management-platform.webp` — AboutSection ("Why we built this") on home

**This is the worst offender on the site.** It's an AI-generated / stock-style photograph of four young business people standing in what's meant to look like a tech-company office. They are smiling at the camera, holding laptops, a tablet displaying a fake "business management" dashboard, and a barcode scanner. POS terminals are arranged on counters in the foreground. A wall in the background carries a fake "Business Management Platform" infographic with circuit-board lines and floating cloud / mail / shopping-cart icons.

Per Task 9 spec, multiple times:

> "Do NOT use stock photos of 'business people' or 'happy office workers.'"
> "Do NOT use stock photos of people pretending to be the team."
> "If using stock, only use abstract or minimal stock (clean gradients, geometric shapes) — never stock photos of people or environments"

This image is precisely those forbidden categories.

**Recommendation:** **drop the image from AboutSection entirely** and let the section be a single-column "Why we built this" with the existing three Check rows ("Made in Pakistan" / "Priced for the Pakistani market" / "Built for the way you work"). This collapses the current 2-column grid to a single centred column at max-w-3xl, which is more honest, faster, and aligned with the spec's "clean typography is better than generic imagery" guidance.

If the team strongly wants imagery here, the only acceptable substitutes are:
- A real photo of the actual team (per spec: only if real)
- A small inline icon row using lucide (per spec for the "Built for Pakistan" section's preferred treatment)
- A second product screenshot — but this overlaps with the FeaturesOverview pillar images further down the same page, and would feel redundant

Recommending option 1: **drop the image**.

### 7. `feature/Batch.webp` — `/features` page pillar 1

Real Zapeera Batch Management screenshot. Clean light background, no environmental framing. Shows:
- Title bar: "Batch Management" / "Manage product batches and inventory"
- Tabs: Active Batches / Reported Batches
- Search + filter row (All Suppliers, All Manufacturers)
- Yellow "Near Expiry Medicines (3)" alert
- Batch table with columns: Batch No., Product, Supplier, Stock Quantity, Expire Date, Status, Actions
- Four rows: Healer (HEALER825868) / Bellam (BEFLAM838408) / Inocelin (LINOCC035588) / Novidate (BJ828376)
- Status pills "Active" + "Near Expiry" + "Low Stock"
- "+ Add New Batch" CTA

**Keep.** Format is correct (clean WebP, 580×330, 13 KB).

⚠️ **Demo-data flag:** the medicine names ("Healer", "Bellam", "Inocelin", "Novidate") are clearly placeholder. Per spec: *"Image must show pharmacy-specific data: medicine names like Panadol, Augmentin, Brufen with realistic PKR prices and Pakistani pharmacy context."* Recommendation: when the team can spend 10 minutes in the live app, re-capture this screen with real Pakistani brand names — Panadol, Augmentin, Brufen, Disprin, Calpol, Risek, Velosef — and realistic batch numbers. **Not blocking.** The current image still reads as authentic at first glance because the structure is correct; the names are only obvious on close inspection.

### 8. `feature/Inventory Management.webp` — `/features` pillar 2

Real Zapeera Inventory page screenshot. Clean. Shows:
- Title bar: "Inventory Management" / **"Manage your pharmacy inventory"** (the word "pharmacy" is in the live UI — good)
- Stat cards: Total Products 4, Low Stock 0, **Total Value PKR 0**, Categories 5
- Search + filter row
- Products table: Bellam, Healer, Iinocoin, Novidate. Columns: Category (tablets / capsules), Formula (diclorian, omeprazole, etc.), Price (PKR 5 / PKR 5 / PKR 15 / PKR 45), Stock (50 / 100 / 85 / 8 units)

**Keep.** PKR currency is correct in-product, which is the most important authenticity check.

⚠️ **Demo-data flags:**
- Same placeholder medicine names as Batch.webp.
- "Total Value PKR 0" is jarring on a screenshot that's meant to sell inventory tracking — suggests an empty-shop demo state.
- "Total Products 4" is too small for a real pharmacy demo.

When the team re-captures, ideal demo state: 100–300 products, real names, realistic PKR prices (medicines in Pakistan typically run Rs 8 – Rs 1,500), non-zero Total Value.

### 9. `feature/Reports & Analytics.webp` — `/features` pillar 3

Real Zapeera Reports screenshot. Clean. Shows:
- Title bar: "Reports & Analytics" / "Comprehensive insights across all your branches" + green "Live Data" pill
- Date stamp: Wednesday, October 29, 2025
- "All Branches Overview" header with "0 Branches" count (a bit odd) and "Show Details" button
- Stat cards: Total Revenue **Rs 4,209**, Total Sales 8, Total Products 4, Total Users 3
- Time-period selector: Today / **This Week** (active) / This Month / This Year
- Two charts: "Sales Trend - This Week" (bell-curve line chart) + "Profit vs Expenses" (bar chart, Jan–Dec)

**Keep.** Reads as authentic.

⚠️ **Mismatch flag — partial:** the FeaturesOverview pillar pitch is *"See which medicines actually make profit, which are dead stock, and which customers come back."* But this screenshot shows **aggregate** sales trend + profit-vs-expenses, not the **per-medicine** profit ranking the headline promises. Not wrong, just not the sharpest possible match.

If the live product has a "Profit by Medicine" or "Top Products" view, that would be the ideal replacement. If it doesn't, leaving this as-is is fine — the screenshot still demonstrates "reports exist" credibly.

### 10 / 11 / 12. `icon-image/*.png` — Home FeaturesOverview card icons

Three gradient line-illustration icons used at the top of each FeaturesOverview card on the home page:
- `batch-and-expiry-tracking.png` — clipboard with checkmarks + cardboard boxes with arrows
- `business-insights-and-dashboard.png` — bar chart + line chart + magnifying glass
- `product-and-category-management.png` — list with bullet points + 3 thumbnail boxes

They share a consistent style (blue→teal gradient, line-only, no fill, ~96×96 px display size).

**Inconsistency call-out:** these are from a different icon set than the one used everywhere else on the site. The `/features` page (Features.tsx) renders the **same three pillars** with `lucide-react` icons (`Calendar` for expiry, `Boxes` for inventory, `BarChart3` for reports). So a user navigating Home → Features sees the *same conceptual feature* with two different icon styles back-to-back. This is the exact "mismatched icon set" failure the spec calls out.

Per Task 9 spec verbatim:
> "Icon — keep if from lucide-react or similar consistent icon set, replace if mismatched"

**Recommendation:** replace these three .png illustrations with lucide-react icons matching the /features page exactly:
- `Calendar` → expiry tracking
- `Boxes` → inventory management
- `BarChart3` → reports

This drops the entire `public/icon-image/` folder, removes 3 image requests from the home page, and makes the icon system consistent across the site.

---

## Pages with image gaps (per Task 9 spec)

These pages **should** have specific imagery per the spec but currently don't.

### `/` Hero section

Spec asks for: a clean Zapeera dashboard screenshot on a neutral background, with pharmacy-specific data (Panadol, Augmentin, Brufen visible).

Currently has: the office-framed `hero.webp` (item 5 above) — needs the office framing stripped.

**Gap:** needs a re-export of the dashboard from the team without the iMac mockup. Real medicine names in the demo data would be ideal but not required.

### `/solutions/pharmacy`

Spec asks for: *"One full-bleed screenshot at top of the page"* + *"real product screenshots showing pharmacy-specific use cases"*.

Currently has: zero images. The page (rebuilt in Task 3 extension) is text + bullet lists only.

**Gap:** the team needs to supply at least one strong full-bleed pharmacy screenshot for the hero of this page. The 3 existing /feature/*.webp screenshots could be reused below the hero to show specific use cases.

### `/about-us`

The page references `/images/hero.webp` for "Our story". Per spec, since there is no real team photo, the recommendation is to **drop this image entirely** and let the page be text-driven.

---

## Recommendations summary — what would change in the replacement commit(s)

| Asset / Location | Action | Blocks on |
|---|---|---|
| `public/placeholder.svg` | Delete (unreferenced) | — |
| `public/icon-image/*.png` (3 files) | Delete folder; switch home FeaturesOverview to lucide `Calendar` / `Boxes` / `BarChart3` | — |
| `public/whychose/business-management-platform.webp` | Delete; remove image slot from AboutSection JSX; collapse to single-column text layout at `max-w-3xl` | — |
| `public/images/hero.webp` (in About "Our story") | Remove image from About page; section becomes text-only | — |
| `public/images/hero.webp` (in HeroSection) | Replace with clean dashboard export. Interim: crop existing image to screen bounds. Best: team re-exports without monitor frame | **Team-supplied screenshot** for the best version |
| `public/feature/Batch.webp` | Re-capture with real Pakistani medicine names (Panadol, Augmentin, etc.) and realistic batch numbers | **Team-supplied screenshot** |
| `public/feature/Inventory Management.webp` | Re-capture with real names + realistic Total Value (>Rs 0) + ~100+ products | **Team-supplied screenshot** |
| `public/feature/Reports & Analytics.webp` | Optional re-capture if a "Profit by Medicine" view exists in the live app; otherwise keep | **Team-supplied screenshot, optional** |
| `public/logos.png` | Keep functionally. Flag tagline "ROAR SMARTER. GROW FASTER" as a brand-design concern; the wordmark is fine | **Brand decision** |
| `/solutions/pharmacy` page (no current asset) | Add a hero screenshot block once team supplies the asset | **Team-supplied screenshot** |

---

## What I would do without team input — minimum-viable-improvements pass

These five changes are pure code work and need nothing from the team:

1. **Delete `public/placeholder.svg`** (orphaned).
2. **Delete `public/whychose/business-management-platform.webp`** + remove the left-image grid from AboutSection. Section becomes a single-column "Why we built this" with the three existing Check rows.
3. **Delete `public/icon-image/`** + replace the 3 home FeaturesOverview icons with lucide `Calendar` / `Boxes` / `BarChart3` (same icons /features uses for the same three pillars).
4. **Remove the "Our story" image from `/about-us`**; section becomes text-only.
5. **Crop `public/images/hero.webp`** to just the dashboard area (drops the iMac frame, the desk, and the office). This is interim until the team can supply a clean re-export. The current 1024×590 image has the screen at roughly the centre 60% × 75% — post-crop dims would be ~615×440, smaller than ideal but closer to spec.

The hero still benefits the most from a team-supplied retina-sharp dashboard PNG — that's the one screenshot worth doing properly. Everything else can be code-only fixes.

---

## What I am asking before I touch anything

1. **AboutSection image (the four office workers):** confirm "drop the image entirely, single-column text" is the move. If you want a different alternative (a real product screenshot here, or a real team photo), let me know.
2. **Hero `hero.webp`:** OK with the interim crop while the team prepares a clean dashboard export? Or wait for the clean export and leave hero as-is for now?
3. **Home FeaturesOverview icons:** OK with switching to lucide `Calendar` / `Boxes` / `BarChart3` to match `/features`?
4. **About page "Our story" image:** OK with dropping it, text-only?
5. **Demo data on the three feature screenshots** (Healer / Bellam / Inocelin etc.): on your team's roadmap to refresh, or should I add a TODO note in the deliverable for engineering?

Standing by for the call before I proceed to the replacement / spacing / colour passes.
