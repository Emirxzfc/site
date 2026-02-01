import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-5xl font-black mb-6 text-center">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-foreground/70 mb-12 text-center">
              {t("contact.description")}
            </p>

            {/* Contact Form */}
            <div className="mb-16 p-8 rounded-xl border border-neon-cyan/30 bg-card/50 mx-auto max-w-xl">
              <ContactForm />
            </div>

            {/* Direct Contact Methods */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {t("contact.connectSocial")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-xl">
                <a
                  href="mailto:hello@example.com"
                  className="rounded-xl border border-neon-cyan/30 bg-neon-cyan/5 p-8 hover:border-neon-cyan/60 transition-all transform hover:scale-105"
                >
                  <Mail className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-center">
                    {t("contact.email")}
                  </h3>
                  <p className="text-foreground/60 text-sm text-center">
                    hello@example.com
                  </p>
                </a>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neon-purple/30 bg-neon-purple/5 p-8 hover:border-neon-purple/60 transition-all transform hover:scale-105"
                >
                  <MessageCircle className="w-8 h-8 text-neon-purple mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-center">Discord</h3>
                  <p className="text-foreground/60 text-sm text-center">
                    discord.com/users/yourprofile
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
