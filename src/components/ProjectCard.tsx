"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-semibold tracking-widest uppercase">
              {project.category}
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.location}</p>
        </div>
      </Link>
    </motion.div>
  );
}
