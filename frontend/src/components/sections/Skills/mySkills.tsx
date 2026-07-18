/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { skillsJson } from "@/src/data/skills";
import { IconResolver } from "@/src/utils/IconResolver";


export default function MySkills() {
  return (
    <section className="relative min-h-screen  text-white px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-indigo-400 bg-[#0a0f26] border border-indigo-500/20">
          • MY EXPERTISE •
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          My{" "}
          <span className="bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="flex items-center gap-1 mt-5 mb-4">
          <div className="w-8 h-0.5 bg-linear-to-r from-transparent to-purple-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <div className="w-8 h-0.5 bg-linear-to-l from-transparent to-blue-500" />
        </div>

        <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
          I combine technical expertise with creative problem solving to build
          scalable and user-friendly web applications.
        </p>
      </div>

      {/* --- MAIN DISPLAY --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-center relative z-10">
        <div className="lg:col-span-5 flex justify-center items-center relative h-140 w-full overflow-hidden">
          <div className="relative w-120 h-120 md:w-135 md:h-135 flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            >
              <defs>
                <linearGradient
                  id="purpleGlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="blueGlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              <path
                d="M 200 50 A 150 150 0 0 0 200 350"
                fill="none"
                stroke="url(#purpleGlow)"
                strokeWidth="2"
              />
              <path
                d="M 200 50 A 150 150 0 0 1 200 350"
                fill="none"
                stroke="url(#blueGlow)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

              {/* Inner Track */}
              <path
                d="M 200 100 A 100 100 0 0 0 200 300"
                fill="none"
                stroke="url(#purpleGlow)"
                strokeWidth="2"
                strokeDasharray="2 2"
              />
              <path
                d="M 200 100 A 100 100 0 0 1 200 300"
                fill="none"
                stroke="url(#blueGlow)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>

            <div className="absolute inset-0 animate-[spin_100s_linear_infinite] hover:[animation-play-state:paused]">
              {skillsJson.orbitNodes.map((node: any) => (
                <div
                  key={node.id}
                  className={`absolute p-3 rounded-full bg-[#040818] border-2 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer ${node.positionClass} ${node.color}`}
                >
                  <div className="w-6 h-6 flex items-center justify-center animate-[spin_25s_linear_infinite] [animation-direction:reverse] parent-hover:paused">
                    <IconResolver name={node.icon} className="w-full h-full" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[#050b1a] border border-slate-800 flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_0_25px_rgba(99,102,241,0.18)] z-10">
              <div className="text-4xl mb-2 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
                &lt;/&gt;
              </div>
              <h3 className="text-xl font-bold leading-tight tracking-wide text-slate-100">
                Full Stack
                <br />
                Developer
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 max-w-36 leading-normal">
                Passionate about building impactful digital experiences
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillsJson.categories.map((cat) => (
            <div
              key={cat.id}
              className={`p-5 rounded-xl  border backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${cat.borderColor}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className={`p-2 rounded-lg bg-linear-to-br ${cat.accentColor} text-white`}
                >
                  <IconResolver name={cat.icon} className="w-4 h-4" />
                </div>
                <h4 className="text-md font-bold tracking-wide">{cat.title}</h4>
              </div>

              <ul className="space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.bulletColor}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-7xl mx-auto z-10 relative">
        <div className="p-6 md:p-8 rounded-3xl  border border-slate-800/80 backdrop-blur-md flex flex-col xl:flex-row items-center justify-between gap-8">
          {/* Label side */}
          <div className="text-center xl:text-left min-w-50">
            <h4 className="text-xl font-bold tracking-tight">Technologies</h4>
            <p className="text-indigo-400 font-semibold text-sm mt-1">
              I work with
            </p>
          </div>

          {/* Horizontal separator on desktop, vertical on mobile */}
          <div className="hidden xl:block h-12 w-px bg-slate-800" />

          {/* Scrolling/Flex list of glowing icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 w-full">
            {skillsJson.technologies.map((tech, idx) => (
              <div key={idx} className="group flex flex-col items-center gap-2">
                <div
                  className={`w-14 h-14 rounded-2xl bg-slate-900/60 border
                     border-slate-800 flex items-center justify-center transition-all
                      duration-300 hover:border-slate-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer ${tech.color}`}
                >
                  <IconResolver
                    name={tech.icon}
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
