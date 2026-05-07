'use client'

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import Container from "../ui/container";

const PharmacySection = () => {
  const router = useRouter();

  const features = [
    "Over 5,000 deployments across the country",
    "Premium experience for 300,000 + patients", 
    "Web & mobile based solutions"
  ];

  return (
    <section className=" relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full" />
      <div className="" />
      <div className="" />
      
      <Container>
      <div className="  pt-12 md:pt-24">
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  For Pharmacies
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The world of Zapeera Care, leading medical billing software in Pakistan integrated with EMR/EHR at its best. We streamline your practice for efficiency, profit, and better care.
                </p>
              </div>
              
              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg px-8 py-3 text-base font-medium"
                  onClick={() => router.push('/solutions')}
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            {/* Right Content - Visual Element */}
            <div className="">
              <div className="bg-card rounded-2xl  p-8 border border-border">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl">Z</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      Zapeera Care
                    </h3>
                    <p className="text-muted-foreground">
                        Leading medical billing software integrated with POS System and EMR/EHR at its best.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">5K+</div>
                      <div className="text-sm text-muted-foreground">Deployments</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">300K+</div>
                      <div className="text-sm text-muted-foreground">Patients</div>
                    </div>
                  </div>
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

export default PharmacySection;
