"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, AlertCircle, ShoppingCart, Shield, Boxes, Zap, FolderTree, BarChart, RefreshCw, Smartphone, Tag, TrendingUp, FileText, Users, Warehouse, GitBranch, UtensilsCrossed, Menu, Receipt, Phone } from "lucide-react";
import Container from "../ui/container";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("Pharmacy");

  const tabContent = {
    Pharmacy: {
      title: "Pharmacy Management Software",
      description: "A complete pharmacy POS and inventory solution. Handle drug batches and expiry dates, scan prescriptions, and comply with regulations. Zapeera is among the best pharmacy software in Pakistan for keeping inventory accurate and patients safe.",
      image: "/whychose/pharmacy-management-software.webp",
      features: [
        {
          icon: Package,
          title: "Medicine Inventory",
          description: "Track medicine stock, batches, and quantities in real time across counters and branches.",
        },
        {
          icon: AlertCircle,
          title: "Expiry & Batch Tracking",
          description: "Automated expiry alerts help reduce losses and ensure patient safety.",
        },
        {
          icon: ShoppingCart,
          title: "Pharmacy POS Billing",
          description: "Fast, error-free billing with barcode scanning and multiple payment methods.",
        },
        {
          icon: Shield,
          title: "Regulatory-Friendly",
          description: "Designed to support pharmacy workflows and compliance needs in Pakistan.",
        },
      ],
    },
    Departmental: {
      title: "Departmental Store Management",
      description: "Powerful business management software for high-volume, multi-category stores.",
      image: "/whychose/departmental-store-software.webp",
      features: [
        {
          icon: Boxes,
          title: "Centralized Inventory ",
          description: "Manage thousands of products with real-time stock visibility.",
        },
        {
          icon: Zap,
          title: "Fast Checkout POS",
          description: "Speed up billing during peak hours with a reliable cloud-based POS system.",
        },
        {
          icon: FolderTree,
          title: "Category & Shelf ",
          description: "Organize products by category, brand, or shelf for better control.",
        },
        {
          icon: BarChart,
          title: "Sales & Profit Reports",
          description: "Track daily sales, margins, and top-selling products instantly.",
        },
      ],
    },
    Retail: {
      title: "Retail POS System",
      description: "Manage products, pricing, and promotions easily. Accept payments at multiple counters or devices and track stock levels across all outlets. Zapeera's cloud POS system syncs inventory in real time, so you never run out of popular items.",
      image: "/whychose/retail-tore-software-2.webp",
      features: [
        {
          icon: RefreshCw,
          title: "Real-Time Stock Sync",
          description: "Inventory automatically syncs across all outlets and devices.",
        },
        {
          icon: Smartphone,
          title: "Multi-Device POS",
          description: "Accept payments from multiple counters using one system.",
        },
        {
          icon: Tag,
          title: "Discounts & Promotions",
          description: "Easily run offers, price rules, and seasonal promotions.",
        },
        {
          icon: TrendingUp,
          title: "Retail Analytics ",
          description: "Monitor sales trends and business performance in real time.",
        },
      ],
    },
    Wholesale: {
      title: "Wholesale & Distribution Management",
      description: "Streamline your wholesale or distribution business with powerful inventory and order features. Create bulk purchase orders, set tiered pricing, and manage multiple warehouses. Zapeera's cloud POS ensures stock and sales sync across branches in real time, so your supply chain never skips a beat.",
      image: "/whychose/whoresale-and-distributors.webp",
      features: [
        {
          icon: FileText,
          title: "Bulk Purchase Orders",
          description: "Create and manage large purchase and sales orders with ease.",
        },
        {
          icon: Users,
          title: "Supplier & Manufacturer ",
          description: "Maintain supplier records, pricing, and purchase history.",
        },
        {
          icon: Warehouse,
          title: "Multi-Warehouse Control",
          description: "Track inventory across warehouses and distribution points.",
        },
        {
          icon: GitBranch,
          title: "Branch-Level Stock Sync",
          description: "Ensure accurate stock levels across all locations in real time.",
        },
      ],
    },
    Restaurant: {
      title: "Restaurant Management Software",
      description: "Speed up service with an intuitive restaurant POS system. Manage tables, customize menus, split bills, and send orders to the kitchen instantly. Mobile order entry and offline mode keep your restaurant running smoothly, even when the internet is slow.",
      image: "/whychose/restaurant-software.webp",
      features: [
        {
          icon: UtensilsCrossed,
          title: "Table Management",
          description: "Efficiently manage tables and seating arrangements.",
        },
        {
          icon: Menu,
          title: "Customizable Menus",
          description: "Create and customize menus with ease.",
        },
        {
          icon: Receipt,
          title: "Split Bills & Orders",
          description: "Split bills and send orders to kitchen instantly.",
        },
        {
          icon: Phone,
          title: "Mobile Order Entry",
          description: "Mobile order entry and offline mode for smooth operations.",
        },
      ],
    },
  };

  const tabs = [
    { id: "Pharmacy", label: "Pharmacy" },
    { id: "Departmental", label: "Departmental Store" },
    { id: "Retail", label: "Retail POS" },
    { id: "Wholesale", label: "Wholesale & Distribution" },
    { id: "Restaurant", label: "Restaurant" },
  ];

  const activeContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative lg:pt-[80px] md:pb-[90px] pb-[45px] pt-[40px] overflow-hidden" style={{ backgroundColor: 'rgb(239 246 255)' }}>
      <Container size="xl" padding="none">
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="section-heading">
              Built for Modern Business
            </h2>
            <p className="section-paragraph max-w-3xl mx-auto">
              Zapeera adapts to your business model with industry-specific tools designed to simplify operations, improve efficiency, and support growth.
            </p>

            {/* Tab Navigation */}
            <div
              className="
                flex
                flex-nowrap
                md:flex-wrap
                justify-start
                md:justify-center
                gap-3
                lg:gap-4
                mb-[20px]
                overflow-x-auto
                md:overflow-visible
                scrollbar-hide
              "
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4
                    py-2.5
                    rounded-lg
                    text-sm
                    md:text-base
                    font-medium
                    transition-all
                    duration-200
                    whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "bg-[#1947C4] text-white shadow-md shadow-[#1947C4]/20"
                        : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* Content with Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="md:space-y-4 space-y-2">
              {/* Title */}
              <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-medium text-gray-900">
                {activeContent.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {activeContent.description}
              </p>

              {/* Features Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {activeContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-0"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#1947C4]/10 flex items-center justify-center mb-2">
                      <feature.icon className="w-5 h-5 text-[#1947C4]" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h4 className="card-heading">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;