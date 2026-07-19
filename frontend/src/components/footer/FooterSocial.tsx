import React from "react";
import { motion } from "framer-motion";
import { SocialLink } from "@/src/data/footer";

interface FooterSocialProps {
  socials: SocialLink[];
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function FooterSocial({ socials }: FooterSocialProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap justify-center gap-3"
    >
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/2 backdrop-blur-md text-slate-400 transition-all duration-300 hover:border-purple-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            {/* Embedded Interactive Tooltip */}
            <span className="absolute bottom-full mb-2 scale-0 rounded bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-30">
              {social.label}
            </span>
            <Icon
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </motion.div>
  );
}
