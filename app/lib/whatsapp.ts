/**
 * WhatsApp link helpers — single source of truth for the number + every
 * pre-filled message used by a CTA on the site.
 *
 * The number comes from NEXT_PUBLIC_WHATSAPP_NUMBER. Anything in that
 * env var that is not a digit is stripped before building the wa.me URL,
 * so it tolerates "+92 310 7100663", "+923107100663", or "923107100663".
 *
 * The fallback below is used only when the env var is missing (e.g. local
 * dev where someone has not set up .env.local yet). Production must set
 * the env var — see DEPLOYMENT_NOTES.md / WHATSAPP_INTEGRATION.md.
 */

const FALLBACK_NUMBER = "923107100663";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** Resolve the WhatsApp number, normalised to digits-only. */
export function getWhatsappNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const digits = digitsOnly(fromEnv ?? FALLBACK_NUMBER);
  // If the env var was set but emptied out to something invalid, fall back.
  return digits.length >= 8 ? digits : FALLBACK_NUMBER;
}

/** Pretty-print the number for display (e.g. "+92 310 7100663"). */
export function getWhatsappDisplayNumber(): string {
  const d = getWhatsappNumber();
  // Pakistan: +92 XXX XXXXXXX
  if (d.length === 12 && d.startsWith("92")) {
    return `+92 ${d.slice(2, 5)} ${d.slice(5)}`;
  }
  return `+${d}`;
}

/**
 * Build a wa.me URL with an optional pre-filled message.
 * Returns the bare https://wa.me/<number> if message is empty.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${getWhatsappNumber()}`;
  return message && message.trim().length > 0
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}

/** Back-compat alias — earlier code (Task 4 pricing) imported `waUrl`. */
export const waUrl = getWhatsAppLink;

/**
 * Pre-filled message catalog. Every CTA on the site picks from one of
 * these constants — never inline a string when adding a new wa.me link.
 *
 * If a context isn't covered here, add a new entry rather than inventing
 * the message at the call site.
 */
export const whatsappMessages = {
  // Conversion CTAs
  heroTrial: "Assalam-o-Alaikum, I want to start the Zapeera free trial for my pharmacy.",
  demo: "Assalam-o-Alaikum, I want a Zapeera demo for my pharmacy.",

  // Pricing cards
  pricingSolo: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Solo plan.",
  pricingTeam: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Team plan.",
  pricingBusiness: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Business plan.",
  pricingEnterprise:
    "Assalam-o-Alaikum, I want to discuss Zapeera Enterprise pricing for my pharmacy chain.",

  // Page-specific
  floating: "Assalam-o-Alaikum, I have a question about Zapeera.",
  contact: "Assalam-o-Alaikum, I want to talk to the Zapeera team.",
  pharmacy: "Assalam-o-Alaikum, I want to know more about Zapeera for pharmacies.",
  careers: "Assalam-o-Alaikum, I want to join the Zapeera team.",
} as const;

/**
 * Industry early-access message — dynamic per industry slug used on the
 * /solutions/[non-pharmacy] coming-soon stubs.
 */
export function earlyAccessMessage(industryLabel: string): string {
  return `Assalam-o-Alaikum, I want early access to Zapeera for ${industryLabel}.`;
}

/**
 * Back-compat alias for Task 4 pricing call sites — they import this
 * specific object name. Will fold into whatsappMessages over time.
 */
export const pricingCtaMessages = {
  solo: whatsappMessages.pricingSolo,
  team: whatsappMessages.pricingTeam,
  business: whatsappMessages.pricingBusiness,
  enterprise: whatsappMessages.pricingEnterprise,
} as const;

/**
 * @deprecated The hardcoded constant from Task 4. Kept temporarily so any
 * unmigrated import does not break. Remove after the WhatsApp pass.
 */
export const ZAPEERA_WHATSAPP_NUMBER = FALLBACK_NUMBER;
