"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Phone, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/generated/hero_banner.png"
          alt="Jalaram Sales Premium Electronics"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/70 via-surface-950/50 to-surface-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950/80 via-transparent to-surface-950/80" />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-brand-600/10 rounded-full blur-[80px] sm:blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-accent-500/10 rounded-full blur-[80px] sm:blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass border border-brand-500/20 max-w-full"
        >
          <Sparkles size={14} className="text-accent-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-surface-300 truncate">
            {locale.hero.badge} — {siteConfig.brands.slice(0, 4).join(" · ")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold text-[clamp(1.75rem,5vw,4.5rem)] text-white leading-[1.15] mb-4 sm:mb-6"
        >
          {locale.hero.headline1}
          <br />
          <span className="gradient-text">{locale.hero.headline2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-surface-400 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
        >
          {t("hero.subtitle", {
            years: siteConfig.stats.yearsInBusiness,
            customers: siteConfig.stats.happyCustomers,
            brands: siteConfig.brands.slice(0, 5).join(", "),
            city: siteConfig.location.city,
          })}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0"
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_hero)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg animate-pulse-glow w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <ShoppingBag size={20} />
              {locale.hero.cta_primary}
            </span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="btn-secondary text-base sm:text-lg w-full sm:w-auto"
          >
            <Phone size={20} />
            {t("hero.cta_secondary", { phone: siteConfig.contact.phoneDisplay })}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0"
        >
          {[
            { value: siteConfig.stats.yearsInBusiness, label: locale.hero.stat_years },
            { value: siteConfig.stats.happyCustomers, label: locale.hero.stat_customers },
            { value: siteConfig.stats.followers, label: locale.hero.stat_followers },
            { value: siteConfig.brands.length + "+", label: locale.hero.stat_brands },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="glass-light rounded-2xl p-3 sm:p-4"
            >
              <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm text-surface-400 mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#products" aria-label="Scroll to products">
          <ChevronDown size={28} className="text-surface-500" />
        </a>
      </motion.div>
    </section>
  );
}
