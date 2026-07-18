/* eslint-disable @typescript-eslint/no-explicit-any */

import { IconResolver } from "@/src/utils/IconResolver";
import { motion } from "framer-motion";
const FloatingIconsSection = ({ iconsData }: { iconsData: any[] }) => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        {iconsData.map((icon, idx) => (
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
    </>
  );
};

export default FloatingIconsSection;
