import { contactConfig } from "@/src/data/contact";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface FooterBrandProps {
  name: string;
  tagline: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function FooterBrand({ name, tagline }: FooterBrandProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col space-y-5 text-center sm:text-left"
    >
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
          {name}
          <span className="text-blue-500">.</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-sm sm:mx-0 mx-auto">
          {tagline}
        </p>
      </div>
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row max-w-125 items-start sm:items-center justify-between gap-4 p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/2 backdrop-blur-xl shadow-lg"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-400">
              {contactConfig?.status.text}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            {contactConfig?.status.subtext}
          </p>
        </div>

        <a
          href={contactConfig?.status.resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
