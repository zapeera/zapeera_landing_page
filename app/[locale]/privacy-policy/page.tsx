import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/ui/container";

export const metadata: Metadata = {
  title: 'Privacy Policy - Zapeera',
  description: 'Zapeera Privacy Policy - Learn how we collect, use, and protect your personal information. Understand your privacy rights and data protection measures.',
  keywords: [
    'privacy policy',
    'data protection',
    'privacy rights',
    'personal information',
    'data security'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Privacy Policy - Zapeera',
    description: 'Learn how Zapeera collects, uses, and protects your personal information.',
    url: 'https://zapeera.com/privacy-policy',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Zapeera',
    description: 'Zapeera privacy policy and data protection.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include your name, email address, 
                    phone number, business information, and payment details.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We use the information we collect to provide, maintain, and improve our services, 
                    process transactions, send you technical notices and support messages, and communicate 
                    with you about products, services, and promotional offers.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Information Sharing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information 
                    with service providers who assist us in operating our website and conducting our business.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                    over the internet is 100% secure.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    You have the right to access, update, or delete your personal information. You may also 
                    opt out of certain communications from us. To exercise these rights, please contact us 
                    using the information provided below.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    Contact Us
                  </h2>
                  <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p><strong>Email:</strong> privacy@zapeera.com</p>
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
