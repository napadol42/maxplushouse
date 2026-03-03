"use client";

import { motion } from "framer-motion";

export default function AboutSummary() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Label & Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Design with
              <br />
              <span className="font-light italic">intention</span>
            </h2>
          </motion.div>

          {/* Right — Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              At Maxplushouse, we believe architecture is more than shelter — it
              is an act of curation. Every project begins with listening: to the
              land, to the light, and to the lives that will inhabit the space.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our practice is guided by restraint. We pursue clarity over
              complexity, essence over excess. The result is spaces that feel
              effortless — where structure, material, and void exist in quiet
              harmony.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold">12+</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                  Years
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">85+</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">15+</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                  Awards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
