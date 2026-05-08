"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube, ChevronDown, ChevronUp } from "lucide-react";
import Container from "./ui/container";

type LinkRow = { nameKey: string; path: string };
type Category = { titleKey: string; key: string; links: LinkRow[] };

const categories: Category[] = [
  {
    key: "product",
    titleKey: "columns.product",
    links: [
      { nameKey: "links.features", path: "/features" },
      { nameKey: "links.solutions", path: "/solutions" },
      { nameKey: "links.pricing", path: "/pricing" },
    ],
  },
  {
    key: "company",
    titleKey: "columns.company",
    links: [
      { nameKey: "links.about", path: "/about-us" },
      { nameKey: "links.careers", path: "/careers" },
      { nameKey: "links.contact", path: "/contact-us" },
    ],
  },
  {
    key: "resources",
    titleKey: "columns.resources",
    links: [
      { nameKey: "links.helpCenter", path: "tel:+923107100663" },
      { nameKey: "links.updates", path: "/product-update" },
    ],
  },
  {
    key: "legal",
    titleKey: "columns.legal",
    links: [
      { nameKey: "links.privacy", path: "/privacy-policy" },
      { nameKey: "links.terms", path: "/terms-of-service" },
      { nameKey: "links.cookies", path: "/cookie-policy" },
    ],
  },
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations("footer");
  const tSocial = useTranslations("footer.social");

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <footer className="border-t border-neutral-200 bg-primary-50">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center group gap-2 sm:gap-2.5 mb-4">
                <div className="relative w-[150px] h-12 sm:w-[170px] sm:h-14 md:w-[190px] md:h-16 lg:w-[220px] lg:h-20 xl:w-[250px] xl:h-24 2xl:w-[280px] 2xl:h-28 transition-transform group-hover:scale-110 flex-shrink-0">
                  <Image
                    src="/logos.png"
                    alt="Zapeera"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, (max-width: 1024px) 190px, (max-width: 1280px) 220px, (max-width: 1536px) 250px, 280px"
                    priority
                    quality={100}
                  />
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 text-sm">{t("tagline")}</p>
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61582397802995"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tSocial("facebook")}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-primary-100 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <Facebook className="w-5 h-5 text-primary-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zapeera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tSocial("linkedin")}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-primary-100 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 text-primary-600" />
                </a>
                <a
                  href="https://www.instagram.com/zapeera.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tSocial("instagram")}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-primary-100 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5 text-primary-600" />
                </a>
                <a
                  href="https://www.youtube.com/@zapeera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tSocial("youtube")}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-primary-100 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <Youtube className="w-5 h-5 text-primary-600" />
                </a>
                <a
                  href="https://www.tiktok.com/@zapeera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tSocial("tiktok")}
                  className="w-10 h-10 rounded-lg border border-neutral-200 bg-primary-100 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 text-primary-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Desktop Links Columns */}
            {categories.map((cat) => (
              <div key={`d-${cat.key}`} className="hidden lg:block">
                <h3 className="font-semibold mb-4">{t(cat.titleKey)}</h3>
                <ul className="space-y-3">
                  {cat.links.map((link) => (
                    <li key={link.path}>
                      {link.path.startsWith("tel:") ? (
                        <a
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t(link.nameKey)}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t(link.nameKey)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Mobile Dropdown Columns */}
            {categories.map((cat) => (
              <div key={`m-${cat.key}`} className="lg:hidden">
                <button
                  type="button"
                  onClick={() => toggleDropdown(cat.key)}
                  className="flex items-center justify-between w-full md:py-2 py-0 border-b border-border"
                >
                  <h3 className="font-semibold text-start">{t(cat.titleKey)}</h3>
                  {openDropdown === cat.key ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>

                {openDropdown === cat.key && (
                  <ul className="space-y-3 py-2 animate-fade-in">
                    {cat.links.map((link) => (
                      <li key={link.path}>
                        {link.path.startsWith("tel:") ? (
                          <a
                            href={link.path}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {t(link.nameKey)}
                          </a>
                        ) : (
                          <Link
                            href={link.path}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {t(link.nameKey)}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-12 border-t border-gray-300 hidden md:flex flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
          <div className="mt-8 flex md:hidden flex-col justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
