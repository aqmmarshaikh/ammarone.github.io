"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ size = 20 }: { size?: number }) {
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

export default function Contact() {
  const { locale, t } = useLanguage();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* BG accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[400px] bg-brand-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-500/5 rounded-full blur-[120px]" />
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
            {locale.contact.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.contact.heading}
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Cards */}
          <div className="space-y-4 sm:space-y-5">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-light rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-5 card-hover group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-brand-600/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-600/20 transition-colors">
                <MapPin size={24} className="sm:hidden" />
                <MapPin size={26} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-1">
                  {locale.contact.location_heading}
                </h3>
                <p className="text-surface-400 leading-relaxed text-sm sm:text-base">
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.city}, {siteConfig.location.state},{" "}
                  {siteConfig.location.pincode}
                </p>
                <a
                  href={siteConfig.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-brand-400 hover:text-brand-300 transition-colors font-medium"
                >
                  <Navigation size={14} />
                  {locale.contact.directions}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-light rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-5 card-hover group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-600/10 flex items-center justify-center text-green-400 group-hover:bg-green-600/20 transition-colors">
                <Phone size={24} className="sm:hidden" />
                <Phone size={26} className="hidden sm:block" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-1">
                  {locale.contact.call_heading}
                </h3>
                <div className="space-y-1">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="block text-surface-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    📱 {siteConfig.contact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phoneAlt}`}
                    className="block text-surface-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    📱 {siteConfig.contact.phoneAltDisplay}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-light rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-5 card-hover group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent-600/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-600/20 transition-colors">
                <Clock size={24} className="sm:hidden" />
                <Clock size={26} className="hidden sm:block" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base sm:text-lg mb-1">
                  {locale.contact.hours_heading}
                </h3>
                <div className="text-surface-400 space-y-1 text-sm sm:text-base">
                  <p>
                    {locale.contact.weekdays_label}{" "}
                    {siteConfig.openingHours.weekdays}
                  </p>
                  <p>
                    {locale.contact.sunday_label}{" "}
                    {siteConfig.openingHours.sunday}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_contact)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-light rounded-2xl p-4 sm:p-5 flex items-center gap-3 card-hover group hover:border-green-500/30 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-xl bg-green-600/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <span className="font-semibold text-white text-sm">
                  {locale.contact.whatsapp_label}
                </span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-light rounded-2xl p-4 sm:p-5 flex items-center gap-3 card-hover group hover:border-pink-500/30 min-h-[56px]"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                  <InstagramIcon size={20} />
                </div>
                <span className="font-semibold text-white text-sm">
                  {locale.contact.instagram_label}
                </span>
              </a>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 h-[300px] sm:h-[400px] lg:h-auto min-h-[300px] lg:min-h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1000!2d${siteConfig.location.lng}!3d${siteConfig.location.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUxJzA3LjciTiA3MsKwMDcnMjYuMyJF!5e0!3m2!1sen!2sin!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jalaram Sales Location"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 glow"
        >
          <h3 className="font-display font-bold text-[clamp(1.25rem,3.5vw,2.5rem)] text-white mb-3 sm:mb-4">
            {locale.contact.cta_heading}
          </h3>
          <p className="text-surface-400 max-w-xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg px-2 sm:px-0">
            {locale.contact.cta_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(locale.whatsapp.message_visit)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg animate-pulse-glow w-full sm:w-auto"
            >
              <span className="flex items-center gap-2 justify-center">
                <ShoppingBag size={20} />
                {locale.contact.cta_primary}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn-secondary text-base sm:text-lg w-full sm:w-auto"
            >
              <Phone size={20} />
              {t("contact.cta_secondary", {
                phone: siteConfig.contact.phoneDisplay,
              })}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
