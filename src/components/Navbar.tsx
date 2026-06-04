"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, ShoppingBag, ChevronDown } from "lucide-react";
import { siteConfig } from "@/../config/site";
import { useLanguage, type Lang } from "@/context/LanguageContext";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const LANGUAGES: { code: Lang; flag: string; short: string; full: string }[] = [
  { code: "en", flag: "🇺🇸", short: "EN", full: "English" },
  { code: "hi", flag: "🇮🇳", short: "हि", full: "हिन्दी" },
  { code: "gu", flag: "🇮🇳", short: "ગુ", full: "ગુજરાતી" },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative z-50">
      <button
        id="lang-switcher"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-xl glass-light text-surface-300 hover:text-white hover:border-brand-500/30 transition-all text-sm font-medium min-h-[36px] border border-white/5"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="font-medium text-xs sm:text-sm">{current.short}</span>
        <ChevronDown
          size={12}
          className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label="Language options"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-36 glass rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                role="option"
                aria-selected={lang === language.code}
                onClick={() => {
                  setLang(language.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-3 text-sm transition-colors ${
                  lang === language.code
                    ? "text-brand-400 bg-brand-600/10"
                    : "text-surface-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-base leading-none">{language.flag}</span>
                <span className="font-medium">{language.full}</span>
                {lang === language.code && (
                  <span className="ml-auto text-brand-400 text-xs">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: locale.nav.home, href: "#hero" },
    { label: locale.nav.products, href: "#products" },
    { label: locale.nav.brands, href: "#brands" },
    { label: locale.nav.about, href: "#about" },
    { label: locale.nav.reviews, href: "#reviews" },
    { label: locale.nav.faq, href: "#faq" },
    { label: locale.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs text-surface-400">
          <div className="flex items-center gap-4 min-w-0">
            <span className="flex items-center gap-1 truncate">
              <MapPin size={12} className="flex-shrink-0" />
              <span className="truncate">
                {siteConfig.location.address}, {siteConfig.location.city}
              </span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1 hover:text-brand-400 transition-colors"
            >
              <Phone size={12} />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent-400 transition-colors"
            >
              <InstagramIcon size={12} />
              Follow Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg">
              <ShoppingBag size={20} className="text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white group-hover:text-brand-400 transition-colors">
                {siteConfig.name}
              </span>
              <span className="hidden sm:block text-[10px] text-surface-500 uppercase tracking-widest">
                {siteConfig.location.city}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-surface-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Language + CTA + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 text-sm whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={16} />
                {locale.nav.cta}
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-surface-300 hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center px-4 py-3 min-h-[48px] text-surface-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_general)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <ShoppingBag size={16} />
                    {locale.nav.cta}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
