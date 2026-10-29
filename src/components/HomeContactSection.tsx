"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, ArrowUpRight } from "lucide-react";

export function HomeContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Influencer Marketing",
    message: "",
  });

  const services = [
    "Branding",
    "Social Media",
    "Influencer Marketing",
    "Web Design & Dev",
    "ERP & CRM",
    "Digital Marketing",
    "Performance Marketing",
    "Software Solutions",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        service: formData.service,
        message: formData.message,
        source: "Homepage - Send Us A Query",
      };

      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch {
        // Fallback if local dev environment returns non-JSON
        if (process.env.NODE_ENV !== "production") {
          setSubmitted(true);
          return;
        }
      }

      if (response.ok && result?.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(
          result?.error ||
          "Unable to send query at this moment. Please email info@mad0media.com or contact us via WhatsApp."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg("Network error. Please try again or reach us directly at info@mad0media.com or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-query" className="w-full bg-[#0a0a0a] text-white py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#4B70D8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF3EB5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FF3EB5]/15 text-[#FF3EB5] border border-[#FF3EB5]/30">
                Contact Information
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Let&apos;s build something <span className="text-[#FF3EB5]">unforgettable</span> together.
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed pt-1">
                Have a campaign in mind, need to revamp your social strategy, or looking for creator activations? Drop us a query or reach out directly.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#FF3EB5] shrink-0 border border-neutral-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Email Us</p>
                    <a
                      href="mailto:info@mad0media.com"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#FF3EB5] transition-colors"
                    >
                      info@mad0media.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("info@mad0media.com")}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Three Contact Numbers */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3.5">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#4B70D8] shrink-0 border border-neutral-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Direct Contact Numbers</p>
                  <p className="text-xs text-neutral-500">Available Monday to Saturday</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {[
                  { num: "8828888130", label: "88288 88130" },
                  { num: "9082903363", label: "90829 03363" },
                  { num: "9769021534", label: "97690 21534" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:+91${item.num}`}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-[#4B70D8]/60 hover:bg-neutral-800/80 transition-all group"
                  >
                    <span className="text-sm font-semibold text-neutral-200 group-hover:text-white">
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#4B70D8] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#25D366]/10 via-neutral-950/90 to-neutral-950/90 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-black flex items-center justify-center shrink-0 font-bold shadow-lg shadow-[#25D366]/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.126-.522-1.831-.762-3.003-2.628-3.094-2.75-.091-.122-.743-.99-.743-1.888 0-.898.469-1.34.636-1.52.167-.18.364-.225.485-.225.121 0 .243.001.349.006.111.005.26-.042.406.31.152.364.516 1.26.562 1.352.045.091.076.197.015.318-.061.121-.091.197-.182.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.697.621 1.285.814 1.468.905.182.091.288.076.394-.045.106-.122.455-.53.576-.712.122-.182.243-.152.409-.091.167.061 1.061.501 1.243.592.182.091.303.136.349.212.045.076.045.44-.099.845z"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.174L2 22l4.981-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.053c-1.627 0-3.134-.483-4.402-1.312l-.316-.207-2.964.778.791-2.89-.226-.36A8.04 8.04 0 0 1 3.947 12C3.947 7.559 7.559 3.947 12 3.947s8.053 3.612 8.053 8.053-3.612 8.053-8.053 8.053z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Chat on WhatsApp</h3>
                    <p className="text-xs text-neutral-400">Direct response within minutes</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1.5 shadow-md shadow-[#25D366]/20"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Quick direct chat to any of the 3 numbers */}
              <div className="pt-1 flex flex-wrap gap-2 text-xs">
                <span className="text-neutral-500 py-1">WhatsApp chat with:</span>
                <a
                  href="https://wa.me/918828888130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                >
                  8828888130
                </a>
                <a
                  href="https://wa.me/919082903363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                >
                  90829 03363
                </a>
                <a
                  href="https://wa.me/919769021534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                >
                  97690 21534
                </a>
              </div>
            </div>

            {/* Social Links (Strictly Instagram & LinkedIn only) */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Connect On Social</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/mad.o.media?rpxt=ZnJmOW1mMzJuaDQy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#FF3EB5] text-neutral-300 hover:text-white transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current text-[#FF3EB5]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs font-semibold">Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/madomedia/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#4B70D8] text-neutral-300 hover:text-white transition-all group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current text-[#4B70D8]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                  </svg>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Query Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-neutral-950/90 border border-neutral-800 shadow-2xl relative">
              {submitted ? (
                <div className="py-14 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your query has been delivered to <span className="text-[#FF3EB5] font-semibold">info@mad0media.com</span>. Our leadership team will review and reply within 24 hours.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <a
                      href={`mailto:info@mad0media.com?subject=Project Inquiry - ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AService: ${encodeURIComponent(formData.service)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-semibold text-white transition-all"
                    >
                      Open in Email App
                    </a>
                    <a
                      href={`https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20sent%20a%20query%20for%20${encodeURIComponent(formData.service)}:%20${encodeURIComponent(formData.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#25D366] text-black text-xs font-bold hover:bg-white transition-all"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMsg(null);
                        setFormData({ name: "", email: "", phone: "", service: "Influencer Marketing", message: "" });
                      }}
                      className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Send Us A Query</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Fill out your details below and we will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3EB5] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3EB5] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3EB5] transition-colors"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider">
                      Service / Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FF3EB5] transition-colors"
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s} className="bg-neutral-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2 uppercase tracking-wider">
                      Your Query / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3EB5] transition-colors resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#FF3EB5] disabled:opacity-60 text-black font-bold text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(255,62,181,0.4)] cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending Query..." : "Submit Query"}</span>
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
