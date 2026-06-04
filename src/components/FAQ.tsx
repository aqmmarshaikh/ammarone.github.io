"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-brand-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3 block">
            {locale.faq.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.faq.heading}
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.faq.subtitle}
          </p>
        </motion.div>

        {/* Accordion — items come entirely from locale */}
        <div className="space-y-3">
          {locale.faq.items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left group min-h-[56px]"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-display font-semibold text-sm sm:text-base pr-4 transition-colors leading-snug ${
                    openIndex === i ? "text-brand-400" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    openIndex === i
                      ? "bg-brand-600 text-white"
                      : "bg-white/5 text-surface-400"
                  }`}
                >
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-surface-400 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
