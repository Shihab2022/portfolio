/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Lucide from "lucide-react";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { Magnetic } from "../../animations/Magnetic";
import { HeroData } from "../../../types/sections";
import heroImage from "../../../../public/assets/shihab-hero-section.jpg";
import { cn } from "@/src/utils/utils";

const IconResolver = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const AllIcons: Record<string, any> = {
    ...Lucide,
    ...RiIcons,
    ...SiIcons,
    ...BiIcons,
  };
  const ResolvedIcon = AllIcons[name];
  if (!ResolvedIcon) return <Lucide.Terminal className={className} />;
  return <ResolvedIcon className={className} />;
};

export interface HeroProps {
  data: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const [titleIndex, setTitleIndex] = useState(0);

  // Cyclical layout processing for professional titles
  useEffect(() => {
    const internalTimer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % data.titles.length);
    }, 3500);
    return () => clearInterval(internalTimer);
  }, [data.titles.length]);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-20 select-none"
      aria-label="Introduction presentation section"
    >
      {/* Premium Linear Mesh Theme Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0F172A] via-[#111827] via-[#1E293B] to-[#2563EB]/20" />

      {/* Blurry Mesh Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-600/15 blur-[80px] sm:blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[150px] pointer-events-none" />

      {/* Floating Canvas Elements Layer */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {data.floatingIcons.map((icon, idx) => (
          <motion.div
            key={idx}
            className="absolute p-4 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md shadow-2xl flex items-center justify-center text-slate-400"
            style={{ left: `${icon.xOffset}%`, top: `${icon.yOffset}%` }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconResolver
              name={icon.iconName}
              className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Structural Structural Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center self-start gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-medium text-xs sm:text-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{data.availability.text}</span>
          </motion.div>

          {/* Core Typography Presentation */}
          <div className="space-y-3 sm:space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg tracking-wider font-mono text-cyan-400 font-medium"
            >
              {data.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              {data.name}
            </motion.h1>

            {/* Dynamic Sliding Title Component */}
            <div className="h-12 sm:h-16 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400"
                >
                  {data.titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Short Bio Presentation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
          >
            {data.biographyShort}
          </motion.p>

          {/* Metadata Grid (Location / Context) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-400 border-t border-white/5 pt-6"
          >
            <div className="flex items-center gap-2">
              <Lucide.MapPin className="w-4 h-4 text-cyan-400" />
              <span>
                {data.location.city}, {data.location.country}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Lucide.Clock className="w-4 h-4 text-indigo-400" />
              <span>{data.location.timezone}</span>
            </div>
          </motion.div>

          {/* Reusable Action Items (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            {data.ctas.map((cta: any, index: any) => (
              <Magnetic key={index}>
                <a
                  href={cta.href}
                  target={cta.isExternal ? "_blank" : "_self"}
                  rel={cta.isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2",
                    cta.variant === "primary"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] border border-white/10"
                      : "bg-slate-900/60 backdrop-blur-md text-slate-200 border border-white/10 hover:bg-slate-800/80",
                  )}
                >
                  {cta.icon && (
                    <IconResolver name={cta.icon} className="w-4 h-4" />
                  )}
                  <span>{cta.label}</span>
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        {/* Right Side Glassmorphic / Avatar Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glass Card Architecture Shell */}
          <div className="relative group w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-3xl p-3 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-transform duration-500 hover:rotate-1">
            {/* Inner structural gradient glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Containment Deck */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950/40">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent z-10" />
              <Image
                // src={data.avatar.src}
                src={heroImage}
                alt={data.avatar.alt}
                width={data.avatar.width || 500}
                height={data.avatar.height || 500}
                priority
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 filter grace-grayscale-0 ease-in-out"
                sizes="(max-w-640px) 280px, (max-w-768px) 384px, 420px"
              />

              {/* Overlay Embedded Realtime Metric Capsule */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/5 flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    {data.metrics.yearsOfExperience}+
                  </p>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                    Years Active
                  </p>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                  <p className="text-2xl font-bold text-cyan-400 font-mono">
                    {data.metrics.completedProjects}
                  </p>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                    Shipped Apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
