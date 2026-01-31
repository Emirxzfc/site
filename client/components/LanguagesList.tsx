import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { name: "C++", color: "from-neon-cyan to-neon-purple", icon: "⚡" },
  { name: "C#", color: "from-neon-purple to-neon-magenta", icon: "🎯" },
  { name: "Python", color: "from-neon-magenta to-neon-cyan", icon: "🐍" },
  { name: "Lua", color: "from-neon-cyan to-neon-magenta", icon: "🌙" },
  { name: "HTML", color: "from-neon-magenta to-neon-purple", icon: "🏗️" },
  { name: "CSS", color: "from-neon-purple to-neon-cyan", icon: "🎨" },
  { name: "JavaScript", color: "from-neon-cyan to-neon-magenta", icon: "✨" },
  { name: "PHP", color: "from-neon-magenta to-neon-purple", icon: "🔧" },
];

export default function LanguagesList() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t("projects.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-foreground/10 bg-gradient-to-br ${lang.color} p-[1px] transition-all duration-300 hover:border-neon-cyan/50 transform hover:scale-105`}
            >
              {/* Inner gradient background */}
              <div className="bg-background/95 rounded-lg p-8 h-full flex flex-col items-center justify-center relative z-10 group-hover:bg-background/90 transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {lang.icon}
                </div>
                <h3 className="text-2xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)))`
                    }}>
                  {lang.name}
                </h3>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
