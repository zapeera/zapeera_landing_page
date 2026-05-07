'use client'

import { Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const Careers = () => {
  return (
    <Loading>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 text-neutral-900 font-bold mb-6">
                Careers
              </h1>
              <p className="text-body-lg text-neutral-600">
                A small Pakistani team building cloud POS and inventory software for pharmacies. We are not actively hiring right now.
              </p>
            </div>
          </Container>
        </section>

        {/* Honest empty state */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-8">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="section-heading">If you want to help, message us.</h2>
              <p className="section-paragraph">
                We are not running a public hiring round. But if you want to help build the best pharmacy software in Pakistan, message us on WhatsApp and tell us what you do. We read every message and reply within an hour during business hours.
              </p>
              <p className="text-body text-neutral-600 mb-10">
                Useful background: software engineering, design, customer support in Urdu/English, or experience working inside a Pakistani pharmacy. None of these are required — being curious about the problem is enough.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                  asChild
                >
                  <a
                    href="https://wa.me/923107100663"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                  <Link href="/about-us">About the team</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Careers;
