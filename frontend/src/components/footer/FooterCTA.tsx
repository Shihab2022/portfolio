import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FooterCTA() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/3 to-white/1 p-6 backdrop-blur-xl md:p-8"
    >
      {/* Structural Accent glow */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="text-lg font-bold text-white">
            {`Let's Build Something Amazing`}
          </h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
           {` I'm always excited to collaborate on innovative products, startups,
            and scalable web apps.`}
          </p>
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center justify-center space-x-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-5 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap self-center sm:self-auto"
        >
          <span>Get In Touch</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
