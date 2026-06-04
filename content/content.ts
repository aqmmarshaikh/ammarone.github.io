export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const featuredProducts: Product[] = [
  {
    id: "oppo-find-x9s-ultra",
    name: "Oppo Find X9s Ultra",
    brand: "Oppo",
    price: "₹69,999",
    originalPrice: "₹74,999",
    image: "/photos/post_1.jpg",
    tag: "New Arrival",
    description: "Flagship camera phone with Hasselblad imaging",
  },
  {
    id: "vivo-x300-fe",
    name: "Vivo X300 FE",
    brand: "Vivo",
    price: "₹35,999",
    originalPrice: "₹39,999",
    image: "/photos/post_2.jpg",
    tag: "Best Seller",
    description: "Compact design with expansive imaging capabilities",
  },
  {
    id: "samsung-galaxy-fold-7",
    name: "Samsung Galaxy Z Fold 7",
    brand: "Samsung",
    price: "₹1,64,999",
    image: "/photos/post_8.jpg",
    tag: "Premium",
    description: "Next-gen foldable with stunning display",
  },
  {
    id: "google-pixel-9",
    name: "Google Pixel 9",
    brand: "Google",
    price: "₹79,999",
    image: "/photos/post_5.jpg",
    tag: "AI Powered",
    description: "Pure Android experience with Tensor G4",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: "₹69,900",
    originalPrice: "₹79,900",
    image: "/photos/post_12.jpg",
    tag: "Special Offer",
    description: "Dynamic Island. 48MP camera. USB-C.",
  },
  {
    id: "realme-gt7-pro",
    name: "Realme GT 7 Pro",
    brand: "Realme",
    price: "₹39,999",
    image: "/photos/post_4.jpg",
    description: "Performance beast with Snapdragon 8 Elite",
  },
  {
    id: "oppo-reno-15",
    name: "Oppo Reno 15 Series",
    brand: "Oppo",
    price: "₹29,999",
    image: "/photos/post_6.jpg",
    tag: "Coming Soon",
    description: "Style meets substance in the Reno lineup",
  },
  {
    id: "oppo-find-x9",
    name: "Oppo Find X9",
    brand: "Oppo",
    price: "₹49,999",
    image: "/photos/post_10.jpg",
    description: "Premium flagship experience",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Patel",
    rating: 5,
    text: "Best mobile shop in Patan! Got my Oppo Find X9 at the best price with amazing after-sales service. The staff really understands phones and helped me pick the right one.",
    date: "May 2025",
  },
  {
    id: "t2",
    name: "Priya Shah",
    rating: 5,
    text: "Purchased Samsung Galaxy Z Fold from Jalaram Sales. Great experience! They had live demo available and explained every feature. Will definitely recommend to friends.",
    date: "April 2025",
  },
  {
    id: "t3",
    name: "Kiran Mehta",
    rating: 5,
    text: "Trustworthy shop with genuine products. Been buying from Jalaram Sales for years. They always have the latest models and competitive pricing.",
    date: "March 2025",
  },
  {
    id: "t4",
    name: "Amit Thakkar",
    rating: 4,
    text: "Good collection of all brands under one roof. Got the best exchange deal on my old phone. Smooth process and friendly staff.",
    date: "February 2025",
  },
  {
    id: "t5",
    name: "Nisha Joshi",
    rating: 5,
    text: "Just bought the Vivo X300 FE — the live demo convinced me immediately. Jalaram Sales is the go-to store for smartphones in Patan.",
    date: "January 2025",
  },
];

export const faqs: FAQ[] = [
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
      "While we primarily serve walk-in customers at our Patan store, we can arrange delivery for nearby areas. Contact us on WhatsApp for delivery inquiries.",
  },
];

export const services = [
  {
    title: "New Smartphones",
    description: "Latest flagship & budget phones from all top brands",
    icon: "smartphone",
  },
  {
    title: "Live Demo",
    description: "Try before you buy — hands-on experience with every model",
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
];
