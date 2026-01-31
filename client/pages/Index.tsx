import { ArrowRight, Sparkles, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  const skills = [
    { icon: Code, label: t("skills.fullStack"), iconColor: "text-neon-cyan", bgColor: "bg-neon-cyan/10", borderColor: "border-neon-cyan/30" },
    { icon: Palette, label: t("skills.uiux"), iconColor: "text-neon-magenta", bgColor: "bg-neon-magenta/10", borderColor: "border-neon-magenta/30" },
    { icon: Zap, label: t("skills.performance"), iconColor: "text-neon-purple", bgColor: "bg-neon-purple/10", borderColor: "border-neon-purple/30" },
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-neon-cyan font-medium">{t("hero.welcome")}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
              <br />
              <span className="text-foreground">{t("hero.titleContinued")}</span>
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
          <h2 className="text-4xl font-bold mb-12 text-center">{t("skills.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border ${skill.borderColor} ${skill.bgColor} hover:border-neon-cyan/60 transition-all duration-300 group cursor-pointer transform hover:scale-105`}
                >
                  <Icon className={`w-12 h-12 ${skill.iconColor} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{skill.label}</h3>
                  <p className="text-foreground/60 text-sm">
                    Expertise in building modern, scalable solutions
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-neon-cyan hover:text-neon-magenta transition-colors flex items-center gap-2 font-semibold"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl border border-foreground/10 bg-card/50 backdrop-blur hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:shadow-glow-cyan"
              >
                <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="rounded-2xl border border-neon-cyan/30 bg-gradient-to-r from-neon-cyan/5 to-neon-magenta/5 p-12 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-magenta/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Something Amazing?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                Let's collaborate and bring your ideas to life. Whether you have a project in mind or just want to explore possibilities, I'm here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
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
