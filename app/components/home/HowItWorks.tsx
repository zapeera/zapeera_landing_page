'use client'

import { useTranslations } from "next-intl";
import Container from "../ui/container";

const HowItWorks = () => {
  const t = useTranslations("home.howItWorks");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">{t("heading")}</h2>
            <p className="section-paragraph">{t("lead")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-4 text-start md:text-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full hidden md:flex items-center justify-center mx-auto mb-4 bg-accent-50 border-2 border-primary-600/30">
                    <span className="md:text-xl text-sm md:font-bold font-medium text-black">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold text-black md:hidden">
                    {index + 1}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="card-heading">{step.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
