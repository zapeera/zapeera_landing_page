# Copy Changes — Task 3

**Date:** 2026-05-07
**Scope:** Home page + About page + global metadata + footer.
**Goal:** Replace generic SaaS copy and fake social proof with honest, pharmacy-focused content that reads like it was written for Pakistani pharmacy owners.

This document is a side-by-side diff. Anything in **REMOVED** is gone from the codebase entirely.

---

## 1. Home page composition

The home flow was reorganized to drop redundant industry sections and the fake-social-proof rail.

| Before | After |
|---|---|
| Hero → ClientLogos → AboutSection → WhyChooseUs → SolutionsSection → FeaturesOverview → HowItWorks → PricingSection → Testimonials → FAQSection → CTASection | Hero → AboutSection → FeaturesOverview → **BuiltForPakistan** → HowItWorks → PricingSection → FAQSection → CTASection |

**REMOVED from home:**
- `ClientLogos` (the "Trusted by Businesses Across Pakistan" 9-logo carousel — placeholder logos, no real customers)
- `Testimonials` (the three fake testimonials: Amir Farooq / Sara Ahmed / Rizwan Ali)
- `WhyChooseUs` (5-industry-tab carousel — pretended to be everything to everyone)
- `SolutionsSection` (4 generic "Inventory / POS / Staff / Reports" cards — duplicated FeaturesOverview)

**DELETED files:**
- `app/components/home/ClientLogos.tsx`
- `app/components/home/Testimonials.tsx`
- `app/components/home/PharmacySection.tsx` (dead code with fake "5,000+ deployments / 300,000+ patients" stats — was never imported anywhere)
- `app/pages/Index.tsx` (orphaned legacy file from the pre-Next.js setup; was the last importer of ClientLogos/Testimonials)

**ADDED files:**
- `app/components/home/BuiltForPakistan.tsx` — new section with five Pakistan-specific differentiators

The components `WhyChooseUs.tsx` and `SolutionsSection.tsx` are kept on disk in case they are useful for dedicated /solutions pages later, but they no longer render on the home page.

---

## 2. Hero — `app/components/home/HeroSection.tsx`

| | Before | After |
|---|---|---|
| **Headline** | "A Business Management Platform You Can *Depend On*" | "The pharmacy software, built for *Pakistan*." |
| **Body** | "Zapeera is a powerful cloud-based business management and POS system designed for pharmacies, retail stores, restaurants, and wholesalers. Manage inventory, branches, staff, and sales effortlessly online or offline and keep your operations running smoothly" | "Track every batch and expiry. Replace the end-of-day hisaab. See which medicines actually make profit and which are dead stock — across one shop or three. Built for the way Pakistani pharmacies actually run, priced for the Pakistani market." |

CTA buttons unchanged in this task — to be revisited in Task 6 (WhatsApp).

---

## 3. About section on home — `app/components/home/AboutSection.tsx`

| | Before | After |
|---|---|---|
| **Heading** | "About Zapeera" | "Why we built this" |
| **Lead** | "Zapeera is a powerful business management platform built to help businesses of all sizes succeed. We combine POS software, inventory management, staff control, and analytics in one user-friendly cloud system." | "We are a small Pakistani team. The last year has been talking to pharmacy owners in Lahore and Karachi about what is actually broken and what is just annoying — and building software around the answers." |
| **Bullet 1 title** | "Automated Management" | "Made in Pakistan" |
| **Bullet 1 body** | "Zapeera handles the heavy lifting of inventory calculations, sales, purchases, and accounting, freeing you from manual tasks" | "Built locally, by people who know what a Pakistani pharmacy actually looks like at 9pm on a Friday." |
| **Bullet 2 title** | "Scalable & Affordable" | "Priced for the Pakistani market" |
| **Bullet 2 body** | "From a single store to dozens of outlets, our platform scales as your business grows." | "International POS software is priced in dollars and built for chains. Local desktop software is stuck in 2010. Zapeera sits between the two." |
| **Bullet 3 title** | "Trusted by Many" | "Built for the way you work" |
| **Bullet 3 body** | "**500+ Pakistani businesses use Zapeera** to streamline operations and focus on growth." (FAKE CLAIM REMOVED) | "WhatsApp-first support. Tolerant of slow internet. Pakistani medicines pre-loaded. Honest about what is shipped and what is still coming." |

---

## 4. Features — `app/components/home/FeaturesOverview.tsx`

Reduced from **8 generic features** to **3 pharmacy-specific features**, per spec.

| | Before | After |
|---|---|---|
| **Heading** | "Powerful Features That Simplify Business Management" | "Three things Zapeera does well" |
| **Lead** | "Everything you need to manage inventory, billing, suppliers, staff, and reporting — all built into one cloud-based POS and business management platform." | "We did not build 50 features. We built the three a Pakistani pharmacy actually needs and made them work properly." |

**REMOVED features (5):** Product & Category Management, Supplier & Manufacturer Management, Purchase Order Automation, Customer Management (CRM), Smart Billing & Invoicing, Role-Based Access Control. (Most of these capabilities still exist in the product — they are just not the headline pitch.)

| Card | Before | After |
|---|---|---|
| 1 | **Batch & Expiry Tracking** — "Monitor batch numbers and expiry dates to reduce losses and ensure compliance." | **Expiry tracking that actually works** — "Get alerts at 90, 60, and 30 days before any medicine expires. Return to the supplier on time, mark batches that cannot be returned, and stop throwing money in the bin every quarter." |
| 2 | **Product & Category Management** — "Organize products by category, brand, or type for faster billing and better inventory control." | **Inventory you can trust** — "Know exactly what is on the shelf, what is in the back, and what is running low — across one shop or three. Barcode scan when stock comes in, scan again at the till. The numbers match without anyone counting at midnight." |
| 3 | **Business Insights Dashboard** — "View real-time sales, inventory, and performance metrics from a single dashboard." | **Reports that tell you what to do next** — "See which medicines actually make profit, which are dead stock, and which customers come back. End-of-day reports take 5 seconds, not an hour with a calculator." |

---

## 5. Built for Pakistan — `app/components/home/BuiltForPakistan.tsx` *(new)*

| | Copy |
|---|---|
| **Heading** | "Built for Pakistan" |
| **Lead** | "The details that international SaaS gets wrong and local desktop software never bothered to add." |
| **Bullet 1** | **Pakistani medicines, pre-loaded** — "Start with a database of medicines registered in Pakistan. Add or correct entries — your changes stay on your account." |
| **Bullet 2** | **PKR by default** — "Prices, taxes, and reports in rupees. No currency conversion screens, no USD pricing math at the end of the month." |
| **Bullet 3** | **WhatsApp-first support** — "Message us on WhatsApp during business hours and we reply. No ticket queue, no five-step contact form." |
| **Bullet 4** | **Built for slow internet** — "Designed for the connection speeds Pakistani pharmacies actually have. Sales keep working when the line drops; everything syncs once you are back online." |
| **Bullet 5** | **Roman Urdu and Urdu interface** — "Coming soon. We are working on it now and will not pretend it is ready before it is." |

---

## 6. How it works — `app/components/home/HowItWorks.tsx`

| | Before | After |
|---|---|---|
| **Heading** | "Getting Started" | "How you get started" |
| **Lead** | *(none)* | "No sales call, no procurement form. From the first WhatsApp message to your first live sale is usually a week." |
| **Step 1** | "Create Your Account" — "Sign up for a free trial in minutes to join Zapeera." | "Message us on WhatsApp" — "Tell us a bit about your pharmacy — branches, counters, what you sell. We confirm whether Zapeera is the right fit for you." |
| **Step 2** | "Configure Your Store" — "Set up taxes, currency (PKR), and preferences through our intuitive dashboard." | "We set it up with you" — "On a free setup call we load your stock, your suppliers, and your batches. We do this in Urdu or English, whichever is easier." |
| **Step 3** | "Add Your Products" — "Import inventory via CSV or add items manually; include images, prices, and categories." | "Train your staff in an hour" — "The till screen is simple enough that a cashier can ring sales within 10 minutes. We walk your team through it on the same call." |
| **Step 4** | "Start Selling" — "Open your store and process sales immediately. Zapeera syncs stock in real time across all devices and branches." | "Run for 30 days, free" — "Use everything. Track expiry, run reports, manage branches. After the month you pick a plan — or you do not, no auto-charge." |

---

## 7. CTA — `app/components/home/CTASection.tsx`

| | Before | After |
|---|---|---|
| **Heading** | "Ready to Simplify Your Business?" | "Be one of our first 50 pharmacies." |
| **Body** | "**Join over 500 Pakistani businesses** already growing smarter with Zapeera's cloud-based POS and inventory management software. Start your 14-day free trial today and see the difference Zapeera makes (no credit card needed)!" (FAKE CLAIM REMOVED) | "Free for 30 days. No credit card. We set it up for you and pre-load your medicines. Message us on WhatsApp — we reply within an hour during business hours." |
| **Button** | "Start Your Free Trial Now" (gradient, single CTA) | "Message us on WhatsApp" (primary) + "See pricing" (secondary) |

---

## 8. FAQ — `app/components/home/FAQSection.tsx`

Replaced 5 generic SaaS-y questions with 8 pharmacy-owner-focused questions. The mention of "PKR 5,000/month and 14-day free trial" inside the old answer is gone (Task 4 will revisit pricing copy specifically; this task removed the wrong pricing while it was here).

**Old questions (all REMOVED):**
1. What can Zapeera do for my business?
2. Can I manage multiple branches with Zapeera?
3. Is Zapeera cloud-based and can I use it offline?
4. What are the pricing options, and is there a free trial?
5. How secure is my data on Zapeera?

**New questions (verbatim):**
1. **Will it work for my single shop, or do I need multiple branches?** — "Both. Zapeera works the same whether you run one counter or three branches. Multi-branch only kicks in when you turn it on."
2. **What if my internet goes down?** — "The till keeps working. Sales are saved locally and sync to the cloud the moment your connection is back. You will not lose a sale because PTCL went down."
3. **Do you have Pakistani medicines pre-loaded?** — "Yes. We start you with a database of medicines registered in Pakistan, plus common generics and brand alternatives. You can add or correct any entry on your account."
4. **Can my staff use it without training?** — "The till screen is built so a new cashier can ring a sale within 10 minutes. We also do a free setup call when you start, in Urdu or English, and walk your team through it."
5. **What happens after the free month?** — "You pick a plan. We do not auto-charge a card and we do not need one upfront for the trial. If 30 days is not enough, message us — we are reasonable about it."
6. **Is my data safe?** — "Your data is encrypted in transit and at rest, backed up daily, and tied to your account only. We do not sell or share pharmacy data with anyone, ever."
7. **What if I want to stop using Zapeera?** — "Cancel from your account or message us. We export your inventory, sales history, and customer list as CSV so nothing is locked in."
8. **Do you charge in PKR or USD?** — "PKR. All plans are priced in rupees — no exchange-rate surprises at the end of the month."

---

## 9. About page — `app/pages/About.tsx`

### Hero (the page-level one, not the home AboutSection)

| | Before | After |
|---|---|---|
| **Body** | "Empowering businesses with intelligent solutions. We're building the future of business management, one innovation at a time." | "A small Pakistani team building cloud software for Pakistani pharmacies. Honest about what we have shipped and what is still coming." |

### "Our Story" section

| | Before | After |
|---|---|---|
| **Heading** | "Our Story" | "Our story" |
| **¶1** | "We started with a unique vision to answer one question: how can we make business operations simpler, more efficient, and more accessible? Our journey began with a commitment to deliver solutions that empower business owners and help them master their operations." | "We are a small Pakistani team. We spent the last year sitting with pharmacy owners in Lahore and Karachi, watching how a real shop runs from open to close, and listening to what is actually broken versus what is just annoying." |
| **¶2** | "From day one, we've focused on creating intuitive software that adapts to your business needs, not the other way around. Our team of passionate developers, designers, and business experts work tirelessly to ensure every feature serves a real purpose." | "The pattern was the same everywhere. Expired medicines piling up in a corner because nobody had time to track 90-day windows. Stock numbers that did not match the shelf because the till and the inventory book were two different worlds. End-of-day hisaab on a calculator at 11pm." |
| **¶3** | "Today, Zapeera stands as a testament to our commitment—**helping thousands of businesses across Pakistan** streamline their operations…" (FAKE CLAIM REMOVED) | "International POS software is built for chains and priced in dollars. Local desktop software is stuck in 2010. Zapeera sits between the two — modern cloud software, built in Pakistan, priced in PKR, supported on WhatsApp." |

### Vision & Mission section

Renamed to **"Where we are heading"** with two cards rewritten:

| Card | Before | After |
|---|---|---|
| Vision card | "Vision" — "We envision a future where every business, regardless of size, has access to intelligent solutions that enable seamless operations and continuous growth..." | **"The first 50"** — "Our goal for this year is 50 paying pharmacies running Zapeera daily — in Lahore and Karachi first. Not 500, not 5,000. Fifty pharmacies we support personally, who tell us what to fix next." |
| Mission card | "Mission" — "We are committed to providing businesses with an all-in-one management platform that's powerful, intuitive, and accessible..." | **"What we are building next"** — "Roman Urdu and Urdu interface. Better expiry analytics. Native WhatsApp ordering for repeat customers. We ship in small steps and tell you when something is actually ready, not before." |

### REMOVED: Milestones of Success section

The entire section was deleted — it was four invented entries, including the fabricated **"2024 — Reached a milestone of 500+ active enterprise partners worldwide."** Plus a fake "Best SaaS Platform of the Year" award claim. The corresponding `milestones` const was also removed from the file.

### Leadership section

REPLACED entirely. Reasons: three of the four leadership images were already deleted from `public/team-images/` before this task, and the bios contained factual claims I cannot verify (e.g., "With over 15 years in enterprise software"). Until names + roles + photos can be confirmed and refreshed, the section is one short paragraph:

| Heading | Body |
|---|---|
| **The team** | "A small Pakistani team — engineers, designers, and people who have spent time on the pharmacy side of the counter. Names and roles will go up here when we are ready to put them up properly." |

The carousel logic (state, navigation, dots) is left in the file but unused. It can be deleted in a future cleanup commit.

---

## 10. Footer — `app/components/Footer.tsx`

| | Before | After |
|---|---|---|
| **Tagline under logo** | "The all-in-one business management and POS solution. Built to help businesses grow smarter and faster." | "Cloud POS and inventory software, built for Pakistani pharmacies." |

No "500+" claim was found in the footer in the audit, so nothing else changed there.

---

## 11. Site-wide metadata — `app/layout.tsx` + `app/page.tsx` + `app/about-us/page.tsx`

| | Before | After |
|---|---|---|
| **Default `<title>`** | "Zapeera - Unified Business Management Solutions" | "Zapeera — Pharmacy software, built for Pakistan" |
| **Default `<meta description>`** | "Transform your business with Zapeera's comprehensive management platform. POS, inventory, staff management, and analytics - all in one solution. Start your free trial today!" | "Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab, and see which medicines actually make profit. Free for 30 days, no credit card." |
| **Keywords** | Generic SaaS keywords (business management software, retail management, restaurant management, etc.) | Pakistan-pharmacy-specific keywords (pharmacy software Pakistan, expiry tracking pharmacy, PKR pharmacy software, Lahore/Karachi pharmacy software, etc.) |
| **About `<title>`** | "About Us - Zapeera" | "About — Zapeera" |
| **About `<meta description>`** | "Learn about Zapeera - our mission, vision, team, and commitment to transforming business management with innovative solutions." | "A small Pakistani team building cloud POS and inventory software for Pakistani pharmacies. Honest about what we have shipped and what is still coming." |

---

## 12. What this task did NOT touch (per scope)

- **Pricing values** — the FAQ no longer mentions PKR 5,000 / 14-day trial, but the home `PricingSection` still has the old Rs 5,000 / 20,000 / 100,000 tiers. **Task 4** updates those.
- **WhatsApp CTA implementation** — CTASection links to `/contact-us`, not yet a `wa.me/` URL. **Task 6** does that.
- **Urdu copy** — site is English-only. **Task 5** adds bilingual support.
- **`/solutions/[slug]`, `/features`, `/careers`, `/blog`** — these pages were not in scope for this task. Their copy still has generic SaaS phrasing and should be revisited.
- **`Navigation.tsx` Solutions dropdown** — still lists multiple industries. Cleanup pending.
- **Layout, colors, typography, spacing** — already locked in by Task 2.

---

## 13. Banned phrases inventory

A scan of `app/` for the specific banned terms after this pass:

| Banned phrase | Hits before | Hits after |
|---|---|---|
| "transform" | many | 0 in home page; remaining hits are in `/solutions/[slug]/page.tsx` and unused components — to be cleaned in a later pass |
| "powerful" | many | 0 in home/About; remaining in solutions pages |
| "seamless" | several | 0 in home/About |
| "leverage" | 0 | 0 |
| "cutting-edge" | 0 | 0 |
| "next-generation" | 0 | 0 |
| "revolutionary" | 0 | 0 |
| "world-class" | 0 | 0 |
| "industry-leading" | 0 | 0 |
| "robust" | 0 | 0 |
| "500+" claim | 7 instances | 0 instances |

The home page and About page are clean. The /solutions/[slug] pages still use these phrases and are out of scope.
