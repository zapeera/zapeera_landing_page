"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, CheckCircle, ShoppingBag, Pill, UtensilsCrossed, Package, Store, Truck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Container from "./ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [solutionsTimeout, setSolutionsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const pathname = usePathname();
  const router = useRouter();

  const solutions = [
    {
      title: "Retail",
      description: "Complete retail management with multi-branch sync and real-time inventory tracking",
      slug: "retail",
      icon: ShoppingBag,
      color: "text-blue-600"
    },
    {
      title: "Pharmacy",
      description: "Specialized pharmacy management with medication tracking and expiry alerts",
      slug: "pharmacy",
      icon: Pill,
      color: "text-green-600"
    },
    {
      title: "Restaurant",
      description: "Manage menus, kitchen orders, tables, and staff scheduling efficiently",
      slug: "restaurant",
      icon: UtensilsCrossed,
      color: "text-orange-600"
    },
    {
      title: "Wholesale",
      description: "Bulk order processing with flexible pricing and automated invoicing",
      slug: "wholesale",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Departmental Store",
      description: "Multi-category management with advanced inventory control and reporting",
      slug: "departmental-store",
      icon: Store,
      color: "text-indigo-600"
    },
    {
      title: "Distribution",
      description: "Comprehensive distribution with route optimization and warehouse management",
      slug: "distribution",
      icon: Truck,
      color: "text-red-600"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open hone par body scroll disable karo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsMobileSolutionsOpen(false); // Close solutions dropdown when menu closes
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeout) {
        clearTimeout(solutionsTimeout);
      }
    };
  }, [solutionsTimeout]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Reset quote submitted state when modal closes
  useEffect(() => {
    if (!isQuoteModalOpen) {
      setIsQuoteSubmitted(false);
      setQuoteFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }
  }, [isQuoteModalOpen]);

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout) {
      clearTimeout(solutionsTimeout);
    }
    setIsSolutionsHovered(true);
  };

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsHovered(false);
    }, 150); // Small delay to allow mouse movement to dropdown
    setSolutionsTimeout(timeout);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blogs", path: "/blogs" },
    { name: "Updates", path: "/product-update" },
    { name: "About Us", path: "/about-us" },
    { name: "Careers", path: "/careers" },
  ];

  const isAboutPage = pathname === '/about-us';

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isAboutPage ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'
      }`}
    >
      <Container size="xl" padding="none">
      <div className="w-full  pt-4">
        {/* White pill-shaped navigation bar with soft shadow */}
        <div className={`rounded- px-6 lg:px-8 xl:px-10 py-3 h-14 lg:h-14 relative max-w-[2000px] mx-auto pb-[20px] transition-all duration-300 ${
          isScrolled || isAboutPage ? 'bg-white' : 'bg-transparent'
        }`}>
          <div className="flex items-center h-full gap-4 lg:gap-6">
            {/* Logo - Pill-shaped button with gradient background */}
            <Link href="/" className="flex items-center group gap-2 z-10 flex-shrink-0">
              <div className="px-3 lg:px-4 py-2 rounded-full border-white/10 flex items-center gap-2">
                <div className="relative h-9 sm:h-10 md:h-11 lg:h-11 xl:h-12 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] flex-shrink-0">
                  <Image
                    src="/logos.png"
                    alt="Zapeera Logo"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 180px, (max-width: 1280px) 200px, (max-width: 1536px) 220px, 240px"
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Centered, Dark text */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5 2xl:gap-6 flex-1 justify-center min-w-0 px-2">
              {navLinks.map((link) => (
                link.name === "Solutions" ? (
                  <div
                    key={link.path}
                    className="relative group"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <Link
                      href={link.path}
                      prefetch={true}
                      className={`text-sm font-medium transition-colors hover:text-[#1732BD] flex items-center gap-1 whitespace-nowrap ${
                        pathname === link.path || pathname?.startsWith("/solutions/")
                          ? "text-[#1732BD] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 flex-shrink-0" />
                    </Link>

                    {/* Dropdown Menu */}
                    {isSolutionsHovered && (
                      <div className="absolute top-[20px] left-[200px] pt-2 z-50 -translate-x-1/2" onMouseEnter={handleSolutionsMouseEnter} onMouseLeave={handleSolutionsMouseLeave}>
                        <div className="w-[calc(100vw-4rem)] max-w-[1000px] bg-white border border-gray-200 rounded-xl shadow-xl py-4 animate-fade-in">
                          <div className="grid grid-cols-3 gap-3 px-2">
                            {solutions.map((solution) => {
                              const IconComponent = solution.icon;
                              return (
                                <Link
                                  key={solution.slug}
                                  href={`/solutions/${solution.slug}`}
                                  className="flex items-start gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group rounded-lg mx-1"
                                  prefetch={true}
                                >
                                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${solution.color} bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-gray-100`}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-sm text-gray-900 group-hover:text-[#1732BD] transition-colors mb-1">
                                      {solution.title}
                                    </div>
                                    <div className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                      {solution.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    prefetch={true}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      pathname === link.path
                        ? "text-[#1732BD] font-semibold"
                        : "text-gray-700 hover:text-[#1732BD]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Contact Us and Login Buttons - Right side */}
            <div className="hidden lg:flex items-center gap-3 z-10 flex-shrink-0 ml-auto">

              <Button
                size="sm"
                variant="outline"
                asChild
                className={`whitespace-nowrap rounded-full px-5 font-medium text-sm transition-all duration-300 ${
                  isAboutPage && !isScrolled
                    ? "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] hover:text-white hover:border-transparent"
                }`}
              >
                <a href="https://app.zapeera.com/" target="_blank" rel="noopener noreferrer">Login</a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                asChild
                className={`border-gray-300 text-white bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:text-white hover:border-transparent whitespace-nowrap rounded-full px-5 font-medium text-sm transition-all duration-300`}
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden p-2 -mr-2 flex-shrink-0 z-10 ml-auto ${
                isAboutPage && !isScrolled ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              {...(isMobileMenuOpen ? { 'aria-expanded': 'true' } : { 'aria-expanded': 'false' })}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      </Container>
    </nav>

    {/* Mobile Menu - Outside nav to avoid z-index issues */}
    {isMobileMenuOpen && (
      <div
        className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-[100] overflow-y-auto shadow-2xl"
      >
        <div
          className="w-full min-h-full bg-white animate-fade-in pt-6 pb-8"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4">
                {navLinks.map((link) => (
                  link.name === "Solutions" ? (
                    <div key={link.path} className="w-full">
                      <button
                        onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                        className={`w-full flex items-center justify-between text-base sm:text-lg font-semibold px-2 sm:px-4 py-3 sm:py-3.5 transition-all duration-200 rounded-lg ${
                        pathname === link.path || pathname?.startsWith("/solutions/")
                            ? "text-[#1732BD] bg-[#1732BD]/10"
                            : "text-gray-900 hover:text-[#1732BD] hover:bg-gray-100"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileSolutionsOpen && (
                        <div className="flex flex-col gap-1.5 sm:gap-2 ml-4 sm:ml-6 mt-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            prefetch={true}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileSolutionsOpen(false);
                              }}
                            className={`px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200 rounded-lg ${
                              pathname === `/solutions/${solution.slug}`
                                ? "text-[#1732BD] bg-[#1732BD]/10 font-semibold"
                                : "text-gray-700 hover:text-[#1732BD] hover:bg-gray-100"
                            }`}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-2 sm:px-4 py-3 sm:py-3.5 text-base sm:text-lg font-semibold transition-all duration-200 rounded-lg ${
                        pathname === link.path
                          ? "text-[#1732BD] bg-[#1732BD]/10"
                          : "text-gray-900 hover:text-[#1732BD] hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}

                {/* Mobile CTA Buttons */}
                <div className="px-2 sm:px-4 pt-4 sm:pt-6 mt-4 border-t border-gray-200 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-base sm:text-lg rounded-full border-gray-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.open('https://app.zapeera.com/', '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#22D5C7] to-[#1732BD] hover:opacity-90 text-white text-base sm:text-lg rounded-full"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/contact-us" className="w-full">Contact Us </Link>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Quote Modal */}
    <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
      <DialogContent className="sm:max-w-[600px]">
        {!isQuoteSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">Get A Free Quote</DialogTitle>
              <DialogDescription className="text-gray-600">
                Fill out the form below and we'll get back to you with a customized quote for your business.
              </DialogDescription>
            </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here
              console.log('Quote form submitted:', quoteFormData);
              // You can add API call here
              setIsQuoteSubmitted(true);
            }}
            className="space-y-4 mt-4"
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={quoteFormData.name}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={quoteFormData.email}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                required
                value={quoteFormData.phone}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                placeholder="+1 234 567 8900"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                value={quoteFormData.company}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, company: e.target.value })}
                placeholder="Your Company"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message / Requirements
            </label>
            <Textarea
              id="message"
              value={quoteFormData.message}
              onChange={(e) => setQuoteFormData({ ...quoteFormData, message: e.target.value })}
              placeholder="Tell us about your business requirements..."
              className="w-full min-h-[120px]"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white"
            >
              Submit Quote Request
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsQuoteModalOpen(false)}
              className="px-6"
            >
              Cancel
            </Button>
          </div>
        </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We've received your quote request. Our team will review your information and get back to you within 24-48 hours.
            </p>
            <Button
              onClick={() => setIsQuoteModalOpen(false)}
              className="bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white px-8"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Navigation;