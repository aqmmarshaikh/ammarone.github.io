"use client";

import { Phone, MapPin, Heart, ArrowUp } from "lucide-react";
import { siteConfig } from "@/../config/site";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ size = 18 }: { size?: number }) {
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

export default function Footer() {
  const { locale, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: locale.footer.links.products, href: "#products" },
    { label: locale.footer.links.brands, href: "#brands" },
    { label: locale.footer.links.about, href: "#about" },
    { label: locale.footer.links.reviews, href: "#reviews" },
    { label: locale.footer.links.faq, href: "#faq" },
    { label: locale.footer.links.contact, href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-white text-sm">JS</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-[10px] text-surface-500 uppercase tracking-widest">
                  {siteConfig.location.city}, {siteConfig.location.state}
                </span>
              </div>
            </div>
            <p className="text-surface-400 max-w-md leading-relaxed mb-6 text-sm sm:text-base">
              {t("footer.description", {
                city: siteConfig.location.city,
                brands: siteConfig.brands.slice(0, 4).join(", "),
              })}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-surface-400 hover:bg-pink-500/20 hover:text-pink-400 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-surface-400 hover:bg-green-500/20 hover:text-green-400 transition-all"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a
                href={siteConfig.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-surface-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                aria-label="Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              {locale.footer.quick_links}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-surface-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              {locale.footer.contact_heading}
            </h4>
            <ul className="space-y-3 text-sm text-surface-400">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  📱 {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneAlt}`}
                  className="hover:text-white transition-colors"
                >
                  📱 {siteConfig.contact.phoneAltDisplay}
                </a>
              </li>
              <li className="leading-relaxed">
                📍 {siteConfig.location.address}, {siteConfig.location.city}
              </li>
              <li>🕐 {siteConfig.openingHours.weekdays}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-surface-500 text-center sm:text-left">
            {t("footer.copyright", {
              year: String(new Date().getFullYear()),
              name: siteConfig.name,
              city: siteConfig.location.city,
            })
              .split("♥")
              .map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <Heart size={10} className="inline text-red-500 fill-red-500" />
                    {part}
                  </span>
                )
              )}
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-surface-400 hover:bg-brand-600/20 hover:text-brand-400 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
