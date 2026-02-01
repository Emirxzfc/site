import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-5xl font-black mb-8 text-center">
              {t("about.title")}
            </h1>
            <p className="text-xl text-foreground/70 text-center mb-12 leading-relaxed">
              {t("about.bio")}
            </p>
          </div>
        </section>

        {/* Journey Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-12 p-8 rounded-xl border border-neon-cyan/30 bg-card/50">
              <h2 className="text-3xl font-bold mb-4 text-neon-cyan">
                {t("about.journey")}
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t("about.journeyText")}
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-12 p-8 rounded-xl border border-neon-magenta/30 bg-gradient-to-br from-neon-magenta/5 to-neon-purple/5">
              <div className="flex items-start gap-4 mb-4">
                <Code2 className="w-8 h-8 text-neon-magenta flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-neon-magenta">
                    {t("about.expertise")}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {t("about.expertiseText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-12 p-8 rounded-xl border border-neon-purple/30 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-8 h-8 text-neon-purple flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-neon-purple">
                    {t("about.values")}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {t("about.valuesText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="p-12 rounded-xl border border-neon-cyan/30 bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {t("about.cta")}
              </h2>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all transform hover:scale-105"
              >
                {t("contact.title")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
