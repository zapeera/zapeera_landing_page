/**
 * WhatsApp link helpers.
 *
 * The number is hardcoded here for now. Task 6 (the WhatsApp pass) will
 * migrate this to a NEXT_PUBLIC_WHATSAPP_NUMBER env var so the production
 * number can be flipped without a code change. Until then, every call site
 * goes through this module so there is exactly one constant to update.
 */

export const ZAPEERA_WHATSAPP_NUMBER = "923107100663";

/**
 * Build a wa.me URL with an optional pre-filled message.
 * Returns the bare https://wa.me/<number> if message is empty.
 */
export function waUrl(message?: string): string {
  const base = `https://wa.me/${ZAPEERA_WHATSAPP_NUMBER}`;
  return message && message.trim().length > 0
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}

/**
 * Pricing-page CTA messages. Used on the home PricingSection and /pricing.
 */
export const pricingCtaMessages = {
  solo: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Solo plan.",
  team: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Team plan.",
  business: "Assalam-o-Alaikum, I want to start the Zapeera free trial — Business plan.",
  enterprise:
    "Assalam-o-Alaikum, I want to discuss Zapeera Enterprise pricing for my pharmacy chain.",
} as const;
