import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function LanguageSwitch({
  language,
  setLanguage,
  compact = false
}: {
  language: 'es' | 'en';
  setLanguage: (language: 'es' | 'en') => void;
  compact?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-2', compact ? 'w-full justify-between' : '')}>
      <div className="inline-flex rounded-lg border border-[#333] bg-[#1a1a1a] p-1">
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={cn(
            'px-2.5 py-1 text-xs font-semibold rounded-md transition-colors',
            language === 'es' ? 'bg-brand-500 text-[#121212]' : 'text-zinc-400 hover:text-white'
          )}
          aria-pressed={language === 'es'}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={cn(
            'px-2.5 py-1 text-xs font-semibold rounded-md transition-colors',
            language === 'en' ? 'bg-brand-500 text-[#121212]' : 'text-zinc-400 hover:text-white'
          )}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/sobre-mi' },
    { name: t.nav.projects, path: '/proyectos' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <span className="text-2xl font-display font-bold text-white tracking-tight">
              Arnau<span className="text-[var(--color-brand-500)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        'relative px-1 py-2 text-sm font-medium transition-colors hover:text-white',
                        isActive ? 'text-white' : 'text-zinc-400'
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-500)] rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 ml-4 border-l border-[#333] pl-6">
              <a
                href="https://github.com/agudotorelloarnau"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arnau-agudo-torell%C3%B3-b05587244"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/images/CV_arnauAgudo.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-[#121212] font-semibold rounded-lg transition-colors text-sm ml-2"
              >
                <Download size={16} />
                {t.nav.cv}
              </a>

              <LanguageSwitch language={language} setLanguage={setLanguage} />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
              aria-label={t.nav.menu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#1e1e1e] border-b border-[#333]"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'bg-[#333] text-white'
                    : 'text-zinc-400 hover:bg-[#2a2a2a] hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 px-3 py-4 mt-4 border-t border-[#333]">
              <a href="https://github.com/agudotorelloarnau" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/arnau-agudo-torell%C3%B3-b05587244" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="px-3 py-2">
              <LanguageSwitch language={language} setLanguage={setLanguage} compact />
            </div>
            <a
              href="/images/CV_arnauAgudo.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-brand-500)] text-[#121212] font-bold rounded-lg"
            >
              <Download size={20} />
              {t.nav.downloadCv}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
