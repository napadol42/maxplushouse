"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let&apos;s create
              <br />
              <span className="font-light italic">something</span>
              <br />
              extraordinary
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Whether you have a clear vision or just the beginning of an idea,
              we&apos;d love to hear from you. Every great space starts with a
              conversation.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-300">
                  hello@maxplushouse.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-300">
                  Bangkok, Thailand
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-gray-500 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-gray-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-widest uppercase text-gray-500 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-widest uppercase text-gray-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white placeholder:text-gray-600 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-wide uppercase hover:bg-gray-200 transition-colors duration-300 mt-4"
              >
                Send Message
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
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
