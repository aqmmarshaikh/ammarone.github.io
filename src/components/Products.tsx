"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { featuredProducts } from "@/../content/content";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Products() {
  const { locale } = useLanguage();

  return (
    <section id="products" className="section-padding relative">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-brand-600/5 rounded-full blur-[120px]" />
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
            {locale.products.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.products.heading}
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.products.subtitle}
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {featuredProducts.map((product) => {
            const translatedTag = product.tag
              ? locale.products.tags[product.tag] ?? product.tag
              : null;

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group relative glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Tag */}
                {translatedTag && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg">
                    {translatedTag}
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/20 to-transparent" />

                  {/* Quick action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                        locale.whatsapp.message_product.replace("{{product}}", product.name)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-brand-600/90 backdrop-blur-sm text-white rounded-xl font-semibold transition-transform hover:scale-105 text-sm sm:text-base min-h-[44px]"
                    >
                      <ShoppingBag size={18} />
                      <span className="hidden sm:inline">{locale.products.enquire}</span>
                      <span className="sm:hidden">{locale.products.enquire_short}</span>
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-5">
                  <div className="text-[10px] sm:text-xs text-brand-400 font-medium uppercase tracking-wider mb-1">
                    {product.brand}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm sm:text-lg mb-1 group-hover:text-brand-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-xs sm:text-sm text-surface-400 mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
                      {product.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="font-display font-bold text-base sm:text-xl text-white">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-surface-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-medium text-base sm:text-lg group"
          >
            {locale.products.view_all}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
