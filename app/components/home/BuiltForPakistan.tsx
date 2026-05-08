'use client'

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import Container from "../ui/container";

const BuiltForPakistan = () => {
  const t = useTranslations("home.builtForPakistan");
  const items = t.raw("items") as Array<{ title: string; body: string }>;

  return (
    <section className="bg-white py-20 md:py-32">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">{t("heading")}</h2>
            <p className="section-paragraph">{t("lead")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-600/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="card-heading">{item.title}</h3>
                  <p className="text-body text-neutral-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuiltForPakistan;
