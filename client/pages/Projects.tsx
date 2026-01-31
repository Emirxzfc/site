import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-black mb-6">Projects</h1>
            <p className="text-xl text-foreground/70 mb-12">
              Check out my latest work and side projects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 p-8 flex items-center justify-center h-64"
                >
                  <div className="text-center">
                    <p className="text-foreground/60 mb-2">Project {i}</p>
                    <p className="text-sm text-foreground/40">
                      Coming soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
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
