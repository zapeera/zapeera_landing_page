"use client";

import { memo } from 'react';
import { useTranslations } from "next-intl";
import FloatingCTA from "@/app/components/FloatingCTA";
import { Target, Eye } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const About = memo(() => {
  const t = useTranslations("about");

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
          {/* Hero */}
          <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-cream">
            <Container className="relative z-10" size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="section-heading-h1 tracking-tight text-neutral-900 font-montserrat mb-6">
                    {t("heroH1")}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                    {t("heroLead")}
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Our Story */}
          <section className="py-12 md:py-24 bg-white">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero.webp"
                      alt={t("story.imageAlt")}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <h2 className="section-heading text-start">{t("story.heading")}</h2>
                    <div className="space-y-4">
                      <p className="section-paragraph text-start mb-0">{t("story.p1")}</p>
                      <p className="section-paragraph text-start mb-0">{t("story.p2")}</p>
                      <p className="section-paragraph text-start mb-0">{t("story.p3")}</p>
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
                <h2 className="section-heading text-center mb-12">{t("heading.heading")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <Card className="p-8 lg:p-10 border-0 bg-primary-600">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h2 font-medium text-white mb-4">{t("heading.first50Title")}</h3>
                    <p className="text-white/90 leading-relaxed">{t("heading.first50Body")}</p>
                  </Card>

                  <Card className="p-8 lg:p-10 border-0 bg-white">
                    <div className="w-16 h-16 rounded-full bg-primary-600/10 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-h2 font-medium text-neutral-900 mb-4">{t("heading.buildingTitle")}</h3>
                    <p className="text-neutral-700 leading-relaxed">{t("heading.buildingBody")}</p>
                  </Card>
                </div>
              </div>
            </Container>
          </section>

          {/* Team */}
          <section className="py-12 md:py-20 bg-primary-50">
            <Container size="xl" padding="none">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="section-heading">{t("team.heading")}</h2>
                  <p className="section-paragraph">{t("team.lead")}</p>
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
