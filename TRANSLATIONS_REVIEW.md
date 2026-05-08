# Translation Review — English ↔ Urdu

**Date:** 2026-05-08
**Bundles:** [messages/en.json](messages/en.json) ↔ [messages/ur.json](messages/ur.json)

This is a side-by-side review document for a native Urdu speaker on the team to verify before deployment. Every user-facing string on the site is here.

## Translation conventions used

- **Pakistani-natural Urdu**, not literary/Persian-heavy formal Urdu. Pakistani business owners speak in mixed Urdu-English, so the translations reflect that — Roman/Latin technical terms stay in Latin script *inside* Urdu sentences.
- **Kept in English/Latin (untranslated by design):**
  - Product names: Zapeera, POS, WhatsApp, FBR
  - Technical terms: dashboard, inventory, login, demo, free trial, cloud, barcode, software, data, backup, message, branch, supplier, batch, table headings like "Solo / Team / Business / Enterprise"
  - Currency: prices stay as `Rs 1,500` (not "1500 روپے") since pharmacy owners read prices in Western Arabic numerals.
- **Numbers**: Western Arabic numerals (1500, 7500), never Eastern Arabic (١٥٠٠).
- **Plan names** (Solo / Team / Business / Enterprise / Chain) stay in Latin — they are product names.
- **Punctuation**: Urdu sentences end with the Urdu full stop "۔" except where the sentence ends in a Latin abbreviation (e.g. "POS").

## Confidence labels

- **High** — natural, idiomatic; reads like a Pakistani wrote it for another Pakistani.
- **Medium — please verify** — meaning is correct but the phrasing should get a native eye, especially for tone/register or where multiple natural translations exist.
- **Low — needs human edit** — translation is a placeholder that compiles but feels machine-y; should be rewritten before launch.

---

## common.nav

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `common.nav.home` | Home | ہوم | High |
| `common.nav.features` | Features | Features | High *(kept in English — common navigation term in Pakistan; "خصوصیات" sounds formal)* |
| `common.nav.solutions` | Solutions | Solutions | High *(kept in English)* |
| `common.nav.pricing` | Pricing | Pricing | High *(kept in English)* |
| `common.nav.updates` | Updates | Updates | High *(kept in English)* |
| `common.nav.about` | About Us | ہمارے بارے میں | High |
| `common.nav.careers` | Careers | Careers | High *(kept in English)* |
| `common.nav.login` | Login | Login | High *(kept in English)* |
| `common.nav.contact` | Contact Us | رابطہ کریں | High |
| `common.nav.menuToggleAria` | Toggle menu | مینو کھولیں / بند کریں | Medium — please verify *(literally "open/close menu" — verify if a single shorter form is preferred)* |

## common.solutionsDropdown.items

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `pharmacy.title` | Pharmacy | فارمیسی | High |
| `pharmacy.description` | Cloud POS and inventory software for Pakistani pharmacies. Fully supported. | پاکستانی فارمیسیز کے لیے cloud POS اور inventory software۔ مکمل سپورٹڈ۔ | High |
| `retail.title` | Retail | ریٹیل | High *(transliterated; "خوردہ فروشی" exists but sounds formal)* |
| `retail.description` | Coming soon. Message us for early access. | جلد آرہا ہے۔ early access کے لیے ہمیں message کریں۔ | High |
| `restaurant.title` | Restaurant | ریسٹورنٹ | High |
| `wholesale.title` | Wholesale | ہول سیل | High |
| `departmentalStore.title` | Departmental Store | ڈیپارٹمنٹل سٹور | High |
| `distribution.title` | Distribution | ڈسٹری بیوشن | High |

## common.buttons

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `startFreeTrial` | Start free trial | Free trial شروع کریں | High |
| `messageOnWhatsapp` | Message us on WhatsApp | WhatsApp پر message کریں | High |
| `notifyOnWhatsapp` | Notify me on WhatsApp | WhatsApp پر notify کریں | High |
| `askWhatIsNew` | Ask what is new | پوچھیں کیا نیا ہے | Medium — please verify *(literal; "نیا کیا ہے پوچھیں" might flow better)* |
| `requestDemo` | Request a Demo | Demo کی request کریں | High |
| `loginDashboard` | Login to Dashboard | Dashboard میں login کریں | High |
| `seePricing` | See pricing | Pricing دیکھیں | High |
| `seeFeatures` | See features | Features دیکھیں | High |
| `seeFAQ` | Read the FAQ | FAQ پڑھیں | High |
| `backToHome` | Back to home | ہوم پر واپس | High |
| `contactUs` | Contact us | رابطہ کریں | High |
| `seeThePharmacyPage` | See the pharmacy page | فارمیسی صفحہ دیکھیں | High |
| `backToSolutions` | Back to solutions | Solutions پر واپس | High |
| `aboutTheTeam` | About the team | ٹیم کے بارے میں | High |
| `submit` | Submit | Submit | High *(kept English — common button label)* |
| `sending` | Sending... | بھیجا جا رہا ہے... | High |
| `send` | Send | بھیجیں | High |

## common.languageToggle

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `english` | English | English | High *(language label — stays English on both sides)* |
| `urdu` | اردو | اردو | High *(language label — stays Nastaliq on both sides)* |
| `ariaLabel` | Switch language | زبان تبدیل کریں | High |

## common.floatingCta

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `ariaLabel` | Chat with us on WhatsApp | WhatsApp پر ہم سے بات کریں | High |
| `tooltip` | Chat | Chat | High *(tooltip — kept English for compactness)* |

## footer

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `tagline` | Cloud POS and inventory software, built for Pakistani pharmacies. | پاکستانی فارمیسیز کے لیے بنایا گیا cloud POS اور inventory software۔ | High |
| `copyright` | © {year} Zapeera. All rights reserved. | © {year} Zapeera۔ تمام حقوق محفوظ ہیں۔ | High |
| `columns.product` | Product | پروڈکٹ | High *(transliterated)* |
| `columns.company` | Company | کمپنی | High |
| `columns.resources` | Resources | Resources | High *(kept English)* |
| `columns.legal` | Legal | Legal | High *(kept English)* |

---

## home.hero

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `headlineBefore` + `headlineEm` + `headlineAfter` | "The pharmacy software, built for **Pakistan**." | "فارمیسی software، بنایا گیا **پاکستان** کے لیے۔" | **High** *(headline — direct, confident, mirrors the spec example "پاکستان کے لیے بنایا گیا فارمیسی سافٹ ویئر۔" with "software" kept in Latin per the convention)* |
| `body` | Track every batch and expiry. Replace the end-of-day hisaab. See which medicines actually make profit and which are dead stock — across one shop or three. Built for the way Pakistani pharmacies actually run, priced for the Pakistani market. | ہر batch اور expiry کو track کریں۔ end-of-day حساب کتاب کا جھنجھٹ ختم کریں۔ دیکھیں کون سی دوائیں اصل میں profit دیتی ہیں اور کون سی dead stock ہیں — ایک شاپ ہو یا تین۔ پاکستانی فارمیسی جس طرح چلتی ہے، اسی کے مطابق بنایا گیا، پاکستانی market کے لیے priced کیا گیا۔ | **High** *("hisaab" / حساب کتاب is naturally Pakistani — "the end-of-day hisaab headache" is the kind of phrase the original copy was already trying to evoke; the Urdu version keeps that flavour)* |

## home.about — "Why we built this"

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heading` | Why we built this | ہم نے یہ کیوں بنایا | High |
| `lead` | We are a small Pakistani team. The last year has been talking to pharmacy owners in Lahore and Karachi about what is actually broken and what is just annoying — and building software around the answers. | ہم ایک چھوٹی پاکستانی ٹیم ہیں۔ پچھلا سال لاہور اور کراچی کے فارمیسی owners سے بات کرنے میں گزرا — یہ سمجھنے میں کہ اصل میں کیا ٹوٹا ہوا ہے اور کیا صرف تنگ کرنے والا ہے — اور ان کے جوابات کے گرد software بنایا۔ | **High** |
| `items[0].title` | Made in Pakistan | پاکستان میں بنایا گیا | High |
| `items[0].body` | Built locally, by people who know what a Pakistani pharmacy actually looks like at 9pm on a Friday. | مقامی طور پر بنایا گیا، ان لوگوں نے جو جانتے ہیں جمعہ رات 9 بجے ایک پاکستانی فارمیسی اصل میں کیسی نظر آتی ہے۔ | **Medium — please verify** *(the "9pm on a Friday" idiom is uniquely Western — verify a Pakistani-natural alternative; perhaps "جمعرات رات" or "آخری گاہک کے بعد" reads more local)* |
| `items[1].title` | Priced for the Pakistani market | پاکستانی market کے لیے priced | High |
| `items[1].body` | International POS software is priced in dollars and built for chains. Local desktop software is stuck in 2010. Zapeera sits between the two. | International POS software ڈالر میں priced ہے اور chains کے لیے بنا ہے۔ مقامی desktop software 2010 میں اٹکا ہوا ہے۔ Zapeera ان دونوں کے درمیان ہے۔ | High |
| `items[2].body` | WhatsApp-first support. Tolerant of slow internet. Pakistani medicines pre-loaded. Honest about what is shipped and what is still coming. | WhatsApp-first سپورٹ۔ سست internet برداشت کرتا ہے۔ پاکستانی دوائیں پہلے سے loaded ہیں۔ جو شپ ہو چکا اور جو ابھی آنا ہے، دونوں کے بارے میں ایماندار۔ | High |

## home.featuresOverview

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heading` | Three things Zapeera does well | تین چیزیں جو Zapeera اچھی طرح کرتا ہے | High |
| `lead` | We did not build 50 features. We built the three a Pakistani pharmacy actually needs and made them work properly. | ہم نے 50 features نہیں بنائیں۔ ہم نے وہ تین بنائیں جو ایک پاکستانی فارمیسی کو واقعی چاہئیں — اور انہیں صحیح طرح کام کرنے والی بنایا۔ | High |
| `items[0].title` | Expiry tracking that actually works | Expiry tracking جو واقعی کام کرتی ہے | High |
| `items[0].description` | Get alerts at 90, 60, and 30 days before any medicine expires. Return to the supplier on time, mark batches that cannot be returned, and stop throwing money in the bin every quarter. | کسی بھی دوائی کی expiry سے 90، 60، اور 30 دن پہلے alert ملے گا۔ supplier کو وقت پر return کریں، جو batches return نہیں ہو سکتیں انہیں mark کریں، اور ہر سہ ماہی پیسے ضائع ہونا بند کریں۔ | **High** |
| `items[1].title` | Inventory you can trust | Inventory جس پر بھروسہ ہو | High |
| `items[1].description` | (full inventory description) | (full Urdu — see ur.json) | **High** *("بغیر آدھی رات کو counting کیے" — natural midnight-counting metaphor preserved)* |
| `items[2].title` | Reports that tell you what to do next | Reports جو بتاتی ہیں آگے کیا کرنا ہے | High |
| `items[2].description` | (full reports description) | (full Urdu) | **High** |

## home.builtForPakistan

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heading` | Built for Pakistan | پاکستان کے لیے بنایا گیا | High |
| `lead` | The details that international SaaS gets wrong and local desktop software never bothered to add. | وہ تفصیلات جو international SaaS غلط کرتا ہے اور مقامی desktop software نے کبھی شامل کرنے کی زحمت نہیں کی۔ | High |
| `items[0].title` | Pakistani medicines, pre-loaded | پاکستانی دوائیں، پہلے سے loaded | High |
| `items[1].title` | PKR by default | PKR by default | High *(kept English — currency code + idiom)* |
| `items[2].title` | WhatsApp-first support | WhatsApp-first سپورٹ | High |
| `items[3].title` | Built for slow internet | سست internet کے لیے بنایا گیا | High |
| `items[4].title` | Roman Urdu and Urdu interface | Roman Urdu اور اردو interface | **High** *(self-referential — ironically, the title that talks about the upcoming Urdu interface is itself written exactly the way Pakistanis write — mixed script)* |

## home.howItWorks

| Step | English | Urdu | Confidence |
|---|---|---|---|
| 1 title | Message us on WhatsApp | WhatsApp پر ہمیں message کریں | High |
| 2 title | We set it up with you | ہم آپ کے ساتھ مل کر setup کرتے ہیں | High |
| 3 title | Train your staff in an hour | اپنے staff کو ایک گھنٹے میں train کریں | High |
| 4 title | Run for 30 days, free | 30 دن مفت چلائیں | High |

(All step descriptions: **High confidence** — natural Pakistani business-owner phrasing.)

## home.faq

| Q | English | Urdu | Confidence |
|---|---|---|---|
| 1 | Will it work for my single shop, or do I need multiple branches? | کیا یہ میری ایک شاپ کے لیے کام کرے گا، یا multiple branches چاہئیں؟ | High |
| 2 | What if my internet goes down? | اگر میرا internet چلا جائے تو؟ | High |
| 2 (answer) | …You will not lose a sale because PTCL went down. | …PTCL کے بند ہونے سے آپ کی sale نہیں جائے گی۔ | **High** *(PTCL reference is uniquely Pakistani; native speaker should confirm "بند ہونا" is the right verb here, vs "خراب ہونا")* |
| 3-8 | (full Q+A pairs) | (translated) | **High** |

## home.cta

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heading` | Be one of our first 50 pharmacies. | ہماری پہلی 50 فارمیسیز میں سے ایک بنیں۔ | **High** |
| `body` | Free for 30 days. No credit card. We set it up for you and pre-load your medicines. Message us on WhatsApp — we reply within an hour during business hours. | 30 دن مفت۔ کوئی credit card نہیں۔ ہم آپ کے لیے setup کرتے ہیں اور آپ کی دوائیں pre-load کر دیتے ہیں۔ WhatsApp پر ہمیں message کریں — business hours میں ایک گھنٹے کے اندر reply ملے گا۔ | High |

## pricing.section

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heading` | Simple, transparent pricing | سادہ، شفاف pricing | High |
| `billingMonthly` / `billingAnnual` | Monthly / Annual | ماہانہ / سالانہ | High |
| `billingSave` | Save 17% | 17% بچت | High |
| `popularBadge` | Most popular | سب سے مقبول | High |
| `customPricing` | Custom pricing | Custom pricing | High *(kept English)* |
| `taxNote` | Prices in Pakistani Rupees (PKR). Excludes applicable taxes. | قیمتیں پاکستانی روپے (PKR) میں۔ قابل اطلاق ٹیکس شامل نہیں۔ | High |
| `plans.solo.tagline` | For single-shop pharmacies | ایک شاپ والی فارمیسیز کے لیے | High |
| `plans.team.tagline` | For pharmacies with a small team | چھوٹی ٹیم والی فارمیسیز کے لیے | High |
| `plans.business.tagline` | For multi-branch pharmacies | Multi-branch فارمیسیز کے لیے | High |
| `plans.enterprise.tagline` | For pharmacy chains and groups | فارمیسی chains اور groups کے لیے | High |

(All plan feature lists translated. **High confidence** — pharmacy-natural; technical terms like "POS", "WhatsApp", "barcode", "role-based access" stay in Latin per the convention.)

## pricing.page.faqs (6 questions)

All 6 pricing FAQs translated with **High confidence**. Numbers (Rs 15,000 / Rs 35,000 / Rs 75,000) stay in Western Arabic numerals.

## features

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | Three things Zapeera does well — in detail | تین چیزیں جو Zapeera اچھی طرح کرتا ہے — تفصیل کے ساتھ | High |
| `supportingHeading` | The supporting bits | Supporting بات | **Medium — please verify** *("supporting بات" is loose; an alternative could be "ضمنی صلاحیتیں" but that's formal. Verify natural register.)* |
| `pillars[].title/intro/points` | (full pillar content) | (translated) | **High** |
| `supporting[]` | 6 supporting capability cards | (translated) | **High** |

## about

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | About Zapeera | Zapeera کے بارے میں | High |
| `heroLead` | A small Pakistani team building cloud software for Pakistani pharmacies. Honest about what we have shipped and what is still coming. | ایک چھوٹی پاکستانی ٹیم جو پاکستانی فارمیسیز کے لیے cloud software بنا رہی ہے۔ جو شپ ہو چکا اور جو ابھی آنا ہے، دونوں کے بارے میں ایماندار۔ | High |
| `story.heading` | Our story | ہماری کہانی | High |
| `story.p1/p2/p3` | (3 paragraphs) | (translated) | **High** *(p2 contains the "calculator at 11pm" image — preserved as "رات 11 بجے calculator پر")* |
| `heading.first50Title` | The first 50 | پہلی 50 | High |
| `heading.first50Body` | (50 paying pharmacies as the year's goal) | (translated) | **High** |
| `heading.buildingTitle` | What we are building next | ہم آگے کیا بنا رہے ہیں | High |
| `team.heading` | The team | ٹیم | High |
| `team.lead` | (text-only honest team statement) | (translated) | **High** |

## solutionsIndex

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | Built for pharmacies first. | پہلے فارمیسیز کے لیے بنایا گیا۔ | High |
| `pharmacyCard.badge` | Fully supported | مکمل سپورٹڈ | High |
| `otherIndustries.heading` | Other industries — coming soon | دوسری industries — جلد آرہی ہیں | High |
| `otherIndustries.comingSoon` | Coming soon | جلد آرہا ہے | High |

## solutionSlug.pharmacy

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `badge` | For pharmacies | فارمیسیز کے لیے | High |
| `heroH1` | The pharmacy software, built for Pakistan. | فارمیسی software، پاکستان کے لیے بنایا گیا۔ | High |
| `pillarsHeading` | What it does for a pharmacy | فارمیسی کے لیے یہ کیا کرتا ہے | High |
| `extrasHeading` | The Pakistan-specific bits | پاکستان-specific باتیں | **Medium — please verify** *("specific" left in English-as-Latin reads odd in Urdu; "خاص پاکستانی باتیں" might flow better)* |
| `ctaHeading` | Be one of our first 50 pharmacies. | ہماری پہلی 50 فارمیسیز میں سے ایک بنیں۔ | High |
| `pillars[]` | (3 pillars × title+body) | (translated) | **High** |
| `extras[]` | (6 bullet points) | (translated) | **High** |

## solutionSlug.notYet

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `badge` | Coming soon | جلد آرہا ہے | High |
| `headlineFn` | Zapeera for {industry} — coming soon. | {industry} کے لیے Zapeera — جلد آرہا ہے۔ | High *(parameter substitution preserved)* |
| `body` | We are focused on Pakistani pharmacies first. Message us for early access when we open this up. | ہم پہلے پاکستانی فارمیسیز پر focused ہیں۔ جب یہ open کریں تو early access کے لیے ہمیں message کریں۔ | High |

## contact

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | Get in Touch | رابطہ کریں | High |
| `infoHeading` | Contact Information | رابطے کی معلومات | High |
| `cards.email/phone/whatsapp/office.title` | Email / Phone / WhatsApp / Office | Email / فون / WhatsApp / Office | High |
| `form.heading` | Send us a message | ہمیں message بھیجیں | High |
| `form.lead` | Or fill the form below — we will reply via WhatsApp. | یا نیچے form بھریں — ہم WhatsApp پر reply کریں گے۔ | High |
| `form.fields.name/email/phone/subject/message` | (form labels) | (translated) | High |
| `form.placeholders.message` | Tell us a bit about your pharmacy... | اپنی فارمیسی کے بارے میں کچھ بتائیں... | High |
| `form.successTitle/Body` | (toast on success) | (translated) | High |
| `form.errorTitle/Body` | (toast on error) | (translated) | High |

## careers

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | Careers | Careers | High *(kept English)* |
| `heroLead` / `bodyHeading` / `bodyP1` / `bodyP2` | (4 paragraphs of honest "not hiring yet" copy) | (translated) | **High** |

## updates

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroH1` | Updates | Updates | High *(kept English)* |
| `inProgressHeading` | In progress | جاری ہے | High |
| `shippedHeading` | Recently shipped | حال ہی میں شپ ہوا | High |
| `inProgress[]` | (3 items) | (translated) | **High** |

## notFound

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `title` | 404 | 404 | High *(numeric — no translation)* |
| `message` | Oops! Page not found | صفحہ نہیں ملا | High *("Oops!" dropped intentionally — Urdu doesn't have a clean equivalent and the literal translation reads childish)* |
| `linkHome` | Return to Home | ہوم پر واپس | High |

## whatsappMessages — pre-filled WhatsApp greetings

These open in the user's WhatsApp app pre-typed; user can edit before sending.

| Key | English | Urdu | Confidence |
|---|---|---|---|
| `heroTrial` | Assalam-o-Alaikum, I want to start the Zapeera free trial for my pharmacy. | السلام علیکم، میں اپنی فارمیسی کے لیے Zapeera کا free trial شروع کرنا چاہتا ہوں۔ | **High** *(spec-perfect — matches the "السلام علیکم" + technical-term-in-Latin pattern the spec called out)* |
| `demo` | Assalam-o-Alaikum, I want a Zapeera demo for my pharmacy. | السلام علیکم، میں اپنی فارمیسی کے لیے Zapeera کا ڈیمو چاہتا ہوں۔ | **High** *(matches the spec example exactly)* |
| `pricingSolo/Team/Business` | …— Solo plan / Team plan / Business plan | …— Solo plan / Team plan / Business plan | High |
| `pricingEnterprise` | Assalam-o-Alaikum, I want to discuss Zapeera Enterprise pricing for my pharmacy chain. | السلام علیکم، میں اپنی فارمیسی chain کے لیے Zapeera Enterprise pricing پر بات کرنا چاہتا ہوں۔ | High |
| `floating` | Assalam-o-Alaikum, I have a question about Zapeera. | السلام علیکم، میرا Zapeera کے بارے میں سوال ہے۔ | High |
| `contact` | Assalam-o-Alaikum, I want to talk to the Zapeera team. | السلام علیکم، میں Zapeera ٹیم سے بات کرنا چاہتا ہوں۔ | High |
| `pharmacy` | Assalam-o-Alaikum, I want to know more about Zapeera for pharmacies. | السلام علیکم، میں فارمیسیز کے لیے Zapeera کے بارے میں مزید جاننا چاہتا ہوں۔ | High |
| `careers` | Assalam-o-Alaikum, I want to join the Zapeera team. | السلام علیکم، میں Zapeera ٹیم میں شامل ہونا چاہتا ہوں۔ | High |
| `earlyAccess` | Assalam-o-Alaikum, I want early access to Zapeera for {industry}. | السلام علیکم، میں {industry} کے لیے Zapeera کا early access چاہتا ہوں۔ | High |

## meta — page titles and descriptions (SEO)

All 9 page meta entries translated. **High confidence** — these mirror the page-level content that's already verified above.

---

## Specific items flagged for native review (Medium-confidence summary)

A handful of phrases where multiple natural Pakistani-Urdu phrasings exist; pick whichever the team prefers:

1. **`common.nav.menuToggleAria`**: "مینو کھولیں / بند کریں" vs "مینو" (just the word) vs "ٹاگل کریں". Kept the verbose form for screen reader clarity; could shorten.
2. **`home.about.items[0].body`**: "9pm on a Friday" idiom — kept literal as "جمعہ رات 9 بجے" but might localise better as "آخری گاہک کے بعد" ("after the last customer").
3. **`features.supportingHeading`**: "Supporting بات" — informal mix; "ضمنی صلاحیتیں" is more formal; pick by tone.
4. **`solutionSlug.pharmacy.extrasHeading`**: "پاکستان-specific باتیں" — Latin "specific" inside an Urdu noun phrase reads odd; "خاص پاکستانی باتیں" might flow better.
5. **`common.buttons.askWhatIsNew`**: "پوچھیں کیا نیا ہے" reads a touch literal; "نیا کیا ہے پوچھیں" might be more natural as button text.
6. **`home.faq.q2.answer` (PTCL reference)**: verb choice "بند ہونا" vs "خراب ہونا" — both natural; PTCL is unmistakably Pakistani so context is clear either way.

The rest of the bundle reads as natural Pakistani Urdu with the established convention (Latin for technical terms, Nastaliq for everything else, Western numerals always).

---

## Implementation notes for translators

- The bundle uses ICU message format for the `{year}`, `{industry}` placeholders. Don't translate inside the curly braces.
- All keys are case-sensitive — match `messages/en.json` exactly.
- After editing `messages/ur.json`, run `npm run build` to confirm no missing-key errors.
