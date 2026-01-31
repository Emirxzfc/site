import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-black mb-6">Get in Touch</h1>
            <p className="text-xl text-foreground/70 mb-12">
              I'd love to hear about your project and how I can help
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:hello@example.com"
                className="rounded-xl border border-neon-cyan/30 bg-neon-cyan/5 p-8 hover:border-neon-cyan/60 transition-all transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-foreground/60 text-sm">hello@example.com</p>
              </a>

              <div className="rounded-xl border border-neon-magenta/30 bg-neon-magenta/5 p-8">
                <Linkedin className="w-8 h-8 text-neon-magenta mx-auto mb-4" />
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <p className="text-foreground/60 text-sm">linkedin.com/in/yourprofile</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <p className="text-foreground/70 mb-6">Connect with me on social media</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 text-neon-cyan transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30 hover:bg-neon-magenta/20 text-neon-magenta transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/30 hover:bg-neon-purple/20 text-neon-purple transition-all"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Back to Home */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
