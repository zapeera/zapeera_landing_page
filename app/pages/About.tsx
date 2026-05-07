import { memo } from 'react';
import FloatingCTA from "@/app/components/FloatingCTA";
import { Target, Eye } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const About = memo(() => {
  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
          {/* Hero Section with Gradient Background */}
          <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-cream">
            <Container className="relative z-10" size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="section-heading-h1 tracking-tight text-neutral-900 font-montserrat mb-6">
                    About Zapeera
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                    A small Pakistani team building cloud software for Pakistani pharmacies. Honest about what we have shipped and what is still coming.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Our Story Section */}
          <section className="py-12 md:py-24 bg-white">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Team Photo */}
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero.webp"
                      alt="Zapeera pharmacy dashboard"
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>

                  {/* Right Side - Our Story */}
                  <div className="space-y-6">
                    <h2 className="section-heading text-left">
                      Our story
                    </h2>
                    <div className="space-y-4">
                      <p className="section-paragraph text-left mb-0">
                        We are a small Pakistani team. We spent the last year sitting with pharmacy owners in Lahore and Karachi, watching how a real shop runs from open to close, and listening to what is actually broken versus what is just annoying.
                      </p>
                      <p className="section-paragraph text-left mb-0">
                        The pattern was the same everywhere. Expired medicines piling up in a corner because nobody had time to track 90-day windows. Stock numbers that did not match the shelf because the till and the inventory book were two different worlds. End-of-day hisaab on a calculator at 11pm.
                      </p>
                      <p className="section-paragraph text-left mb-0">
                        International POS software is built for chains and priced in dollars. Local desktop software is stuck in 2010. Zapeera sits between the two — modern cloud software, built in Pakistan, priced in PKR, supported on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Where we are heading */}
          <section className="py-12 md:py-20 bg-primary-50">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <h2 className="section-heading text-center mb-12">
                  Where we are heading
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <Card className="p-8 lg:p-10 border-0 bg-primary-600">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h2 font-medium text-white mb-4">The first 50</h3>
                    <p className="text-white/90 leading-relaxed">
                      Our goal for this year is 50 paying pharmacies running Zapeera daily — in Lahore and Karachi first. Not 500, not 5,000. Fifty pharmacies we support personally, who tell us what to fix next.
                    </p>
                  </Card>

                  <Card className="p-8 lg:p-10 border-0 bg-white">
                    <div className="w-16 h-16 rounded-full bg-primary-600/10 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-h2 font-medium text-neutral-900 mb-4">What we are building next</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Roman Urdu and Urdu interface. Better expiry analytics. Native WhatsApp ordering for repeat customers. We ship in small steps and tell you when something is actually ready, not before.
                    </p>
                  </Card>
                </div>
              </div>
            </Container>
          </section>

          {/* Team Section — honest, name-free until we are ready to publish names + bios */}
          <section className="py-12 md:py-20 bg-primary-50">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="section-heading">The team</h2>
                  <p className="section-paragraph">
                    A small Pakistani team — engineers, designers, and people who have spent time on the pharmacy side of the counter. Names and roles will go up here when we are ready to put them up properly.
                  </p>
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
