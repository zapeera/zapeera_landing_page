'use client'

import { memo, useCallback, useState, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card } from "@/app/components/ui/card";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import StructuredData from "@/app/components/StructuredData";
import { toast } from "sonner";

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "We'll get back to you within 24 hours.",
        });
        // Reset form using stored reference
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        toast.error('Failed to send message', {
          description: result.error || 'Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        description: 'Please check your internet connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <>
      <StructuredData type="Organization" data={{}} />
      <Loading>
        <div className="min-h-screen bg-background">

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Running a pharmacy and want to see Zapeera? WhatsApp us — we reply within an hour during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
         <Container>
         <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    WhatsApp is the fastest. We reply within an hour during business hours.
                  </p>
                </div>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-2">Our team is here to help</p>
                      <a href="mailto:zapeera@gmail.com" className="text-primary hover:underline">
                        zapeera@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+923107100663" className="text-primary hover:underline">
                        +92 310 7100663
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground mb-2">We reply within an hour during business hours.</p>
                      <a
                        href="https://wa.me/923107100663"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        Ayan Center<br />
                        Eden City, DHA Phase 8<br />
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 lg:p-12 border-2 border-border">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
         </Container>
        </section>
        </main>
      </div>
    </Loading>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;
