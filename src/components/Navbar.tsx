"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    setIsDark(darkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="heading-5 font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Rivendell
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/services" className="link-nav text-neutral-700 hover:text-primary-600 font-medium">
              Services
            </Link>
            <Link href="/packages" className="link-nav text-neutral-700 hover:text-primary-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="link-nav text-neutral-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="link-nav text-neutral-700 hover:text-primary-600 font-medium">
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary btn-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4 space-y-3 animate-slide-up">
            <Link
              href="/services"
              className="block text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/packages"
              className="block text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block btn-primary text-center text-sm py-3 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
