import { Link } from "react-router-dom";
import { Code2, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neon-cyan/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
            <Code2 className="w-6 h-6 text-neon-cyan" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Developer
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground/80 hover:text-neon-cyan transition-colors font-medium"
          >
            {t("common.home")}
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 hover:text-neon-cyan transition-colors font-medium"
          >
            {t("common.about")}
          </Link>
          <Link
            to="/projects"
            className="text-foreground/80 hover:text-neon-cyan transition-colors font-medium"
          >
            {t("common.projects")}
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan transition-colors"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-neon-magenta/30 text-neon-magenta"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("tr")}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === "tr"
                  ? "bg-neon-magenta/30 text-neon-magenta"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              TR
            </button>
          </div>

          <Link
            to="/contact"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all duration-300"
          >
            {t("common.contact")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
