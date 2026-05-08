"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

const FloatingCTA = () => {
  const t = useTranslations("common.floatingCta");

  return (
    <a
      href={getWhatsAppLink(whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("ariaLabel")}
      className="group fixed bottom-6 end-6 z-40 flex items-center"
    >
      {/* Tooltip — desktop only */}
      <span
        aria-hidden="true"
        className="hidden md:inline-block me-3 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-body-sm font-medium shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
      >
        {t("tooltip")}
      </span>

      <span className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl bg-[#25D366] group-hover:bg-[#1faa50]">
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.25} />
      </span>
    </a>
  );
};

export default FloatingCTA;
