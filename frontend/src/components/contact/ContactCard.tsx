'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  accent: string;
}

export const ContactCard = ({ title, value, href, icon: Icon, accent }: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative flex items-center gap-4 p-4 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04] shadow-lg shadow-black/20"
    >
      {/* Outer Glow Layer */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${accent} bg-opacity-10 p-2.5 text-white transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="w-full h-full text-white" />
      </div>

      <div className="flex flex-col overflow-hidden">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        <span className="text-sm sm:text-base font-medium text-slate-200 truncate group-hover:text-blue-400 transition-colors duration-200">
          {value}
        </span>
      </div>
    </motion.a>
  );
};