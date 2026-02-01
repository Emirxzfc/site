export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large floating orbs */}
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

      {/* Intense pulsing lights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse-intense" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-cyan/15 rounded-full blur-3xl animate-pulse-intense"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Rotating beam effects */}
      <div className="absolute inset-1/4 animate-beam-rotate opacity-20">
        <div className="absolute inset-0 rounded-full border border-neon-cyan/30 blur-sm" />
      </div>
      <div
        className="absolute inset-1/3 animate-beam-rotate-reverse opacity-15"
        style={{ animationDelay: "10s" }}
      >
        <div className="absolute inset-0 rounded-full border border-neon-magenta/30 blur-sm" />
      </div>

      {/* Extra luminous spots */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-neon-cyan/25 rounded-full blur-2xl animate-flicker" />
      <div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-neon-magenta/20 rounded-full blur-2xl animate-flicker"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-44 h-44 bg-neon-purple/18 rounded-full blur-2xl animate-flicker"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Shimmer effects */}
      <div className="absolute inset-0 animate-shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan to-transparent blur-xl opacity-10" />
      </div>

      {/* Extra ambient lights */}
      <div
        className="absolute top-0 right-1/4 w-72 h-72 bg-neon-pink/12 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-64 h-64 bg-neon-cyan/8 rounded-full blur-2xl animate-pulse-intense"
        style={{ animationDelay: "2s" }}
      />

      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-80 h-80 bg-neon-magenta/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3.5s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-72 h-72 bg-neon-purple/15 rounded-full blur-2xl animate-pulse-intense"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  );
}
