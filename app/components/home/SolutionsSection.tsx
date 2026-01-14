'use client'

import Image from "next/image";
import Container from "../ui/container";

const SolutionsSection = () => {

  const solutions = [
    {
      title: "Inventory Management",
      description: "Track stock levels in real time across branches, manage suppliers, and automate purchasing with smart low-stock alerts using Zapeera's inventory management software.",
      image: "/images/Retail POS.jpeg",
    },
    {
      title: "Point of Sale (POS)",
      description: "Process sales faster with a reliable cloud-based POS system. Handle billing, customers, discounts, and multiple payment methods from any device.",
      image: "/images/business.webp",
    },
    {
      title: "Staff & Shift Management",
      description: "Manage your team efficiently by assigning roles, tracking shifts, monitoring performance, and controlling access across branches — all from one dashboard.",
      image: "/images/staff.jpeg",
    },
    {
      title: "Reports & Analytics",
      description: "Get real-time insights into sales, inventory, and performance. Make data-driven decisions with advanced reports and dashboards built for modern businesses.",
      image: "/images/smart_invoice.jpeg",
    },
  ];

  return (
    <section className="bg-white lg:pt-[85px] pt-[40px] md:pb-[90px] pb-[45px]">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mx-auto">
            <h2 className="section-heading ">
              Business Tools to Run Everything <br className="hidden md:inline"/> in One Place
            </h2>
            <p className="section-paragraph max-w-4xl mx-auto">
              Powerful, easy-to-use tools built into Zapeera's cloud-based POS and business management software  to simplify daily operations and scale with your growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white h-full rounded-2xl p-3 border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-32 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="card-heading">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;