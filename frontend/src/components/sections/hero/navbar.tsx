"use client";
import { useState } from "react";
import { NAV_ITEMS } from "./../../../data/navItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50   backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-black tracking-tight text-white flex items-center gap-2.5 group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
            </span>
            <span className="transition-colors duration-300 group-hover:text-slate-200">
              shihab
              <span className="text-blue-500 font-extrabold transition-transform duration-300 inline-block group-hover:translate-x-0.5">
                .
              </span>
              dev
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-400">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-700 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold tracking-wider uppercase rounded-full group bg-linear-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]"
            >
              <span className="relative px-5 py-2.5 transition-all duration-300 ease-in bg-slate-950 rounded-full group-hover:bg-opacity-0">
                {`Let's Chat`}
              </span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 justify-center items-center md:hidden w-8 h-8 relative z-50 text-slate-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-200 ease-in-out ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Slide-out Mobile Overlay Canvas Drawer */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-slate-950/95 border-l border-slate-900 backdrop-blur-xl p-6 pt-24 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-6 text-base font-semibold">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 border-b border-slate-900/60 pb-3 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
            >
              {`  Let's Chat`}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
