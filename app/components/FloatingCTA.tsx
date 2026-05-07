import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

/**
 * Floating WhatsApp CTA.
 *
 * Always visible (does not hide on scroll), bottom-right on every viewport,
 * 56x56 circle, WhatsApp brand green (#25D366) — the only place on the site
 * where the WhatsApp brand colour is used, because it is an instant visual
 * signal that pharmacy owners recognise.
 *
 * Hover state: subtle scale-up + a small "Chat" tooltip on the left
 * (desktop only). No bounce, no pulse, no attention-grabbing animations.
 *
 * z-40 keeps it above page sections (which use z-10 / unset) but below
 * shadcn dialogs (z-50) and toasts (z-[100]).
 */
const FloatingCTA = () => {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center"
    >
      {/* Tooltip — desktop only, fades in on hover */}
      <span
        aria-hidden="true"
        className="hidden md:inline-block mr-3 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-body-sm font-medium shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
      >
        Chat
      </span>

      {/* Circular WhatsApp button */}
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl bg-[#25D366] group-hover:bg-[#1faa50]"
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.25} />
      </span>
    </a>
  );
};

export default FloatingCTA;
