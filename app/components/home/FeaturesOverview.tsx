'use client'

import Image from "next/image";
import Container from "../ui/container";

const FeaturesOverview = () => {

  const features = [
    {
      title: "Product & Category Management",
      description: "Organize products by category, brand, or type for faster billing and better inventory control.",
      image: "/icon-image/product-and-category-management.png",
    },
    {
      title: "Supplier & Manufacturer Management",
      description: "Maintain supplier records, purchase history, and pricing to streamline procurement.",
      image: "/icon-image/suppliers-and-manufacturers.png",
    },
    {
      title: "Purchase Order Automation",
      description: "Generate and track purchase orders automatically based on stock levels and demand.",
      image: "/icon-image/purchase-order-automation.png",
    },
    {
      title: "Batch & Expiry Tracking",
      description: "Monitor batch numbers and expiry dates to reduce losses and ensure compliance.",
      image: "/icon-image/batch-and-expiry-tracking.png",
    },
    {
      title: "Customer Management (CRM)",
      description: "Store customer details, track purchase history, and manage returns and refunds easily.",
      image: "/icon-image/customer-management.png",
    },
    {
      title: "Smart Billing & Invoicing",
      description: "Create accurate invoices instantly with taxes, discounts, and multiple payment options.",
      image: "/icon-image/smart-billing-and-invoicing.png",
    },
    {
      title: "Role-Based Access Control",
      description: "Control system access by assigning permissions based on staff roles and responsibilities.",
      image: "/icon-image/role-base-access-control.png",
    },
    {
      title: "Business Insights Dashboard",
      description: "View real-time sales, inventory, and performance metrics from a single dashboard.",
      image: "/icon-image/business-insights-and-dashboard.png",
    },
  ];

  return (
    <section className="lg:pt-[80px] pt-[40px] md:pb-[85px] pb-[45px] gradient-to-br from-[#26D2C6]/15 via-white to-[#1C22AA]/15" style={{ backgroundColor: 'rgb(239 246 255)' }}>
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center ">
            <h2 className="section-heading">
              Powerful Features That Simplify <br className="hidden md:inline"/> Business Management
            </h2>
            <p className="section-paragraph max-w-4xl mx-auto">
              Everything you need to manage inventory, billing, suppliers, staff, and reporting — all built into one cloud-based POS and business management platform.
            </p>
          </div>

          {/* Features Grid - 4 Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[60px] xl:h-[60px] 2xl:h-[60px] mb-4 flex items-center justify-start">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* Title */}
                <h3 className="card-heading">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
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
