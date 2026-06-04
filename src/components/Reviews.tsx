"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/../content/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Reviews() {
  const { locale } = useLanguage();

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[400px] bg-accent-500/5 rounded-full blur-[120px]" />
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
            {locale.reviews.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.reviews.heading}
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.reviews.subtitle}
          </p>
        </motion.div>

        {/* Reviews Grid — testimonial content stays in original language (authentic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-light rounded-2xl p-5 sm:p-6 flex flex-col card-hover relative group"
            >
              <Quote
                size={32}
                className="text-brand-600/20 absolute top-4 right-4 group-hover:text-brand-600/40 transition-colors"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={
                      j < review.rating
                        ? "text-accent-400 fill-accent-400"
                        : "text-surface-600"
                    }
                  />
                ))}
              </div>
              <p className="text-surface-300 leading-relaxed flex-1 mb-5">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-white text-sm">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-surface-500">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
