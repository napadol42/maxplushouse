"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-black">
            MAX<span className="font-light">PLUS</span>HOUSE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
          <li>
            <Link
              href="/"
              className="text-gray-500 hover:text-black transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-500 hover:text-black transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-gray-500 hover:text-black transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-gray-500 hover:text-black transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-sm font-medium tracking-wide uppercase">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
