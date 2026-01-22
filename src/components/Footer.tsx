"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="heading-4 font-bold text-primary-600 mb-4">
              Rivendell
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Intelligent Digital Solutions for the modern age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-6 font-bold text-neutral-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/services#web" className="hover:text-primary-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-primary-600 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:text-primary-600 transition-colors">
                  Design & Branding
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="hover:text-primary-600 transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-6 font-bold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/about" className="hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-6 font-bold text-neutral-900 mb-4">Connect</h4>
            <p className="text-sm text-neutral-600 mb-4">
              contact@rivendellai.com
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          <p>&copy; {currentYear} Rivendell AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
