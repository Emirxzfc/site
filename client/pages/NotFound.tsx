import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      <main className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="text-center max-w-2xl relative z-10">
          {/* Error code with glitch effect */}
          <div className="mb-8">
            <div className="inline-block">
              <Zap
                className="w-16 h-16 text-neon-cyan mx-auto mb-4 animate-bounce"
                style={{ animationDuration: "2s" }}
              />
            </div>
            <h1 className="text-9xl font-black bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent mb-4 tracking-tighter">
              404
            </h1>
          </div>

          {/* Message */}
          <p className="text-3xl font-bold mb-4 text-foreground">
            {t("notFound.message")}
          </p>

          <p className="text-foreground/70 mb-8 text-lg leading-relaxed max-w-lg mx-auto">
            {t("notFound.description")}
          </p>

          {/* Requested path display */}
          <div className="mb-12 p-4 rounded-lg border border-neon-cyan/30 bg-neon-cyan/5 inline-block">
            <p className="text-sm text-foreground/60">Requested path:</p>
            <code className="text-neon-cyan font-mono text-sm break-all">
              {location.pathname}
            </code>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all transform hover:scale-105 duration-300"
            >
              {t("notFound.returnHome")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-neon-purple/50 text-neon-purple font-semibold hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
