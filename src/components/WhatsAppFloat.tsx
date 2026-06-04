"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppFloat() {
  const { locale } = useLanguage();

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_general)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
      aria-label={locale.whatsapp.aria_label}
    >
      <MessageCircle size={24} className="fill-white sm:hidden" />
      <MessageCircle size={26} className="fill-white hidden sm:block" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}
