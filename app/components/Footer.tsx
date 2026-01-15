"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Container from "./ui/container";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const footerLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Solutions", path: "/solutions" },
      { name: "Pricing", path: "/pricing" },
    ],
    Company: [
      { name: "About Us", path: "/about-us" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact-us" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Help Center", path: "tel:+923131670125" },
      { name: "API Docs", path: "/product-update" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <footer className="border-t border-gray-300" style={{ backgroundColor: 'rgb(239 246 255)' }}>
     <Container size="xl" padding="none">
     <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group gap-2 sm:gap-2.5 mb-4">
              <div className="relative w-[150px] h-12 sm:w-[170px] sm:h-14 md:w-[190px] md:h-16 lg:w-[220px] lg:h-20 xl:w-[250px] xl:h-24 2xl:w-[280px] 2xl:h-28 transition-transform group-hover:scale-110 flex-shrink-0">
                <Image
                  src="/logos.png"
                  alt="Zapeera Logo"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, (max-width: 1024px) 190px, (max-width: 1280px) 220px, (max-width: 1536px) 250px, 280px"
                  priority
                  quality={100}
                />
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">
              The all-in-one business management and POS solution. Built to help businesses grow smarter and faster.
            </p>
            <div className="flex gap-4">
  <a
    href="https://web.facebook.com/profile.php?id=61582397802995"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: 'rgb(218 227 249)' }}
  >
    <Facebook className="w-5 h-5 text-[#1947C4]" />
  </a>

  <a
    href="https://www.linkedin.com/company/zapeera/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: 'rgb(218 227 249)' }}
  >
    <Linkedin className="w-5 h-5 text-[#1947C4]" />
  </a>

  <a
    href="https://www.instagram.com/zapeera.official/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: 'rgb(218 227 249)' }}
  >
    <Instagram className="w-5 h-5 text-[#1947C4]" />
  </a>

  <a
    href="https://www.youtube.com/@zapeera"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: 'rgb(218 227 249)' }}
  >
    <Youtube className="w-5 h-5 text-[#1947C4]" />
  </a>

  <a
    href="https://www.tiktok.com/@zapeera"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
    style={{ backgroundColor: 'rgb(218 227 249)' }}
  >
    <svg
      className="w-5 h-5 text-[#1947C4]"
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
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="hidden lg:block">
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('tel:') ? (
                      <a
                        href={link.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mobile Dropdown Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:hidden">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleDropdown(category)}
                className="flex items-center justify-between w-full md:py-2 py-0 border-b border-border"
              >
                <h3 className="font-semibold text-left">{category}</h3>
                {openDropdown === category ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {/* Dropdown Content */}
              {openDropdown === category && (
                <ul className="space-y-3 py-2 animate-fade-in">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.path.startsWith('tel:') ? (
                        <a
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.name}
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
            © {new Date().getFullYear()} Zapeera. All rights reserved.
          </p>
        </div>
        {/* Mobile Bottom Bar */}
        <div className="mt-8  flex md:hidden flex-col justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Zapeera. All rights reserved.
          </p>
        </div>
      </div>
     </Container>
    </footer>
  );
};

export default Footer;