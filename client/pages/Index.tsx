import { ArrowRight, Sparkles, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguagesList from "@/components/LanguagesList";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      label: t("skills.fullStack"),
      iconColor: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30",
    },
    {
      icon: Palette,
      label: t("skills.uiux"),
      iconColor: "text-neon-magenta",
      bgColor: "bg-neon-magenta/10",
      borderColor: "border-neon-magenta/30",
    },
    {
      icon: Zap,
      label: t("skills.performance"),
      iconColor: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30",
    },
  ];

  const projects = [
    {
      title: t("projects.ecommerce"),
      description: t("projects.ecommerceDesc"),
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-neon-cyan to-neon-magenta",
    },
    {
      title: t("projects.analytics"),
      description: t("projects.analyticsDesc"),
      tech: ["React", "Python", "TensorFlow"],
      gradient: "from-neon-magenta to-neon-purple",
    },
    {
      title: t("projects.collaboration"),
      description: t("projects.collaborationDesc"),
      tech: ["React", "WebSocket", "Firebase"],
      gradient: "from-neon-purple to-neon-cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main floating orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />

          {/* Additional dynamic elements */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float-slow" />
          <div
            className="absolute bottom-20 right-1/3 w-64 h-64 bg-neon-pink/8 rounded-full blur-3xl animate-float-reverse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/3 left-10 w-80 h-80 bg-neon-magenta/8 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Accent particles */}
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-neon-purple/12 rounded-full blur-2xl animate-swirl" />
          <div
            className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-neon-cyan/12 rounded-full blur-2xl animate-swirl"
            style={{ animationDelay: "7.5s" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-neon-cyan font-medium">
                {t("hero.welcome")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
              <br />
              <span className="text-foreground">
                {t("hero.titleContinued")}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/projects"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold flex items-center gap-2 hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                {t("hero.viewWork")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-neon-cyan/50 text-neon-cyan font-semibold hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
              >
                {t("hero.getInTouch")}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex items-center justify-center">
                <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border ${skill.borderColor} ${skill.bgColor} hover:border-neon-cyan/60 transition-all duration-300 group transform hover:scale-105`}
                >
                  <Icon className={`w-12 h-12 ${skill.iconColor} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{skill.label}</h3>
                  <p className="text-foreground/60 text-sm">
                    {t("skills.description")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages List Section */}
      <LanguagesList />

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="rounded-2xl border border-neon-cyan/30 bg-gradient-to-r from-neon-cyan/5 to-neon-magenta/5 p-12 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float" />
              <div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-magenta/20 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "3s" }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">{t("cta.title")}</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                {t("cta.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                {t("cta.startProject")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
