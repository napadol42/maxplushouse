"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative overflow-hidden bg-gray-100 ${
            index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={img}
            alt={`${title} — Gallery image ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes={
              index === 0
                ? "100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
          />
        </motion.div>
      ))}
    </div>
  );
}
