"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/data";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured
              <br />
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-gray-500 hover:text-black transition-colors duration-300"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border border-black text-sm font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
