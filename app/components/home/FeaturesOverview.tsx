'use client'

import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../ui/container";

// Icon images stay paired by index — keys in messages match the icon order.
const icons = [
  "/icon-image/batch-and-expiry-tracking.png",
  "/icon-image/product-and-category-management.png",
  "/icon-image/business-insights-and-dashboard.png",
];

const FeaturesOverview = () => {
  const t = useTranslations("home.featuresOverview");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="py-20 md:py-32 bg-primary-50">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">{t("heading")}</h2>
            <p className="section-paragraph">{t("lead")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-start">
                  <Image
                    src={icons[idx] ?? icons[0]}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <h3 className="card-heading">{feature.title}</h3>
                <p className="text-body text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
