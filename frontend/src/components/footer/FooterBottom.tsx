import React from "react";
import { motion } from "framer-motion";
import { TechBadge } from "@/src/data/footer";
import BackToTop from "./BackToTop";

interface FooterBottomProps {
  name: string;
  techStack: TechBadge[];
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function FooterBottom({ name, techStack }: FooterBottomProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800/40 pt-8 text-xs text-slate-500 sm:flex-row"
    >
      <div>
        <p>© 2026 {name}. All rights reserved.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1">Made with ❤️ using:</span>
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="rounded-md border border-slate-800/80 bg-slate-900/60 px-2 py-0.5 font-medium text-slate-400 backdrop-blur-sm transition-colors hover:border-slate-700 hover:text-slate-300"
          >
            {tech.name}
          </span>
        ))}
      </div>

      <div>
        <BackToTop />
      </div>
    </motion.div>
  );
}
