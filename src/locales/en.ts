export const en = {
  meta: {
    title: "Jalaram Sales — Premium Smartphones in Patan, Gujarat",
    description:
      "Jalaram Sales — Authorized dealer for Apple, Samsung, Oppo, Vivo, Realme & Google Pixel in Patan. Genuine products, easy EMI, live demo, and exchange offers.",
  },
  nav: {
    home: "Home",
    products: "Products",
    brands: "Brands",
    about: "About",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    cta: "Shop Now",
  },
  hero: {
    badge: "Authorized Dealer",
    headline1: "Your Destination for",
    headline2: "Premium Smartphones",
    subtitle:
      "{{years}} years of trust. {{customers}} happy customers. The latest phones from {{brands}} & more — all under one roof in {{city}}.",
    cta_primary: "Shop Now — Visit Store",
    cta_secondary: "Call {{phone}}",
    stat_years: "Years Trusted",
    stat_customers: "Happy Customers",
    stat_followers: "Instagram Followers",
    stat_brands: "Premium Brands",
  },
  products: {
    label: "Featured Collection",
    heading: "Latest Smartphones",
    subtitle:
      "Explore our handpicked selection of flagship and bestselling phones — all available with live demo at our store.",
    enquire: "Enquire Now",
    enquire_short: "Enquire",
    view_all: "See all products on Instagram",
    tags: {
      "New Arrival": "New Arrival",
      "Best Seller": "Best Seller",
      Premium: "Premium",
      "AI Powered": "AI Powered",
      "Special Offer": "Special Offer",
      "Coming Soon": "Coming Soon",
    } as Record<string, string>,
  },
  brands: {
    label: "Authorized Dealer",
    heading: "We Carry the Best Brands",
    subtitle:
      "Genuine products with full manufacturer warranty from the world's leading smartphone brands.",
  },
  about: {
    label: "Why Choose Us",
    heading: "More Than Just a Phone Store",
    subtitle:
      "{{name}} is {{city}}'s most trusted electronics destination, offering a premium shopping experience with expert guidance.",
    badge_years: "{{years}}",
    badge_label: "Years of Trust",
    services: [
      {
        title: "New Smartphones",
        description: "Latest flagship & budget phones from all top brands",
        icon: "smartphone",
      },
      {
        title: "Live Demo",
        description: "Try before you buy — hands-on with every model",
        icon: "play",
      },
      {
        title: "Exchange Offers",
        description: "Best value for your old phone with instant evaluation",
        icon: "repeat",
      },
      {
        title: "Easy EMI",
        description: "Affordable monthly installments with major bank partners",
        icon: "creditCard",
      },
      {
        title: "Accessories",
        description: "Cases, chargers, earphones & everything your phone needs",
        icon: "headphones",
      },
      {
        title: "After-Sales Support",
        description: "Dedicated support even after your purchase",
        icon: "shield",
      },
    ],
  },
  gallery: {
    label: "@jalaram_sales_patan",
    heading: "From Our Instagram",
    subtitle: "Follow us for the latest drops, unboxings, and exclusive offers.",
  },
  reviews: {
    label: "Customer Love",
    heading: "What Our Customers Say",
    subtitle:
      "Don't just take our word for it — hear from real customers who made their purchase at Jalaram Sales.",
  },
  faq: {
    label: "FAQ",
    heading: "Got Questions?",
    subtitle: "Everything you need to know before visiting our store.",
    items: [
      {
        question: "Do you offer EMI options on smartphones?",
        answer:
          "Yes! We offer easy EMI options through major banks and finance partners. You can purchase your dream phone with affordable monthly installments. Visit our store for detailed EMI plans.",
      },
      {
        question: "Is exchange available for old phones?",
        answer:
          "Absolutely! We accept old phones in exchange and offer the best value. Bring your old device to our store for an instant evaluation and discount on your new purchase.",
      },
      {
        question: "Are all products genuine and under warranty?",
        answer:
          "100%. We are an authorized dealer for all brands we carry — Oppo, Vivo, Samsung, Apple, Realme, and Google Pixel. Every product comes with full manufacturer warranty.",
      },
      {
        question: "Do you have live demo available before purchase?",
        answer:
          "Yes, we keep live demo units for most flagship and popular models. You can try before you buy — experience the phone hands-on before making your decision.",
      },
      {
        question: "What are your store timings?",
        answer:
          "We are open Monday to Saturday from 10:00 AM to 9:00 PM, and Sunday from 10:00 AM to 2:00 PM. Visit us at Tirupati Market, Bagwada Darvaja, Patan.",
      },
      {
        question: "Do you deliver to nearby cities?",
        answer:
          "We primarily serve walk-in customers at our Patan store, but we can arrange delivery for nearby areas. Contact us on WhatsApp for delivery inquiries.",
      },
    ],
  },
  contact: {
    label: "Visit Us Today",
    heading: "Come Experience the Difference",
    subtitle:
      "Walk in, explore, try live demos, and leave with the perfect phone. We're here to help.",
    location_heading: "Store Location",
    directions: "Get Directions",
    call_heading: "Call Us",
    hours_heading: "Store Hours",
    weekdays_label: "Mon – Sat:",
    sunday_label: "Sunday:",
    whatsapp_label: "WhatsApp Us",
    instagram_label: "Follow on IG",
    cta_heading: "Ready to Get Your Next Phone?",
    cta_subtitle:
      "Visit Jalaram Sales today and experience our phones hands-on. Live demos available for all flagship models.",
    cta_primary: "Shop Now — Visit Store",
    cta_secondary: "Call {{phone}}",
  },
  footer: {
    description:
      "Your trusted electronics destination in {{city}}. Authorized dealer for {{brands}} & more. Experience premium smartphones with live demo before you buy.",
    quick_links: "Quick Links",
    links: {
      products: "Products",
      brands: "Our Brands",
      about: "About Us",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
    },
    contact_heading: "Contact",
    copyright: "© {{year}} {{name}}. All rights reserved. Built with ♥ in {{city}}.",
  },
  whatsapp: {
    aria_label: "Chat on WhatsApp",
    message_general: "Hi! I'm interested in your products.",
    message_hero:
      "Hi! I'd like to know about your latest phones and offers.",
    message_contact:
      "Hi! I'd like to know about your latest phones and offers.",
    message_visit:
      "Hi! I want to visit the store. What are your timings?",
    message_product:
      "Hi! I'm interested in the {{product}}. Is it available?",
  },
};

export type Translations = typeof en;
