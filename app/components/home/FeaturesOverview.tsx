'use client'

import Image from "next/image";
import Container from "../ui/container";

const FeaturesOverview = () => {
  const features = [
    {
      title: "Expiry tracking that actually works",
      description:
        "Get alerts at 90, 60, and 30 days before any medicine expires. Return to the supplier on time, mark batches that cannot be returned, and stop throwing money in the bin every quarter.",
      image: "/icon-image/batch-and-expiry-tracking.png",
    },
    {
      title: "Inventory you can trust",
      description:
        "Know exactly what is on the shelf, what is in the back, and what is running low — across one shop or three. Barcode scan when stock comes in, scan again at the till. The numbers match without anyone counting at midnight.",
      image: "/icon-image/product-and-category-management.png",
    },
    {
      title: "Reports that tell you what to do next",
      description:
        "See which medicines actually make profit, which are dead stock, and which customers come back. End-of-day reports take 5 seconds, not an hour with a calculator.",
      image: "/icon-image/business-insights-and-dashboard.png",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-primary-50">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">
              Three things Zapeera does well
            </h2>
            <p className="section-paragraph">
              We did not build 50 features. We built the three a Pakistani pharmacy actually needs and made them work properly.
            </p>
          </div>

          {/* Features Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-600/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 mb-5 flex items-center justify-start">
                  <Image
                    src={feature.image}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <h3 className="card-heading">{feature.title}</h3>

                <p className="text-body text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
