"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Play,
  Repeat,
  CreditCard,
  Headphones,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={26} />,
  play: <Play size={26} />,
  repeat: <Repeat size={26} />,
  creditCard: <CreditCard size={26} />,
  headphones: <Headphones size={26} />,
  shield: <Shield size={26} />,
};

export default function About() {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-brand-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3 block">
            {locale.about.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.about.heading}
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {t("about.subtitle", {
              name: siteConfig.name,
              city: siteConfig.location.city,
            })}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Store image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] glow"
          >
            <Image
              src="/generated/about_store.png"
              alt="Jalaram Sales Store Interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/40 to-transparent" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-white sm:hidden" />
                <Shield size={24} className="text-white hidden sm:block" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base sm:text-lg">
                  {t("about.badge_years", {
                    years: siteConfig.stats.yearsInBusiness,
                  })}
                </div>
                <div className="text-[10px] sm:text-xs text-surface-400 leading-tight">
                  {locale.about.badge_label}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services grid — uses locale array directly */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {locale.about.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-light rounded-2xl p-4 sm:p-5 group hover:border-brand-500/30 transition-all card-hover"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-600/10 flex items-center justify-center mb-2 sm:mb-3 text-brand-400 group-hover:bg-brand-600/20 transition-colors flex-shrink-0">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="font-display font-semibold text-white mb-1 text-sm sm:text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-surface-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
