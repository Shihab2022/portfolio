/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { contactConfig } from "@/src/data/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ContactInfo = () => {
  const { status, cards } = contactConfig;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-4 w-full"
    >
      {cards.map((card) => (
        <motion.div key={card.id} variants={itemVariants}>
          {/* cast icon to any to satisfy ContactCard prop type when icons come from different libraries */}
          <ContactCard {...card} icon={card.icon as any} />
        </motion.div>
      ))}

      {/* Availability Status Box */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/2 backdrop-blur-xl shadow-lg"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-400">
              {status.text}
            </span>
          </div>
          <p className="text-xs text-slate-400">{status.subtext}</p>
        </div>

        <a
          href={status.resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};
