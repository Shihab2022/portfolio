"use client";
import { TIMELINE_CONFIG } from "@/src/data/timeLine";
import {
  FloatingTextData,
  FloatingTextSection,
} from "../../animations/floatingTextSection";
function TimelineCard({
  item,
  alignment,
}: {
  item: (typeof TIMELINE_CONFIG)[0];
  alignment: "left" | "right";
}) {
  const stackJustification =
    alignment === "right" ? "md:justify-end" : "md:justify-start";

  return (
    <div className="relative p-px rounded-2xl overflow-hidden group/card transition-all duration-1000 transform hover:-translate-y-1.5 ">
      <div
        className={`absolute top-1/2 left-1/2 w-[160%] h-[160%] bg-linear-to-r ${item.colorTheme.borderGlow} opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 animate-border-spin z-0 pointer-events-none`}
      />
      <div className="relative bg-slate-950/40 backdrop-blur-md border border-slate-900 group-hover/card:border-transparent p-6 rounded-2xl z-10 transition-colors duration-1000">
        <span
          className={`inline-block text-[10px] font-black tracking-widest border px-3 py-1 rounded-full mb-4 ${item.colorTheme.badge}`}
        >
          {item.period}
        </span>

        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight transition-colors duration-300 group-hover/card:text-slate-100">
          {item.role}
        </h4>

        <p
          className={`text-sm font-semibold mb-4 tracking-wide ${item.colorTheme.accent}`}
        >
          {item.company}
        </p>

        <p
          className={`text-sm text-slate-400 font-light leading-relaxed mb-6 ${alignment === "right" ? "md:text-right" : "md:text-left"}`}
        >
          {item.description}
        </p>
        <div
          className={`flex flex-wrap gap-2 justify-start ${stackJustification}`}
        >
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded-md  border border-slate-800/80 text-slate-400 transition-all duration-300 group-hover/card:border-slate-700/60 group-hover/card:text-slate-200 "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
const ProfessionalTimeline = () => {
  return (
    <>
      <section id="experience" className="py-24   relative overflow-hidden">
        <style>{`
        @keyframes border-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 7s linear infinite;
        }
      `}</style>

        <FloatingTextSection
          xAxis="0%"
          yAxis="80%"
          iconXAxis="-top-3"
          iconYAxis="-right-1"
          fun={FloatingTextData.professionalBottom}
          icon={"</>"}
        />
        <FloatingTextSection
          xAxis="2%"
          yAxis="5%"
          iconXAxis="-top-3"
          iconYAxis="-right-1"
          fun={FloatingTextData.professionalTop}
          icon={"</>"}
          rotate="-rotate-10"
        />

        <div className="flex flex-col items-center text-center mb-20 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-indigo-400 ">
            • JOURNEY •
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white ">
            Professional{" "}
            <span className="bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>

          <div className="flex items-center gap-1 mt-5 mb-4">
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent to-purple-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <div className="w-8 h-0.5 bg-linear-to-l from-transparent to-blue-500" />
          </div>

          <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
            An interactive, data-driven showcase of structural software
            engineering roles.
          </p>
        </div>
        <div className="max-w-6xl mx-auto relative px-6 md:px-0">
          {/* Central Bold Tech Divider Line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.75 bg-slate-900 transform md:-translate-x-1/2 z-0 rounded-full overflow-hidden">
            {/* Animated colorful core pipeline inside divider line */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-b from-blue-500 via-purple-500 to-cyan-400 opacity-60 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
          </div>

          {/* Chronological Grid Assembly mapping directly over config parameters */}
          <div className="relative z-10 space-y-12 md:space-y-0">
            {TIMELINE_CONFIG.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 w-full md:min-h-55 group items-center"
                >
                  {/* Responsive Timeline Node Spacer Pin */}
                  <div
                    className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-950 transform translate-x-[-6.5px] md:-translate-x-2 z-30 transition-all duration-500 top-6 md:top-1/2 md:-translate-y-1/2 ${item.colorTheme.node}`}
                  />

                  {/* Left Side Column Slot */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:pr-12 ${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-1 md:opacity-0 md:pointer-events-none"}`}
                  >
                    {isLeft && <TimelineCard item={item} alignment="right" />}
                  </div>

                  {/* Right Side Column Slot */}
                  <div
                    className={`w-full pl-12 md:pl-12 ${!isLeft ? "md:col-start-2 md:text-left" : "md:col-start-2 md:opacity-0 md:pointer-events-none"}`}
                  >
                    {!isLeft && <TimelineCard item={item} alignment="left" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalTimeline;
