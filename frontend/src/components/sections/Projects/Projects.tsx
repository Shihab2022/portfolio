"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  X,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  Server,
  Globe,
  Activity,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { ProjectItems, PROJECTS } from "@/src/data/project";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItems | null>(
    null,
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  const isCooldown = useRef<boolean>(false);

  const goToNextCard = useCallback(() => {
    if (activeIndex < PROJECTS.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex]);

  const goToPrevCard = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  // Scroll Stepper Handler
  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (selectedProject) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (!isInViewport) return;

      if (e.deltaY > 0) {
        if (activeIndex < PROJECTS.length - 1) {
          e.preventDefault();
          if (!isCooldown.current) {
            isCooldown.current = true;
            setActiveIndex((prev) => prev + 1);
            setTimeout(() => {
              isCooldown.current = false;
            }, 380);
          }
        }
      } else if (e.deltaY < 0) {
        if (activeIndex > 0) {
          e.preventDefault();
          if (!isCooldown.current) {
            isCooldown.current = true;
            setActiveIndex((prev) => prev - 1);
            setTimeout(() => {
              isCooldown.current = false;
            }, 380);
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (selectedProject) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (!isInViewport) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 25) {
        if (deltaY > 0 && activeIndex < PROJECTS.length - 1) {
          e.preventDefault();
          if (!isCooldown.current) {
            isCooldown.current = true;
            setActiveIndex((prev) => prev + 1);
            setTimeout(() => {
              isCooldown.current = false;
            }, 380);
          }
        } else if (deltaY < 0 && activeIndex > 0) {
          e.preventDefault();
          if (!isCooldown.current) {
            isCooldown.current = true;
            setActiveIndex((prev) => prev - 1);
            setTimeout(() => {
              isCooldown.current = false;
            }, 380);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIndex, selectedProject]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full  text-slate-100 py-6 px-4 sm:px-8 md:px-12 lg:px-20 select-none flex flex-col justify-between overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10">
        <div className="flex flex-col items-center text-center mb-10 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-indigo-400 ">
            • FEATURED WORKS & CASE STUDIES {PROJECTS.length} STACKED •
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Featured{" "}
            <span className="bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              & Works
            </span>
          </h2>

          <div className="flex items-center gap-1 mt-5 mb-4">
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent to-purple-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <div className="w-8 h-0.5 bg-linear-to-l from-transparent to-blue-500" />
          </div>

          <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
            {PROJECTS.length} interactive cards stacked below. Scroll down/up to
            navigate through projects or click to open deep case studies.
          </p>
        </div>

        {/* STACKED CARD CONTAINER WITH VISIBLE CARD EDGES */}
        <div className="relative w-full max-w-7xl mx-auto flex-1 min-h-150 sm:min-h-150 flex items-center justify-center my-auto pt-6">
          {PROJECTS.map((project, index) => {
            const total = PROJECTS.length;
            const position = index - activeIndex;

            if (position < 0) return null; // Cards already stepped past

            // Stacking offset calculations (Negative Y lifts upper edges so user sees stacked tabs)
            const translateY = position * -28;
            const scale = 1 - position * 0.04;
            const zIndex = total - position;
            const opacity = position > 3 ? 0 : 1 - position * 0.12;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  y: translateY,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  pointerEvents: position === 0 ? "auto" : "none",
                }}
                className={`absolute inset-x-0 mx-auto w-full bg-[#0D1527] text-slate-100 rounded-4xl p-6 sm:p-8 md:p-9 shadow-[0_-10px_35px_rgba(0,0,0,0.8)] border border-slate-700/80 ${
                  position > 0 ? "border-t-2 border-t-blue-500/50" : ""
                } origin-bottom`}
              >
                {/* Visual Stack Banner Tab for Underlying Cards */}
                {position > 0 && (
                  <div className="absolute -top-5.5 left-8 right-8 flex justify-between items-center px-4 py-1 rounded-t-xl bg-[#131D33] border-t border-x border-blue-400/40 text-[10px] font-mono font-bold text-cyan-300 uppercase shadow-md">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      STACKED PROJECT {project.number} OF 0{PROJECTS.length}
                    </span>
                    <span>{project.title}</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-between">
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-xs font-mono font-bold">
                        <span>PROJECT {project.number}</span>
                      </div>

                      <div className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                        {project.year} • {project.category}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.allTech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700 text-[10px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.allTech.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-[10px] font-mono text-blue-300">
                          +{project.allTech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600  hover:from-blue-500 hover:to-purple-500  duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-purple-900/20 text-xs font-bold tracking-wider transition-all group cursor-pointer shadow-md"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-400 transition"
                          title="Visit Live Site"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="hidden sm:inline">Live</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-400 transition"
                          title="View Source Code"
                        >
                          <FaGithub className="w-3.5 h-3.5 text-slate-300" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="md:w-[46%] relative min-h-50 sm:min-h-60 md:min-h-67.5 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group shadow-lg">
                    <Image
                      height={400}
                      width={600}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stepper Footer Controls */}
        <div className="shrink-0 pt-2 flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto w-full text-xs font-mono text-slate-300 gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">
              SCROLL ANYWHERE TO STEP CARDS
            </span>
            <span className="sm:hidden">SWIPE OR USE BUTTONS</span>
          </div>

          <div className="flex items-center gap-2">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-blue-500"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goToPrevCard}
              disabled={activeIndex === 0}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-200 font-medium text-xs backdrop-blur-sm transition ${
                activeIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-slate-800 active:scale-95 cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREV</span>
            </button>

            <span className="font-bold font-mono text-cyan-400">
              0{activeIndex + 1} / 0{PROJECTS.length}
            </span>

            <button
              onClick={goToNextCard}
              disabled={activeIndex === PROJECTS.length - 1}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-200 font-medium text-xs backdrop-blur-sm transition ${
                activeIndex === PROJECTS.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-slate-800 active:scale-95 cursor-pointer"
              }`}
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* EXPANDED CASE STUDY MODAL (z-index 200, bg-color, max-w-6xl, h-[92vh]) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-190"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="relative max-w-6xl w-full h-[92vh] bg-[#0A0F1D] border border-slate-700/80 text-slate-100 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-200"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-800 bg-[#0F172A] shrink-0">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">
                    PROJECT {selectedProject.number}` // TECHNICAL ARCHITECTURE
                    DEEP DIVE`
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
                {/* Summary Banner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="md:col-span-2 bg-[#0E1628] p-6 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                      Project Core Purpose
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="bg-[#0E1628] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">
                        Domain Category
                      </span>
                      <span className="text-xs font-semibold text-cyan-400">
                        {selectedProject.category}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition border border-slate-700"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Matrix */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span>Technology Stack Breakdown</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#0E1628] p-5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Frontend</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techCategorized.frontend.map(
                          (item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded bg-blue-500/10 text-[10px] font-mono text-blue-300 border border-blue-500/20"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="bg-[#0E1628] p-5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                        <Server className="w-3.5 h-3.5" />
                        <span>Backend & APIs</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techCategorized.backend.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded bg-cyan-500/10 text-[10px] font-mono text-cyan-300 border border-cyan-500/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#0E1628] p-5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <Database className="w-3.5 h-3.5" />
                        <span>Database & DevOps</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techCategorized.databaseAndDevOps.map(
                          (item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded bg-emerald-500/10 text-[10px] font-mono text-emerald-300 border border-emerald-500/20"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Architecture & Engineering Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#0E1628] p-6 rounded-2xl border border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-amber-400" />
                      <span>System Architecture Details</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {selectedProject.architectureDetails}
                    </p>
                  </div>

                  <div className="bg-[#0E1628] p-6 rounded-2xl border border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-rose-400" />
                      <span>Engineering Challenges Solved</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

                {/* API & Event Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Socket Events & API Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {selectedProject.apiOrSocketHighlights.map((api, i) => (
                      <div
                        key={i}
                        className="font-mono text-[11px] bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-slate-300 flex items-center gap-2"
                      >
                        <span className="text-blue-400 font-bold">›</span>
                        <span>{api}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Features</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                    {selectedProject.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-[#0E1628] p-3.5 rounded-xl border border-slate-800"
                      >
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accomplishments */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Key Metric Accomplishments</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 bg-[#0E1628] p-5 rounded-2xl border border-slate-800">
                    {selectedProject.accomplishments.map((acc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Fixed Footer */}
              <div className="px-6 sm:px-8 py-4 border-t border-slate-800 bg-[#0F172A] flex items-center justify-between gap-4 shrink-0">
                <span className="text-xs text-slate-400 font-mono">
                  Status:{" "}
                  <span className="text-emerald-400 font-semibold">
                    Production Ready
                  </span>
                </span>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition border border-slate-700"
                  >
                    View Source
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-md transition"
                  >
                    Visit Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
