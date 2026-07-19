"use client";

import { contactConfig } from "@/src/data/contact";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 w-full">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
        Connect across platforms
      </span>
      <div className="flex items-center gap-3">
        {contactConfig.socials.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/1 text-slate-400 transition-all duration-300 hover:bg-white/3 hover:border-white/10 shadow-inner group ${social.color}`}
              aria-label={`Follow on ${social.name}`}
            >
              <Icon className="w-4 h-4 text-current transition-transform duration-300 group-hover:rotate-3" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
