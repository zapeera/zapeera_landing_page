import Container from "../ui/container";

const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description: "Sign up for a free trial in minutes to join Zapeera.",
  },
  {
    number: 2,
    title: "Configure Your Store",
    description: "Set up taxes, currency (PKR), and preferences through our intuitive dashboard.",
  },
  {
    number: 3,
    title: "Add Your Products",
    description: "Import inventory via CSV or add items manually; include images, prices, and categories.",
  },
  {
    number: 4,
    title: "Start Selling",
    description: "Open your store and process sales immediately. Zapeera syncs stock in real time across all devices and branches.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white lg:py-[80px] py-[40px]">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Heading */}
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="section-heading">
              Getting Started
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-4 text-left md:text-center"
              >
                {/* Step Number - Simple on mobile, Circle on desktop */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full hidden md:flex items-center justify-center mx-auto mb-4 bg-[#E9FAF9] border-2 border-[#1947C4]/30">
                    <span className="md:text-xl text-sm md:font-bold font-medium text-black">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold text-black md:hidden">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="card-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {step.description}
                  </p>
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
