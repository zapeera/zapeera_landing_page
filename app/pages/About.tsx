"use client";

'use client'

import { memo, useState, useEffect } from 'react';
import FloatingCTA from "@/app/components/FloatingCTA";
import { Target, Eye, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const About = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset index when screen size changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const leadership = [
    {
      name: "Mr. Muhammad Majid",
      role: "CEO & Co-Founder",
      image: "/team-images/Mr Muhammad Majid.jpeg",
      bio: "With over 15 years in enterprise software, Muhammad leads our strategic vision and fosters a culture of innovation and inclusivity.",
      linkedin: "#"
    },
    {
      name: "Mr. Muhammad Umair",
      role: "CTO & Co-Founder",
      image: "/team-images/Mr. Muhammad Umair.png",
      bio: "Muhammad is the architect behind our core platform, specializing in scalable cloud infrastructures and distributed systems.",
      linkedin: "#"
    },
    {
      name: "Mr. Muhammad Bilal",
      role: "Head of Product",
      image: "/team-images/Muhammad Bilal.jpeg",
      bio: "Product strategist focused on user experience and delivering solutions that truly make a difference.",
      linkedin: "#"
    },
    {
      name: "Mr. Ali Mahtab",
      role: "Head of Design",
      image: "/team-images/Mr. Ali Mehtab.png",
      bio: "Creative director with passion for beautiful interfaces and exceptional user experiences.",
      linkedin: "#"
    },
  ];

  // milestones of success
  const milestones = [
    {
      year: "2023",
      title: "Innovation",
      description: "Launched our flagship AI-driven analytics suite for enterprise clients.",
    },
    {
      year: "2024",
      title: "Scale",
      description: "Reached a milestone of 500+ active enterprise partners worldwide.",
    },
    {
      year: "2025",
      title: "Excellence",
      description: "Awarded \"Best SaaS Platform of the Year\" by the Global Tech Association.",
    },
    {
      year: "2026",
      title: "Vision 2026",
      description: "Future-proofing our core architecture for the next decade of growth.",
    },
  ];

  const cardsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(leadership.length / cardsPerSlide);

  const nextLeader = () => {
    const maxIndex = totalSlides - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevLeader = () => {
    const maxIndex = totalSlides - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleLeaders = () => {
    const start = currentIndex * cardsPerSlide;
    return leadership.slice(start, start + cardsPerSlide);
  };

  const canGoNext = currentIndex < totalSlides - 1;
  const canGoPrev = currentIndex > 0;

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
          {/* Hero Section with Gradient Background */}
          <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
            {/* Full section gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_85%_at_center,rgba(41,205,207,0.18)_0%,rgba(41,205,207,0.14)_10%,rgba(41,205,207,0.11)_20%,rgba(38,210,198,0.10)_32%,rgba(25,71,196,0.09)_45%,rgba(25,71,196,0.13)_58%,rgba(25,71,196,0.12)_70%,rgba(25,71,196,0.09)_80%,rgba(25,71,196,0.05)_88%,rgba(25,71,196,0.03)_94%,rgba(25,71,196,0.015)_98%,transparent_100%)] blur-lg pointer-events-none"></div>

            {/* Subtle texture background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none opacity-40"></div>

            {/* Content */}
            <Container className="relative z-10" size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="section-heading-h1 tracking-tight text-gray-900 font-montserrat mb-6">
                    About Zapeera
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Empowering businesses with intelligent solutions. We're building the future of business management, one innovation at a time.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Our Story Section */}
          <section className="lg:py-[80px] py-[40px] bg-white">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Team Photo */}
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero.jpeg"
                      alt="Zapeera Team"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Side - Our Story */}
                  <div className="space-y-6">
                    <h2 className="section-heading text-left">
                      Our Story
                    </h2>
                    <div className="space-y-4">
                      <p className="section-paragraph text-left mb-0">
                        We started with a unique vision to answer one question: how can we make business operations simpler, more efficient, and more accessible? Our journey began with a commitment to deliver solutions that empower business owners and help them master their operations.
                      </p>
                      <p className="section-paragraph text-left mb-0">
                        From day one, we've focused on creating intuitive software that adapts to your business needs, not the other way around. Our team of passionate developers, designers, and business experts work tirelessly to ensure every feature serves a real purpose.
                      </p>
                      <p className="section-paragraph text-left mb-0">
                        Today, Zapeera stands as a testament to our commitment—helping thousands of businesses across Pakistan streamline their operations, reduce costs, and focus on what matters most: growing their business and serving their customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Vision & Mission Section */}
          <section className="lg:py-[80px] py-[40px]" style={{ backgroundColor: 'rgb(239 246 255)' }}>
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <h2 className="section-heading text-center mb-12">
                  Our Vision & Mission
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {/* Vision Card - Blue Background */}
                  <Card className="p-8 lg:p-10 border-0" style={{ backgroundColor: '#1947C4' }}>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[32px] font-medium text-white mb-4">Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      We envision a future where every business, regardless of size, has access to intelligent solutions that enable seamless operations and continuous growth. Our goal is to empower entrepreneurs to focus on what they do best—serving their customers and building their dreams.
                  </p>
                </Card>

                  {/* Mission Card - Gradient Background */}
                  <Card className="p-8 lg:p-10 border-0 bg-gradient-to-br from-[#26D2C6]/20 via-white to-[#1C22AA]/20">
                    <div className="w-16 h-16 rounded-full bg-[#1947C4]/10 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-[#1947C4]" />
                  </div>
                    <h3 className="text-[32px] font-medium text-gray-900 mb-4">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to providing businesses with an all-in-one management platform that's powerful, intuitive, and accessible. Our mission is to enable businesses to operate more efficiently, make smarter decisions, and scale effortlessly as they grow.
                  </p>
                </Card>
                </div>
              </div>
            </Container>
          </section>

          {/* Milestones Section */}
          <section className="lg:py-[80px] py-[40px] bg-white">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center mb-12">
                  <h2 className="section-heading">
                    Milestones of Success
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {milestones.map((milestone, index) => (
                    <Card
                      key={index}
                      className="p-6 border-t-4 border-[#1947C4] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[220px]"
                    >
                      <div className="text-[32px] font-medium text-[#1947C4] mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="card-heading mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                        </Card>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Leadership Section */}
          <section className="lg:py-[80px] py-[40px]" style={{ backgroundColor: 'rgb(239 246 255)' }}>
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="section-heading">
                    Leadership
                </h2>
                  <p className="section-paragraph">
                    Meet the visionaries guiding Zapeera towards a smarter future.
                </p>
              </div>

                <div className="relative max-w-6xl mx-auto">
                  {/* Left Navigation Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevLeader}
                    disabled={!canGoPrev}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {/* Slider Container */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                        const startIndex = slideIndex * cardsPerSlide;
                        const slideLeaders = leadership.slice(startIndex, startIndex + cardsPerSlide);

                        return (
                          <div
                            key={slideIndex}
                            className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-2"
                          >
                            {slideLeaders.map((leader, cardIndex) => (
                              <Card
                                key={startIndex + cardIndex}
                                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full"
                              >
                                <div className="flex flex-col md:flex-row gap-6 h-full">
                                  {/* Profile Image - Left Side with Padding */}
                                  <div className="flex-shrink-0">
                                    <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[170px] rounded-lg overflow-hidden">
                      <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover"
                      />
                    </div>
                                  </div>

                                  {/* Content - Right Side */}
                                  <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                      <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                          <h3 className="card-heading mb-1">
                                            {leader.name}
                                          </h3>
                                          <p className="text-sm font-medium text-[#1947C4] mb-3">
                                            {leader.role}
                                          </p>
                                        </div>
                                        <a
                                          href={leader.linkedin}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="w-10 h-10 rounded-lg bg-[#1947C4] flex items-center justify-center hover:bg-[#1732BD] transition-colors flex-shrink-0 ml-4"
                                        >
                                          <Linkedin className="w-5 h-5 text-white" />
                                        </a>
                      </div>
                                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {leader.bio}
                                      </p>
                      </div>
                    </div>
                  </div>
                              </Card>
                            ))}
                            {/* Fill empty space if odd number of cards */}
                            {slideLeaders.length === 1 && (
                              <div className="hidden md:block"></div>
                            )}
                      </div>
                        );
                      })}
                </div>
              </div>

                  {/* Right Navigation Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextLeader}
                    disabled={!canGoNext}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>

                  {/* Dots indicator and mobile buttons */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevLeader}
                      disabled={!canGoPrev}
                      className="rounded-full md:hidden disabled:opacity-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>

                    {/* Dots indicator */}
                    <div className="flex gap-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-[#1947C4] w-8"
                              : "bg-gray-300 w-2"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextLeader}
                      disabled={!canGoNext}
                      className="rounded-full md:hidden disabled:opacity-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </Loading>
  );
});

About.displayName = 'About';

export default About;
