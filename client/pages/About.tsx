import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-5xl font-black mb-6">About Me</h1>
            <div className="h-96 rounded-xl border border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 flex items-center justify-center">
              <div className="text-center">
                <p className="text-foreground/60 mb-6">About page content</p>
                <p className="text-sm text-foreground/40">
                  This page will showcase your background, experience, and journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-foreground/70 mb-6">Ready to build this page?</p>
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
