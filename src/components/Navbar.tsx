"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // At the very top, always show
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> show header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[76px] bg-black border-b border-neutral-900 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1440px] h-full mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* MAD O MEDIA Logo */}
          <Link href="/" className="flex items-center shrink-0 py-1.5 group">
            <img
              src="/images/mad-o-media-logo.png"
              alt="MAD O MEDIA"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9 text-[15px] font-medium text-white">
            <Link
              href="/who-we-are"
              className={`transition-colors duration-150 hover:text-[#FF3EB5] ${
                pathname === "/who-we-are" ? "text-[#FF3EB5]" : "text-white"
              }`}
            >
              Who we are
            </Link>
            <Link
              href="/what-we-do"
              className={`transition-colors duration-150 hover:text-[#FF3EB5] ${
                pathname === "/what-we-do" ? "text-[#FF3EB5]" : "text-white"
              }`}
            >
              What we do
            </Link>
            <Link
              href="/news"
              className={`transition-colors duration-150 hover:text-[#FF3EB5] ${
                pathname === "/news" ? "text-[#FF3EB5]" : "text-white"
              }`}
            >
              News
            </Link>
            <Link
              href="/faqs"
              className={`transition-colors duration-150 hover:text-[#FF3EB5] ${
                pathname === "/faqs" ? "text-[#FF3EB5]" : "text-white"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Exact Hot Pink "Get in touch" Button & Download Company Profile */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href="/mad-o-media-company-profile-2026.pdf"
              download="mad-o-media-company-profile-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-700 hover:border-[#FF3EB5] text-white/90 hover:text-[#FF3EB5] text-[14px] font-medium transition-all duration-200 group"
              title="Download Mad O Media 2026 Company Profile"
            >
              <Download className="w-3.5 h-3.5 text-[#FF3EB5] group-hover:scale-110 transition-transform" />
              <span>Company Profile</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-md bg-[#FF3EB5] text-black text-[15px] font-bold tracking-normal transition-all duration-200 hover:bg-white hover:text-black"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FF3EB5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] bg-black z-[60] px-6 pt-8 pb-14 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-2xl font-bold">
            <Link
              href="/who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#FF3EB5] transition-colors"
            >
              Who we are
            </Link>
            <Link
              href="/what-we-do"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#FF3EB5] transition-colors"
            >
              What we do
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#FF3EB5] transition-colors"
            >
              News
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#FF3EB5] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="pt-8 border-t border-neutral-900 space-y-3.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3.5 text-center rounded-md bg-[#FF3EB5] text-black font-bold text-base hover:bg-white transition-colors"
            >
              Get in touch
            </Link>

            <a
              href="/mad-o-media-company-profile-2026.pdf"
              download="mad-o-media-company-profile-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-center rounded-md border border-neutral-700 bg-neutral-900 text-white font-semibold text-sm hover:border-[#FF3EB5] hover:text-[#FF3EB5] transition-colors"
            >
              <Download className="w-4 h-4 text-[#FF3EB5]" />
              <span>Download Company Profile (PDF)</span>
            </a>

            {/* Secondary Legal & Contact Links */}
            <div className="pt-4 border-t border-neutral-900/80 flex flex-col space-y-3.5 text-[15px] font-normal text-neutral-300">
              <Link
                href="/privacy-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF3EB5] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF3EB5] transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF3EB5] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
