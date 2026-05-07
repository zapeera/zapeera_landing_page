'use client'

import { BookOpen } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

const Blog = () => {
  return (
    <Loading>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 text-neutral-900 font-bold mb-6">
                Blog
              </h1>
              <p className="text-body-lg text-neutral-600">
                Practical pieces for Pakistani pharmacy owners — coming soon.
              </p>
            </div>
          </Container>
        </section>

        {/* Empty state */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="section-heading">We are working on our first articles.</h2>
              <p className="section-paragraph">
                Real, useful pieces for Pakistani pharmacy owners — on expiry management, supplier negotiation, stock control, and the things we have learned from spending time inside actual pharmacies. Nothing AI-generated, nothing copied off another SaaS blog.
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
                    Notify me on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                  <Link href="/">Back to home</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Blog;
