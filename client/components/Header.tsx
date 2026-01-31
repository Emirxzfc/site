import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function Header() {
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
            Home
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 hover:text-neon-cyan transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-foreground/80 hover:text-neon-cyan transition-colors font-medium"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-semibold hover:shadow-glow-cyan transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
