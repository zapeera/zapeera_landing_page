# Zapeera Design System

**Last updated:** 2026-05-07 (Task 2 — design system consistency pass)
**Source of truth:** [tailwind.config.ts](tailwind.config.ts) + [app/globals.css](app/globals.css)

This document describes the design tokens and rules that every page and component must follow. If you find yourself reaching for a hex literal, an inline `style` prop, or a `[Npx]` arbitrary value, stop and use a token below instead.

---

## 1. Color palette

### Primary — deep professional blue
The brand color. Use for headings, links, decorative surfaces, secondary buttons, and anywhere "this is Zapeera" needs to read.

| Token | Hex | Usage |
|---|---|---|
| `primary-50` | `#EEF2FF` | Section backgrounds, subtle surfaces |
| `primary-100` | `#E0E7FF` | Hover states on light surfaces, footer social tiles |
| `primary-200` | `#C7D2FE` | Borders on muted surfaces |
| `primary-300` | `#A5B4FC` | Disabled-state primary, dividers |
| `primary-400` | `#6B82F0` | (Reserved) |
| `primary-500` | `#3D5BE0` | (Reserved) |
| **`primary-600`** | **`#1947C4`** | **Brand base** — most icons, accents, secondary-button border/text |
| `primary-700` | `#1732BD` | Hover for primary-600 |
| `primary-800` | `#0C2C8A` | Headings on light, dark surfaces, gradient deep stop |
| `primary-900` | `#081E5E` | (Reserved) |
| `primary-950` | `#040F35` | (Reserved) |

**Why this scale:** anchored on `#1947C4` because it was the most-used existing brand blue (44 occurrences pre-refactor). `primary-800` (`#0C2C8A`) preserves the existing deep-blue heading color. The result keeps brand recognition intact while imposing a consistent scale.

### Accent — teal (CTA only)
**Reserved exclusively for primary CTAs.** Do not use for borders, decorative shapes, or section backgrounds. If you find yourself reaching for `bg-accent-*` outside of a `<Button variant="primary">`, you are using the wrong token.

| Token | Hex |
|---|---|
| `accent-50` | `#E9FAF9` |
| `accent-100` | `#CFF5F2` |
| `accent-200` | `#A0EBE7` |
| `accent-300` | `#6FDFDA` |
| `accent-400` | `#29CDCF` |
| **`accent-500`** | **`#26D2C6`** — CTA fill |
| `accent-600` | `#1FA8A0` — CTA hover |
| `accent-700` | `#178079` — CTA active |
| `accent-800` | `#105A55` |
| `accent-900` | `#093834` |

### Neutral gray scale (slate-toned)
Use `neutral-*` for body text, borders, and surfaces. Tailwind's default `gray-*` palette is also available but `neutral-*` is preferred on new code.

| Token | Hex |
|---|---|
| `neutral-50` | `#F8FAFC` |
| `neutral-100` | `#F1F5F9` |
| `neutral-200` | `#E2E8F0` |
| `neutral-300` | `#CBD5E1` |
| `neutral-400` | `#94A3B8` |
| `neutral-500` | `#64748B` |
| `neutral-600` | `#475569` (default body text on light) |
| `neutral-700` | `#334155` |
| `neutral-800` | `#1E293B` |
| `neutral-900` | `#0F172A` (default heading text) |

### Semantic colors

| Family | 50 | 500 | 600 | 700 |
|---|---|---|---|---|
| `success` | `#ECFDF5` | `#10B981` | `#059669` | `#047857` |
| `warning` | `#FFFBEB` | `#F59E0B` | `#D97706` | `#B45309` |
| `error` | `#FEF2F2` | `#EF4444` | `#DC2626` | `#B91C1C` |
| `info` | `#EFF6FF` | `#3B82F6` | `#2563EB` | `#1D4ED8` |

### CSS variable bridges (shadcn/ui)
The shadcn primitives (`Card`, `Dialog`, etc.) read these CSS variables defined in [app/globals.css](app/globals.css). They are aligned with the scale above:

- `--primary` ≡ `primary-600`
- `--accent` ≡ `accent-500`
- `--background` ≡ white / `neutral-900` (dark)
- `--foreground` ≡ `neutral-900` / `neutral-50` (dark)
- `--border` ≡ `neutral-200`
- `--ring` ≡ `primary-600`

Don't define new CSS vars for colors. Add a Tailwind token instead.

---

## 2. Typography

Single font family: **Montserrat** (already loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx)).

### Type scale tokens

Use these on every text element. Each token bakes in the correct size, line-height, and weight.

| Token | Size (clamped) | Weight | Use |
|---|---|---|---|
| `text-display` | 40 → 60px | 700 | Hero headline, marquee statements |
| `text-h1` | 32 → 48px | 700 | Page H1 |
| `text-h2` | 28 → 36px | 600 | Section H2 |
| `text-h3` | 22 → 28px | 600 | Card title, sub-section |
| `text-h4` | 20px | 600 | Inline H4, list-item title |
| `text-body-lg` | 18px / 1.6 | 400 | Lead paragraph, hero subheading |
| `text-body` | 16px / 1.6 | 400 | Default body |
| `text-body-sm` | 14px / 1.5 | 400 | Caption, secondary label |
| `text-caption` | 12px / 1.4 | 400 | Smallest meta text |

Same hierarchy must look the same across every page. Don't override sizes inline (`text-[28px]`, `text-3xl`, etc.).

The legacy utility classes (`.section-heading-h1`, `.section-heading`, `.section-paragraph`, `.card-heading`) are retained for backward compatibility but now compose the tokens above. Prefer raw `text-*` tokens on new code.

Raw `<h1>`–`<h4>` elements automatically pick up the right styles via `@layer base` rules in [app/globals.css](app/globals.css).

---

## 3. Spacing

The 4px Tailwind base scale is the canonical spacing source. Use Tailwind defaults (`p-4`, `mb-6`, `gap-3`, …) — do not write `mt-[20px]`.

### Section vertical rhythm
**Standard: `py-12 md:py-24`** (48px mobile / 96px ≥ md). Already wrapped by the [Section](app/components/ui/section.tsx) component (`spacing="md"` default). Use `spacing="sm"` for short legal pages, `spacing="lg"` only for true breathing-room marquee sections.

Also exposed as the named CSS-var spacing token `py-section-y` (`clamp(3rem, 6vw, 6rem)`) for one-off uses.

### Container max-width
**Canonical: `max-w-content` (1280px).** This is the default in `<Container size="xl">`. Don't use `max-w-7xl`/`max-w-6xl` mixed in the same area unless a section has a deliberate narrow constraint (e.g. legal copy at `max-w-3xl`).

### Container horizontal padding
`px-4 sm:px-6 lg:px-8` is the canonical gutter. The Container component applies it via `padding="md"`.

---

## 4. Border radius

| Token | Value |
|---|---|
| `rounded-sm` | 4px |
| `rounded-md` | 8px |
| `rounded-lg` | **12px (default — `--radius`)** |
| `rounded-xl` | 16px |
| `rounded-2xl` | 24px |
| `rounded-full` | pill / circle |

Cards: `rounded-lg`. Hero/feature surfaces: `rounded-2xl`. Buttons: `rounded-lg`. Avatars/pills: `rounded-full`.

---

## 5. Shadows

| Token | Effect |
|---|---|
| `shadow-sm` | Card resting state |
| `shadow-md` | Card hover, dropdown, popover |
| `shadow-lg` | Modal, sheet, floating CTA |
| `shadow-xl` | Hero feature card / spotlight |

Defined with a slate-900 base (`rgb(15 23 42 / …)`) so they read correctly on the brand blue family.

---

## 6. Buttons — only two variants

Implementation: [app/components/ui/button.tsx](app/components/ui/button.tsx)

```tsx
<Button variant="primary" size="md">Start free trial</Button>
<Button variant="secondary" size="md">Learn more</Button>
```

| Variant | Rule |
|---|---|
| `primary` | Filled accent (teal). **Used for the single most important CTA on the screen.** Never have two of these visible simultaneously above the fold. |
| `secondary` | Outlined `primary-600` border + text. Used for everything else (nav links rendered as buttons, tertiary actions, modals' Cancel buttons, etc.). |

Sizes: `sm` / **`md` (default)** / `lg`. Use `lg` only on the hero CTA.

Legacy variants (`default`, `outline`, `ghost`, `link`, `destructive`) and the legacy size `default` are aliased to map onto the two-variant system, so existing call sites keep rendering. **New code must use `primary` or `secondary`.**

Any custom-styled `<button>` or anchor-styled-as-button violates the design system. Use the `<Button>` component (with `asChild` + `<Link>` if it's a navigation action).

---

## 7. Layout primitives

| Component | Path | Purpose |
|---|---|---|
| `<Container>` | [app/components/ui/container.tsx](app/components/ui/container.tsx) | Centered max-width wrapper. Default `size="xl"` (1280px) + `padding="md"`. |
| `<Section>` | [app/components/ui/section.tsx](app/components/ui/section.tsx) | Full-width `<section>` with consistent vertical padding + tone. Wraps a Container. |
| `<Card>` | [app/components/ui/card.tsx](app/components/ui/card.tsx) | Token-driven (`bg-card`, `rounded-lg`, `shadow-sm`). Already clean; do not restyle inline. |

Section tones: `default` (white), `muted` (`neutral-50`), `subtle` (`primary-50`), `primary` (dark blue, white text).

---

## 8. Decisions made in this pass (Task 2)

1. **Anchored primary on `#1947C4`**, not on a fresh palette. Rationale: it was the dominant existing brand blue (44 occurrences), so users won't perceive a brand shift. Healthcare/pharmacy positioning is preserved by pairing with teal accent.
2. **Reserved teal exclusively for CTA**. Previously teal appeared as decorative gradient stops everywhere; now it's the visual signal of "this is the primary action." This concentrates attention.
3. **Two button variants only.** All legacy variants are aliased rather than removed, to avoid breaking 60+ shadcn primitives that import `buttonVariants`.
4. **Container default upgraded to `size="xl"`** (was `lg`) so all callers without an explicit size land on the canonical 1280px max-width.
5. **Removed Swiper.** Both Swiper and embla-carousel-react were installed but neither was actually imported in any active component. Swiper had only dead CSS in `globals.css`; embla is wired into the shadcn `carousel.tsx` primitive (kept for future use).
6. **Collapsed `/blogs` → `/blog`** with a permanent (301) redirect in [next.config.js](next.config.js). The duplicate `app/blogs/` directory was removed.
7. **Fixed `min-h-[90h]`** invalid CSS unit in HeroSection — replaced the entire weird sizing chain with `min-h-screen pt-12`.
8. **Extracted two duplicated radial gradients** (hero-glow + dotted-texture) from JSX into named utility classes (`.bg-hero-glow`, `.bg-dotted-texture`) in `globals.css`, so the rgba values live in one place rather than being inline-stringified across two pages.

---

## 9. What this pass did NOT touch (per scope)

Out of scope for Task 2 — handled later:

- Body copy, headlines, fake testimonials, "500+" claim → **Task 3**
- Pricing values (Rs 5,000 / 20,000 / 100,000 → new tiers) → **Task 4**
- i18n / Urdu default / RTL / `next-intl` → **Task 5**
- WhatsApp CTA migration → **Task 6**
- Image optimization, Lighthouse, mobile QA, a11y warnings → **Task 7**

Pre-existing bugs that surfaced during this pass but were left alone:
- React-hooks ESLint warnings in `app/pages/Blog.tsx` and `app/pages/Pricing.tsx`
- A11y warnings (button `type=` missing, link `title=` missing) in Footer / WhyChooseUs / Navigation
- API route security (no rate limiting / CAPTCHA, no resume MIME validation)

---

## 10. Quick reference for new code

```tsx
// Section + Container
<Section tone="subtle" spacing="md">
  <h2 className="text-h2 text-neutral-900 mb-4">Section title</h2>
  <p className="text-body-lg text-neutral-600 max-w-3xl">Lead paragraph.</p>
</Section>

// Buttons
<Button variant="primary" size="lg">Start free trial</Button>
<Button variant="secondary" size="md" asChild>
  <Link href="/features">See features</Link>
</Button>

// Card
<Card className="p-6 hover:shadow-md transition-shadow">
  <h3 className="text-h3 mb-2">Card title</h3>
  <p className="text-body text-neutral-600">Body text.</p>
</Card>
```

Anything outside this vocabulary needs justification.
