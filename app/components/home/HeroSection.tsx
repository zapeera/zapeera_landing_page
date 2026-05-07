"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-12 flex flex-col items-center overflow-hidden bg-cream">
      <Container className="relative z-10" size="xl" padding="none">
        <div className="flex flex-col items-center justify-center pt-20 md:pt-28 lg:pt-32">
          {/* Centered Content */}
          <div className="text-center max-w-4xl mx-auto px-2 mb-12 md:mb-16">
            {/* Main Heading */}
            <h1 className="text-display text-neutral-900 font-montserrat mb-6 md:mb-8">
              A Business Management Platform
              <br />
              You Can <em className="italic font-bold text-primary-700">Depend On</em>
            </h1>

            <p className="text-body-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-montserrat font-normal mb-10 md:mb-12">
              Zapeera is a powerful cloud-based business management and POS system designed for pharmacies, retail stores, restaurants, and wholesalers. Manage inventory, branches, staff, and sales effortlessly online or offline and keep your operations running smoothly
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7 shadow-sm"
                asChild
              >
                <a href="https://app.zapeera.com/" target="_blank" rel="noopener noreferrer">
                  Login to Dashboard
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-7"
                asChild
              >
                <Link href="/contact-us">Request a Demo</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Image — real product screenshot, neutral framing, no environmental context. */}
          <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4">
            <div className="relative w-full aspect-[1800/1037] overflow-hidden rounded-t-2xl border border-neutral-200 shadow-xl bg-white">
              <Image
                src="/images/dashboard.png"
                alt="Zapeera dashboard preview"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
