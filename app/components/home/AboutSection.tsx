'use client'

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../ui/container";

const AboutSection = () => {
  const t = useTranslations("home.about");
  const items = t.raw("items") as Array<{ title: string; body: string }>;

  return (
    <section className="bg-white py-20 md:py-32">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/whychose/business-management-platform.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover shadow-2xl"
              />
            </div>

            <div className="space-y-6 md:pb-0 pb-5">
              <div>
                <h2 className="section-heading">{t("heading")}</h2>
                <p className="section-paragraph">{t("lead")}</p>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="card-heading">{item.title}</h3>
                      <p className="text-body text-neutral-700">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
