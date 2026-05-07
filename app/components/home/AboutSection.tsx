'use client'

import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../ui/container";

const AboutSection = () => {
  return (
    <section className="bg-white  py-20 md:py-32">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/whychose/business-management-platform.webp"
                alt="Zapeera business management platform illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover shadow-2xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 md:pb-0 pb-5">
              <div>
                <h2 className="section-heading">
                  Why we built this
                </h2>
                <p className="section-paragraph">
                  We are a small Pakistani team. The last year has been talking to pharmacy owners in Lahore and Karachi about what is actually broken and what is just annoying — and building software around the answers.
                </p>
              </div>

              {/* Three honest paragraphs as Check rows */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="card-heading">Made in Pakistan</h3>
                    <p className="text-body text-neutral-700">Built locally, by people who know what a Pakistani pharmacy actually looks like at 9pm on a Friday.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="card-heading">Priced for the Pakistani market</h3>
                    <p className="text-body text-neutral-700">International POS software is priced in dollars and built for chains. Local desktop software is stuck in 2010. Zapeera sits between the two.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="card-heading">Built for the way you work</h3>
                    <p className="text-body text-neutral-700">WhatsApp-first support. Tolerant of slow internet. Pakistani medicines pre-loaded. Honest about what is shipped and what is still coming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
