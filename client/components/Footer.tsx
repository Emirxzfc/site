import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-cyan/20 bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-neon-cyan mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neon-magenta mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-magenta transition-colors text-sm"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-magenta transition-colors text-sm"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-magenta transition-colors text-sm"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neon-purple mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-purple transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-purple transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-neon-purple transition-colors text-sm"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neon-cyan mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neon-magenta/10 hover:bg-neon-magenta/20 text-neon-magenta transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 rounded-lg bg-neon-pink/10 hover:bg-neon-pink/20 text-neon-pink transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-cyan/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Developer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
