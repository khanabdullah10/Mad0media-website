"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Top: Brand Logo */}
        <div className="pb-8 border-b border-neutral-900">
          <Link href="/" className="inline-block group">
            <img
              src="/images/mad-o-media-logo.png"
              alt="MAD O MEDIA"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Middle: Newsletter Left & Navigation Columns Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct WhatsApp & Query Callout */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-medium text-white max-w-sm leading-snug">
              Ready to take your brand to the next level?
            </h3>
            <p className="text-neutral-400 text-sm max-w-sm">
              Connect with our team directly on WhatsApp or drop us an email for immediate campaign assistance.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black text-sm font-bold transition-all duration-300 hover:bg-white"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/#contact-query"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Send Query</span>
              </Link>
            </div>
          </div>

          {/* Right Columns: Links & Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-[15px]">
            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Explore</h3>
              <ul className="space-y-2.5 text-neutral-400">
                <li>
                  <Link href="/who-we-are" className="hover:text-[#FE3EB4] transition-colors">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-[#FE3EB4] transition-colors">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-[#FE3EB4] transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#FE3EB4] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="/mad-o-media-company-profile-2026.pdf"
                    download="mad-o-media-company-profile-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FE3EB4] transition-colors inline-flex items-center gap-1.5 text-white/90 font-medium"
                  >
                    <span>Company Profile (PDF)</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FE3EB4]/20 text-[#FE3EB4] font-bold uppercase tracking-wider">
                      PDF
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Legal</h3>
              <ul className="space-y-2.5 text-neutral-400">
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#FE3EB4] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-[#FE3EB4] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FE3EB4] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Contact</h3>
              <ul className="space-y-2.5 text-neutral-400 text-sm">
                <li>
                  <a
                    href="mailto:info@mad0media.com"
                    className="hover:text-[#FE3EB4] transition-colors font-medium text-white break-all"
                  >
                    info@mad0media.com
                  </a>
                </li>
                <li className="pt-1 text-neutral-500 text-xs uppercase tracking-wider font-semibold">
                  Phone / WhatsApp
                </li>
                <li>
                  <a href="tel:+918828888130" className="hover:text-[#FE3EB4] transition-colors">
                    +91 88288 88130
                  </a>
                </li>
                <li>
                  <a href="tel:+919082903363" className="hover:text-[#FE3EB4] transition-colors">
                    +91 90829 03363
                  </a>
                </li>
                <li>
                  <a href="tel:+919769021534" className="hover:text-[#FE3EB4] transition-colors">
                    +91 97690 21534
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links (Strictly Instagram & LinkedIn only) */}
          <div className="flex items-center space-x-6 text-white text-lg">
            <a
              href="https://www.linkedin.com/company/madomedia/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#FE3EB4] transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mad.o.media?rpxt=ZnJmOW1mMzJuaDQy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#FE3EB4] transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-500 font-normal">
            © {new Date().getFullYear()} Mad O Media. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

