"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, MapPin, Mail, Phone, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Full-Service Social",
    budget: "£25k - £50k",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not provided",
        service: formData.service,
        budget: formData.budget,
        message: formData.message || "No specific message provided",
        source: "Slide-out Project Brief Drawer",
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
          "Unable to send brief right now. Please email info@mad0media.com or contact us on WhatsApp."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMsg("Network error. Please try again or reach us directly at info@mad0media.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
          {/* Backdrop click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl h-full bg-brand-surface border-l border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-neon font-semibold">
                    Start A Conversation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Get In Touch
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Thanks for reaching out to Mad O Media. One of our strategy directors will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMsg(null);
                      onClose();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      How Can We Partner?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {["Full-Service Social", "Creator Engine", "Social Strategy"].map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.service === srv
                              ? "bg-brand-neon text-black border-brand-neon font-semibold"
                              : "bg-white/5 text-zinc-300 border-white/10 hover:border-white/20"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Monthly Budget Scope
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-neon transition-colors"
                    >
                      <option value="£15k - £25k" className="bg-brand-dark">£15,000 - £25,000 / month</option>
                      <option value="£25k - £50k" className="bg-brand-dark">£25,000 - £50,000 / month</option>
                      <option value="£50k - £100k+" className="bg-brand-dark">£50,000 - £100,000+ / month</option>
                      <option value="Custom Project" className="bg-brand-dark">One-Off Campaign / Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Tell us about your brand challenge
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-brand-neon transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-neon text-black font-bold text-sm hover:bg-brand-neon/90 hover:shadow-lg hover:shadow-brand-neon/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to info@mad0media.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct contact info in drawer footer */}
            <div className="pt-6 mt-8 border-t border-white/10 text-xs text-zinc-400 space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-neon" />
                <a href="mailto:info@mad0media.com" className="hover:text-white transition-colors font-medium text-white">
                  info@mad0media.com
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-zinc-300">
                <span className="text-zinc-500">Call / WhatsApp:</span>
                <a href="tel:+918828888130" className="hover:text-brand-neon transition-colors">88288 88130</a>
                <span>•</span>
                <a href="tel:+919082903363" className="hover:text-brand-neon transition-colors">90829 03363</a>
                <span>•</span>
                <a href="tel:+919769021534" className="hover:text-brand-neon transition-colors">97690 21534</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
