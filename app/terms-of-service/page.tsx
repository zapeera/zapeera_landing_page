import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/ui/container";

export const metadata: Metadata = {
  title: 'Terms of Service - Zapeera',
  description: 'Read Zapeera\'s Terms of Service. Understand the terms and conditions for using our business management software and services.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'service agreement',
    'user agreement',
    'legal terms'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Terms of Service - Zapeera',
    description: 'Read Zapeera\'s Terms of Service and understand the terms for using our services.',
    url: 'https://zapeera.com/terms-of-service',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Zapeera',
    description: 'Zapeera terms of service and user agreement.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our services. By using Zapeera, you agree to these terms.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    By accessing and using Zapeera's services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do 
                    not use this service.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Use License
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Permission is granted to temporarily download one copy of Zapeera's materials for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                    and under this license you may not modify or copy the materials.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Service Availability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We strive to maintain high service availability, but we do not guarantee that our services 
                    will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                    any part of our services at any time.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    User Responsibilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    You are responsible for maintaining the confidentiality of your account and password. You agree 
                    to accept responsibility for all activities that occur under your account or password. You must 
                    not use our services for any unlawful purpose or any purpose prohibited under this clause.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Payment Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Fees for our services are billed in advance on a monthly or annual basis. All fees are 
                    non-refundable except as required by law. We may change our fees at any time by providing 
                    you with advance notice of the changes.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    In no event shall Zapeera, nor its directors, employees, partners, agents, suppliers, or 
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">7</span>
                    Termination
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We may terminate or suspend your account and bar access to the service immediately, without 
                    prior notice or liability, under our sole discretion, for any reason whatsoever and without 
                    limitation, including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">8</span>
                    Contact Information
                  </h2>
                  <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p><strong>Email:</strong> legal@zapeera.com</p>
                      <p><strong>Phone:</strong> +92 310 7100663</p>
                    </div>
                  </div>
                </section>

                <div className="text-center bg-muted/30 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
