import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              MAX<span className="font-light">PLUS</span>HOUSE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting spaces that transcend the ordinary. Architecture and home
              design rooted in minimalism and purpose.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@maxplushouse.com</li>
              <li>+66 2 123 4567</li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Maxplushouse. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Pinterest
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              LinkedIn
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
