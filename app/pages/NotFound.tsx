'use client'

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const t = useTranslations("notFound");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="mb-4 text-xl text-gray-600">{t("message")}</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          {t("linkHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
