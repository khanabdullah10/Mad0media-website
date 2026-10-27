"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    office: "Mumbai",
    budget: "Custom Project",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        _subject: `New Contact Inquiry from ${formData.name} - MAD O MEDIA`,
        _template: "table",
        _captcha: "false",
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not provided",
        interest: formData.office,
        message: formData.message,
      };

      await fetch("https://formsubmit.co/ajax/info@mad0media.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch {
      // Offline or static fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-neon font-bold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Let&apos;s build something unforgettable together.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400">
          Whether you&apos;re looking for a new agency of record, need to reboot your creator strategy, or want to dominate social commerce.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-brand-surface border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="py-14 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
              <p className="text-sm sm:text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your inquiry has been forwarded directly to <span className="text-[#FF3EB5] font-semibold">info@mad0media.com</span>. Our leadership team will review your brief and be in touch within 24 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={`mailto:info@mad0media.com?subject=Project Inquiry - ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0ACompany: ${encodeURIComponent(formData.company)}%0D%0AInterest: ${encodeURIComponent(formData.office)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-semibold text-white transition-all"
                >
                  Open in Mail App
                </a>
                <a
                  href={`https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20sent%20an%20inquiry%20regarding%20${encodeURIComponent(formData.office)}:%20${encodeURIComponent(formData.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-black text-xs font-bold hover:bg-white transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", office: "Mumbai", budget: "Custom Project", message: "" });
                  }}
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2">
                    Primary Interest
                  </label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-neon transition-colors"
                  >
                    <option value="Influencer Marketing" className="bg-brand-dark">Influencer Marketing</option>
                    <option value="Social Media" className="bg-brand-dark">Social Media Strategy</option>
                    <option value="Performance" className="bg-brand-dark">Performance Marketing</option>
                    <option value="Web Development" className="bg-brand-dark">Web Design & Dev</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">
                  Tell us about your objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-neon disabled:opacity-60 text-black font-extrabold text-sm hover:bg-brand-neon/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-neon/20 cursor-pointer"
              >
                <span>{isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}</span>
                <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact & WhatsApp Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-brand-card border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-neon" />
              Direct Contact & WhatsApp
            </h3>

            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Email</span>
                <p>
                  <a href="mailto:info@mad0media.com" className="text-white hover:text-brand-neon transition-colors font-medium">
                    info@mad0media.com
                  </a>
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Direct Phone Numbers</span>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {[
                    { num: "8828888130", label: "+91 88288 88130" },
                    { num: "9082903363", label: "+91 90829 03363" },
                    { num: "9769021534", label: "+91 97690 21534" },
                  ].map((p, i) => (
                    <a
                      key={i}
                      href={`tel:+91${p.num}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-neon/60 transition-colors"
                    >
                      <span className="font-semibold text-white">{p.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <h4 className="text-sm font-bold text-white">Connect on Social</h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/mad.o.media?rpxt=ZnJmOW1mMzJuaDQy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#FF3EB5] text-white text-xs font-semibold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/madomedia/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#4B70D8] text-white text-xs font-semibold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <h4 className="text-sm font-bold text-white">Agency Credentials</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Download our complete 2026 Company Profile detailing our client roster, disciplines, and campaign frameworks.
            </p>
            <div className="pt-1">
              <a
                href="/mad-o-media-company-profile-2026.pdf"
                download="MAD-O-MEDIA-Company-Profile-2026.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#FF3EB5] text-white hover:text-black text-xs font-bold transition-all w-full justify-center"
              >
                <span>Download Company Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
