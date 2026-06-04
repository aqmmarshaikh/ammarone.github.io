"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

const brandLogos: Record<string, { color: string; initial: string }> = {
  Apple: { color: "from-gray-300 to-gray-500", initial: "" },
  Samsung: { color: "from-blue-400 to-blue-600", initial: "S" },
  Oppo: { color: "from-green-400 to-green-600", initial: "O" },
  Vivo: { color: "from-blue-500 to-indigo-600", initial: "V" },
  Realme: { color: "from-yellow-400 to-yellow-600", initial: "R" },
  "Google Pixel": { color: "from-red-400 to-blue-500", initial: "G" },
  OnePlus: { color: "from-red-500 to-red-700", initial: "1+" },
  Nothing: { color: "from-gray-400 to-gray-600", initial: "N" },
};

export default function Brands() {
  const { locale } = useLanguage();

  return (
    <section id="brands" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-500/5 rounded-full blur-[120px]" />
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
          <span className="text-sm font-medium text-accent-400 uppercase tracking-widest mb-3 block">
            {locale.brands.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.brands.heading}
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.brands.subtitle}
          </p>
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-4xl mx-auto">
          {siteConfig.brands.map((brand, i) => {
            const config = brandLogos[brand] ?? {
              color: "from-surface-400 to-surface-600",
              initial: brand[0],
            };
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-light rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 cursor-default group"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  {brand === "Apple" ? (
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-8 sm:h-8">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ) : (
                    <span className="font-display font-bold text-white text-base sm:text-lg">
                      {config.initial}
                    </span>
                  )}
                </div>
                <span className="font-display font-semibold text-surface-200 text-xs sm:text-sm group-hover:text-white transition-colors text-center leading-tight">
                  {brand}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
