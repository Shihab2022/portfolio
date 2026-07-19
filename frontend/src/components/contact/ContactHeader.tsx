"use client";

import { contactConfig } from "@/src/data/contact";

export const ContactHeader = () => {
  const { title, heading1, heading2, description } = contactConfig.personalInfo;

  return (
    <div className="flex flex-col items-center text-center mb-20 relative z-10">
      <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-indigo-400 ">
        {`• ${title} •`}
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white ">
        {heading1}{" "}
        <span className="bg-linear-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
          {heading2}
        </span>
      </h2>

      <div className="flex items-center gap-1 mt-5 mb-4">
        <div className="w-8 h-0.5 bg-linear-to-r from-transparent to-purple-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        <div className="w-8 h-0.5 bg-linear-to-l from-transparent to-blue-500" />
      </div>

      <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
