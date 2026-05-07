"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen pt-12 flex flex-col items-center overflow-hidden bg-white">
      {/* Full section gradient background */}
      <div className="absolute inset-0 bg-hero-glow blur-lg pointer-events-none"></div>

      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-dotted-texture pointer-events-none opacity-40"></div>

      <Container className="relative z-10" size="xl" padding="none">
        <div className=" ">
          <div className="flex flex-col items-center justify-center pt-16  sm:pt-20  md:pt-24  lg:pt-24 xl:pt-24 2xl:pt-28 ">
            {/* Centered Content */}
            <div className="text-center px-2  mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-12">
              {/* Main Heading */}
              <h1 className=" section-heading-h1 tracking-tight text-gray-900 font-montserrat  md:mb-4 mb-2 ">
              A Business Management Platform <br className="hidden md:block"/> You Can Depend On
              </h1>

              <p className="text-body-lg lg:text-2xl text-neutral-600 max-w-[1040px] mx-auto leading-6 md:leading-8 font-montserrat font-normal mb-6 md:mb-8">
              Zapeera is a powerful cloud-based business management and POS system designed for pharmacies, retail stores, restaurants, and wholesalers. Manage inventory, branches, staff, and sales effortlessly online or offline and keep your operations running smoothly
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-2 sm:gap-2.5 justify-center items-center">
                <Button
                  size="default"
                  className="bg-gradient-to-r from-accent-400 to-primary-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base px-4 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-6 py-2.5 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-2.5 2xl:py-3 rounded-full font-semibold"
                  asChild
                >
                  <a href="https://app.zapeera.com/" target="_blank" rel="noopener noreferrer">
                    Login to Dashboard
                  </a>
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-accent-400 hover:to-primary-600 text-gray-700 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base px-4 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-6 py-2.5 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-2.5 2xl:py-3 rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link href="/contact-us">
                  Request a Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full max-w-4xl xl:max-w-5xl mx-auto ">
              <div className="relative w-full aspect-video  bg-transparent overflow-hidden ">
                <Image
                  src="/images/hero.jpeg"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover rounded-t-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
