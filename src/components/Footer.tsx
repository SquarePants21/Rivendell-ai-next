"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4 elven-text">
              Rivendell
            </h3>
            <p className="text-light/70 text-sm">
              Intelligent Digital Solutions for the modern age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li>
                <Link href="/services#web" className="hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-primary transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:text-primary transition-colors">
                  Design & Branding
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="hover:text-primary transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-sm text-light/70 mb-4">
              contact@rivendellai.com
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8 text-center text-sm text-light/70">
          <p>&copy; {currentYear} Rivendell AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
