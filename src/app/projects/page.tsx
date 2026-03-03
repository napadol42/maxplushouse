"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getAllCategories } from "@/lib/data";

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="pt-28 md:pt-36 pb-24 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Projects
          </h1>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
