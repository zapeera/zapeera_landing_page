import React from "react";

const ClientLogos = () => {
  const industries = [
    { label: "Pharmacy", logo: "/pharmacy.svg" },
    { label: "Hotels", logo: "/hotle3.svg" },
    { label: "Wholesaler", logo: "/store.png" },
    { label: "Wholesaler", logo: "/store2.png" },
    { label: "Retail", logo: "/hotle.jpg" },
    { label: "Grocery", logo: "/htle.webp" },
    { label: "Restaurants", logo: "/phar2.png" },
    { label: "Logistics", logo: "/phr.png" },
    { label: "Clinics", logo: "/phar.png" },
  ];

  return (
    <section className="py-6 md:py-12 border-b" style={{ backgroundColor: 'rgb(239 246 255)' }}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-md mb-4 text-black font-bold tracking-wide">
        Trusted by Businesses Across Pakistan
        </p>

        <div className="relative overflow-hidden group">
          <div className="flex gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...industries, ...industries].map(({ label, logo }, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] h-20 px-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`${label} logo`}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
