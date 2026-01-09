import { memo } from 'react';
import type { Metadata } from 'next';
import FloatingCTA from "@/app/components/FloatingCTA";
import { Target, Eye, Users, Award } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

export const metadata: Metadata = {
  title: 'About Us - Zapeera Team & Mission',
  description: 'Meet the Zapeera team behind the unified business management platform. Learn about our mission to transform how businesses operate with intelligent, accessible technology.',
  keywords: [
    'about zapeera',
    'zapeera team',
    'business management team',
    'company mission',
    'leadership team',
    'business software company'
  ],
  openGraph: {
    title: 'About Us - Zapeera Team & Mission',
    description: 'Meet the Zapeera team behind the unified business management platform. Learn about our mission to transform how businesses operate.',
    url: 'https://zapeera.com/about',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/about',
  },
};

const About = memo(() => {
  const team = [
    {
      name: "Muhammad Majid",
      role: "CEO & Founder",
      image: "/images/mjid.png",//images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=fac",
      bio: "Visionary leader with 15+ years in business management",
      linkedin: "#"
    },
    {
      name: "Muhammad Khan",
      role: "CTO & Co-Founder",
      image: "",
      bio: "Tech innovator specializing in scalable solutions",
      linkedin: "#"
    },
    {
      name: "Muhammad Bilal",
      role: "Head of Product",
      image: "/images/don.jpeg",
      bio: "Product strategist focused on user experience",
      linkedin: "#"
    },
    {
      name: "Muhammad Umair",
      role: "Full Stack Developer",
      image: "/images/umair.jpeg",
      bio: "Engineering excellence and team leadership",
      linkedin: "#"
    },
    {
      name: "Ali Mahtab",
      role: "Head of Design",
      image: "/images/ali.jpeg",
      bio: "Creative director with passion for beautiful interfaces",
      linkedin: "#"
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded by two entrepreneurs who experienced firsthand the challenges of managing multi-location businesses.",
    },
    {
      year: "2020",
      title: "First 100 Customers",
      description: "Launched our MVP and quickly gained traction with small retail businesses looking for better solutions.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $10M to expand our team and develop advanced features including AI-powered insights.",
    },
    {
      year: "2022",
      title: "1,000+ Businesses",
      description: "Crossed the milestone of serving over 1,000 businesses across multiple industries and countries.",
    },
    {
      year: "2023",
      title: "Enterprise Launch",
      description: "Introduced enterprise-grade features including white-labeling and advanced security controls.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Now serving 5,000+ businesses worldwide with 24/7 support in multiple languages.",
    },
  ];

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Modernizing How{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Businesses Operate
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're on a mission to empower businesses of all sizes with intelligent, accessible technology.
              </p>
            </div>
          </div>
        </section>

        {/* All Sections Below Banner */}
        <div className="flex flex-col bg-gradient-to-br from-primary/5 to-secondary/ py-10 gap-10 md:gap-40">
          {/* Story Section */}
          <section>
            <Container>
              <div className="max-w-4xl md:pt-[50px] pt-[30px] mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Our Story</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    Zapeera was born from a simple observation: business management software was either too complex, too expensive, or too rigid for most businesses. Our founders, having run multi-location retail chains themselves, knew there had to be a better way.
                  </p>
                  <p>
                    In 2019, we set out to build the platform we wished we had—one that would be powerful enough for large enterprises yet simple enough for small businesses. A system that would work seamlessly across locations, provide real-time insights, and scale effortlessly as businesses grew.
                  </p>
                  <p>
                    Today, Zapeera serves thousands of businesses worldwide, from single-location startups to multi-national enterprises. But our mission remains the same: to help every business reach its full potential through intelligent, accessible technology.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Vision & Mission */}
          <section className="bg-muted/30">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                <Card className="p-8 lg:p-12 border-2 border-border">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To make every business intelligent and connected, empowering entrepreneurs worldwide to focus on what they do best—serving their customers and growing their dreams.
                  </p>
                </Card>

                <Card className="p-8 lg:p-12 border-2 border-border">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide businesses with an all-in-one management platform that's powerful, intuitive, and accessible—enabling them to operate more efficiently and make smarter decisions.
                  </p>
                </Card>
              </div>
            </Container>
          </section>

          {/* Timeline */}
          <section>
            <Container>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center">Our Journey</h2>

              <div className="max-w-4xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } items-center gap-8 animate-fade-in`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-primary flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                        <Card className="p-6 border-2 border-border ml-12 md:ml-0">
                          <div className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                      </div>

                      <div className="hidden md:block flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Team Section */}
          <section className="">
            <Container>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Meet Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {" "}Leadership Team
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A diverse group of passionate individuals working to transform business management across Pakistan and beyond.
                </p>
              </div>

              {/* CEO Section - Special Layout */}
              <div className="max-w-4xl mx-auto mb-20">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white/30">
                      <Image
                        src={team[0].image}
                        alt={team[0].name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
                        CEO & Founder
                      </div>
                      <h3 className="text-3xl font-bold mb-3">{team[0].name}</h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-4">{team[0].bio}</p>
                      <div className="flex justify-center lg:justify-start gap-4">
                        <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-all duration-300">
                          LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Team Members */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {team.slice(1).map((member, index) => (
                  <Card
                    key={index}
                    className="group relative p-0 text-center border-0 hover:shadow-2xl transition-all duration-700 animate-fade-in bg-transparent overflow-hidden"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>

                    {/* Main Content */}
                    <div className="relative z-10 p-8">
                      {/* Profile Image with Enhanced Styling */}
                      <div className="relative mb-8">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto group-hover:scale-110 transition-all duration-500 ring-4 ring-primary/20 group-hover:ring-primary/40 shadow-lg group-hover:shadow-xl">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
                        <div className="absolute -top-2 -right-6 w-4 h-4 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                      </div>

                      {/* Name with Enhanced Typography */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform">
                        {member.name}
                      </h3>

                      {/* Role Badge with Gradient */}
                      <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                        {member.role}
                      </div>

                      {/* Bio with Better Styling */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                        {member.bio}
                      </p>

                      {/* Enhanced Connect Button */}
                      <button className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary text-primary hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 transform border border-primary/20 group-hover:border-transparent">
                        Connect on LinkedIn
                      </button>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                  </Card>
                ))}
              </div>

              {/* Team Stats */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Countries Represented</div>
                </div>
              </div>
            </Container>
          </section>

          {/* Values Section */}
          <section>
            <Container>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center">Our Values</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, title: "Customer First", desc: "Every decision starts with our users" },
                  { icon: Award, title: "Excellence", desc: "We strive for quality in everything" },
                  { icon: Target, title: "Innovation", desc: "Constantly improving and evolving" },
                  { icon: Eye, title: "Transparency", desc: "Honest and open communication" },
                ].map((value, index) => (
                  <Card key={index} className="p-6 text-center border-2 border-border">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </div>
        </main>
      </div>
    </Loading>
  );
});

About.displayName = 'About';

export default About;
