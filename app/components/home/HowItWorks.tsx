import Container from "../ui/container";

const steps = [
  {
    number: 1,
    title: "Message us on WhatsApp",
    description: "Tell us a bit about your pharmacy — branches, counters, what you sell. We confirm whether Zapeera is the right fit for you.",
  },
  {
    number: 2,
    title: "We set it up with you",
    description: "On a free setup call we load your stock, your suppliers, and your batches. We do this in Urdu or English, whichever is easier.",
  },
  {
    number: 3,
    title: "Train your staff in an hour",
    description: "The till screen is simple enough that a cashier can ring sales within 10 minutes. We walk your team through it on the same call.",
  },
  {
    number: 4,
    title: "Run for 30 days, free",
    description: "Use everything. Track expiry, run reports, manage branches. After the month you pick a plan — or you do not, no auto-charge.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">How you get started</h2>
            <p className="section-paragraph">
              No sales call, no procurement form. From the first WhatsApp message to your first live sale is usually a week.
            </p>
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
                  <div className="w-16 h-16 rounded-full hidden md:flex items-center justify-center mx-auto mb-4 bg-accent-50 border-2 border-primary-600/30">
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
