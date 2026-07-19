"use client";

import { contactConfig } from "@/src/data/contact";
import { motion } from "framer-motion";

export const ContactHeader = () => {
  const { title, heading, description } = contactConfig.personalInfo;

  return (
    <div className="space-y-4 max-w-2xl">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {title}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg text-slate-400 font-light leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
};
