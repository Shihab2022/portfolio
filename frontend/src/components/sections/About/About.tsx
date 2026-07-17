/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { StatItem } from "@/src/types/stats";

interface AboutProps {
  data: {
    story: string;
    mission: string;
    vision: string;
    values: string[];
  };
  stats: StatItem[];
}

export function About({ data, stats }: AboutProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-white/5 relative z-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Dynamic Statistics Block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => {
            const IconComponent = (LucideIcons as any)[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                    {stat.label}
                  </span>
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-cyan-400" />
                  )}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                  <span className="text-cyan-400 font-bold ml-1">
                    {stat.suffix}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative & Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-xs font-bold tracking-widest text-blue-400 uppercase">
              {`// REASONING`}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Engineering with absolute purpose.
            </h2>
            <p className="text-slate-400 font-light leading-relaxed text-sm">
              {data.story}
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900/50 border border-white/5">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{`// MISSION DIRECTIVE`}</h4>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {data.mission}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.values.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(147, 51, 234, 0.3)" }}
                className="glass-card p-6 rounded-2xl bg-slate-950/40 border border-white/5 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-purple-400">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{value}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Ensuring zero latency, maintainable structure, and dynamic
                  modular logic inside the stack.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
