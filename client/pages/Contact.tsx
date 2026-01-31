import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-black mb-6 text-center">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-foreground/70 mb-12 text-center">
              {t("contact.description")}
            </p>

            {/* Contact Form */}
            <div className="mb-16 p-8 rounded-xl border border-neon-cyan/30 bg-card/50">
              <ContactForm />
            </div>

            {/* Direct Contact Methods */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {t("contact.connectSocial")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <a
                  href="mailto:hello@example.com"
                  className="rounded-xl border border-neon-cyan/30 bg-neon-cyan/5 p-8 hover:border-neon-cyan/60 transition-all transform hover:scale-105"
                >
                  <Mail className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{t("contact.email")}</h3>
                  <p className="text-foreground/60 text-sm">
                    hello@example.com
                  </p>
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neon-magenta/30 bg-neon-magenta/5 p-8 hover:border-neon-magenta/60 transition-all transform hover:scale-105"
                >
                  <Linkedin className="w-8 h-8 text-neon-magenta mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{t("contact.linkedin")}</h3>
                  <p className="text-foreground/60 text-sm">
                    linkedin.com/in/yourprofile
                  </p>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 text-neon-cyan transition-all transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30 hover:bg-neon-magenta/20 text-neon-magenta transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/30 hover:bg-neon-purple/20 text-neon-purple transition-all transform hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
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
