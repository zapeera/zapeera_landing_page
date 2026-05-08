'use client'

import { useTranslations } from "next-intl";
import { Wrench, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Link } from "@/i18n/navigation";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import { getWhatsAppLink, whatsappMessages } from "@/app/lib/whatsapp";

const Updates = () => {
  const t = useTranslations("updates");
  const tBtn = useTranslations("common.buttons");
  const inProgress = t.raw("inProgress") as Array<{ title: string; body: string }>;

  return (
    <Loading>
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1 text-neutral-900 font-bold mb-6">{t("heroH1")}</h1>
              <p className="text-body-lg text-neutral-600">{t("heroLead")}</p>
            </div>
          </Container>
        </section>

        {/* In progress */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-h2 text-neutral-900 font-semibold mb-0">{t("inProgressHeading")}</h2>
              </div>

              <div className="space-y-6">
                {inProgress.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8"
                  >
                    <h3 className="card-heading">{item.title}</h3>
                    <p className="text-body text-neutral-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Recently shipped — empty state */}
        <section className="py-20 md:py-32 bg-primary-50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="section-heading">{t("shippedHeading")}</h2>
              <p className="section-paragraph">{t("shippedLead")}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-primary-800 hover:bg-primary-900 text-white rounded-full px-7"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(whatsappMessages.contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tBtn("askWhatIsNew")}
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-7" asChild>
                  <Link href="/">{tBtn("backToHome")}</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Loading>
  );
};

export default Updates;
