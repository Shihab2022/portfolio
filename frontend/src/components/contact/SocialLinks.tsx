"use client";

import { contactConfig } from "@/src/data/contact";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 mt-6 ml-2">
      {contactConfig.socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/2 backdrop-blur-md text-slate-400 transition-all duration-300 hover:border-purple-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <span className="absolute bottom-full mb-2 scale-0 rounded bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-30">
              {social.name}
            </span>
            <Icon
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </div>
  );
};
