import React from 'react';
import { Github, Linkedin, Mail, Heart, SlidersHorizontal, ArrowUp } from 'lucide-react';
import { initialPortfolioConfig } from '../data/portfolioData';

interface FooterProps {
  config: typeof initialPortfolioConfig;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070c] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Purpose */}
          <div className="space-y-1">
            <div className="text-lg font-bold text-white tracking-tight">
              Balu&apos;s Developer Portfolio
            </div>
            <p className="text-xs text-slate-400">
              Computer Science and Engineering (Artificial Intelligence) · Joy University
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Settings */}
          <div className="flex items-center gap-3">
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${config.email}`}
              aria-label="Email Balu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenSettings}
              title="Customize Portfolio Links"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Settings</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider with requested quote & copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-300 font-medium text-center sm:text-left">
            &ldquo;Learning, Building, and Growing Every Day.&rdquo;
          </div>

          <div className="text-slate-400 flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Balu. Built for academic &amp; career growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
