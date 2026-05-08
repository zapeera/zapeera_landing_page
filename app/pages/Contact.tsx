'use client'

import { memo, useCallback, useState, useRef } from 'react';
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card } from "@/app/components/ui/card";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import StructuredData from "@/app/components/StructuredData";
import { toast } from "sonner";
import { getWhatsAppLink, getWhatsappDisplayNumber, whatsappMessages } from "@/app/lib/whatsapp";

const Contact = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("contact");

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success(t("form.successTitle"), { description: t("form.successBody") });
        if (formRef.current) formRef.current.reset();
      } else {
        toast.error(t("form.errorTitle"), {
          description: result.error || t("form.errorBody"),
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t("form.errorTitle"), { description: t("form.errorBody") });
    } finally {
      setIsSubmitting(false);
    }
  }, [t]);

  return (
    <>
      <StructuredData type="Organization" data={{}} />
      <Loading>
        <div className="min-h-screen bg-background">
          <main>
            {/* Hero */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {t("heroH1")}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">{t("heroLead")}</p>
                </div>
              </div>
            </section>

            {/* Contact info + form */}
            <section className="py-20 lg:py-32">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">{t("infoHeading")}</h2>
                      <p className="text-muted-foreground mb-8">{t("infoLead")}</p>
                    </div>

                    <Card className="p-6 border-2 border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{t("cards.email.title")}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{t("cards.email.body")}</p>
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
                          <h3 className="font-semibold mb-1">{t("cards.phone.title")}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{t("cards.phone.body")}</p>
                          <a href="tel:+923107100663" className="text-primary hover:underline">
                            {getWhatsappDisplayNumber()}
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
                          <h3 className="font-semibold mb-1">{t("cards.whatsapp.title")}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{t("cards.whatsapp.body")}</p>
                          <a
                            href={getWhatsAppLink(whatsappMessages.contact)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {t("cards.whatsapp.link")}
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
                          <h3 className="font-semibold mb-1">{t("cards.office.title")}</h3>
                          <p className="text-sm text-muted-foreground">
                            {t("cards.office.addressLine1")}<br />
                            {t("cards.office.addressLine2")}<br />
                            {t("cards.office.addressLine3")}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                    <Card className="p-8 lg:p-12 border-2 border-border">
                      <h2 className="text-2xl font-bold mb-2">{t("form.heading")}</h2>
                      <p className="text-sm text-muted-foreground mb-6">{t("form.lead")}</p>

                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              {t("form.fields.name")} *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder={t("form.placeholders.name")}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              {t("form.fields.email")} *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={t("form.placeholders.email")}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-2">
                              {t("form.fields.company")}
                            </label>
                            <Input
                              id="company"
                              name="company"
                              placeholder={t("form.placeholders.company")}
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                              {t("form.fields.phone")}
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder={t("form.placeholders.phone")}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            {t("form.fields.subject")} *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder={t("form.placeholders.subject")}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            {t("form.fields.message")} *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder={t("form.placeholders.message")}
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
                          {isSubmitting ? t("form.submitting") : t("form.submit")}
                        </Button>
                      </form>
                    </Card>
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
