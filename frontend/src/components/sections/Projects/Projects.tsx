"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
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
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { ProjectItems, PROJECTS } from "@/src/data/project";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItems | null>(
    null,
  );

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-24 text-slate-100 md:px-12 lg:px-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-indigo-400 ">
            • FEATURED WORKS & CASE STUDIES •
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
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
            A curated selection of products and platforms built across
            real-time systems, spatial intelligence, and service operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-950/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_18px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-slate-900">
                <Image
                  height={400}
                  width={640}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-blue-400/30 bg-slate-950/70 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-blue-300 backdrop-blur-sm">
                  PROJECT {project.number}
                </span>
                <span className="absolute bottom-4 left-5 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                  {project.year} / {project.category.split(" • ")[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="line-clamp-4 text-sm font-light leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.allTech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.allTech.length > 4 && (
                    <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-mono text-blue-300">
                      +{project.allTech.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/button inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-xs font-bold tracking-wider text-white shadow-md shadow-purple-900/20 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 active:scale-[0.98]"
                  >
                    VIEW CASE STUDY
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/button:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                      title="Visit Live Site"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"
                      title="View Source Code"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9998] flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 z-0 bg-slate-950/95 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              className="relative z-10 flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0A0F1D] text-slate-100 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-800 bg-[#0F172A] shrink-0">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">
                    PROJECT {selectedProject.number}` // TECHNICAL ARCHITECTURE
                    DEEP DIVE`
                  </span>
                  <h3 id="case-study-title" className="mt-0.5 text-2xl font-serif font-bold text-white sm:text-3xl">
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

                {selectedProject.visualizations && (
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <Globe className="h-4 w-4 text-blue-400" />
                      <span>GIS Workspace Capabilities</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-800 bg-[#0E1628] p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold text-blue-300">
                            Visualization Layers
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {selectedProject.visualizations.length} modes
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.visualizations.map((visualization) => (
                            <span
                              key={visualization.id}
                              className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-mono text-blue-300"
                            >
                              {visualization.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-[#0E1628] p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold text-cyan-300">
                            Coverage & Map Styles
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {selectedProject.cityCoverage?.length ?? 0} regions
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.mapStyles?.map((style) => (
                            <span
                              key={style.id}
                              className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-mono text-cyan-300"
                            >
                              {style.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
