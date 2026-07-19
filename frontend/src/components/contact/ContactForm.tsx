"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useContactForm } from "./useContactForm";

export const ContactForm = () => {
  const { register, handleSubmit, errors, isLoading, isSuccess } =
    useContactForm();

  const inputStyles =
    "w-full px-4 py-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-white font-light placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-purple-500/10 transition-all duration-200 text-sm";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative p-6 sm:p-8 rounded-[24px] border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="John Doe"
              className={inputStyles}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-xs font-medium text-pink-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={inputStyles}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-xs font-medium text-pink-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Company <span className="text-slate-600">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              placeholder="Acme Inc."
              className={inputStyles}
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              placeholder="Project Partnership"
              className={inputStyles}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject && (
              <p className="text-xs font-medium text-pink-500">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wider text-slate-400"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            placeholder="Tell me details about your project timeline, goals, stack..."
            className={`${inputStyles} resize-none`}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p className="text-xs font-medium text-pink-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending System Query...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Success Banner Dynamic System Notification */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#0B0F19]/95 rounded-[24px] border border-emerald-500/30 backdrop-blur-md z-20 text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center p-2.5">
              <CheckCircle2 className="w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Message Sent Successfully
            </h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Thank you! Your submission details have dropped into my pipeline.
              I will respond shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
