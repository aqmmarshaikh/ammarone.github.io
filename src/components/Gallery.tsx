"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const galleryPosts = [
  { src: "/photos/post_1.jpg", type: "video", likes: 127 },
  { src: "/photos/post_3.jpg", type: "image", likes: 21 },
  { src: "/photos/post_5.jpg", type: "image", likes: 23 },
  { src: "/photos/post_6.jpg", type: "image", likes: 15 },
  { src: "/photos/post_7.jpg", type: "image", likes: 10 },
  { src: "/photos/post_9.jpg", type: "image", likes: 18 },
  { src: "/photos/post_10.jpg", type: "video", likes: 65 },
  { src: "/photos/post_11.jpg", type: "video", likes: 65 },
];

export default function Gallery() {
  const { locale } = useLanguage();

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
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
            {locale.gallery.label}
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,4vw,3rem)] text-white mb-4">
            {locale.gallery.heading}
          </h2>
          <p className="text-surface-400 max-w-xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {locale.gallery.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {galleryPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/jalaram_sales_patan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={post.src}
                alt={`Jalaram Sales Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {post.type === "video" && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <Play size={10} className="text-white fill-white ml-0.5 sm:hidden" />
                  <Play size={12} className="text-white fill-white ml-0.5 hidden sm:block" />
                </div>
              )}
              <div className="absolute inset-0 bg-surface-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  <Heart size={16} className="fill-white" /> {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  <MessageCircle size={16} /> 0
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
