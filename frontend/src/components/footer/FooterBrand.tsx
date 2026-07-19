import { motion } from "framer-motion";

interface FooterBrandProps {
  name: string;
  tagline: string;
  availability: {
    status: boolean;
    label: string;
    subtext: string;
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function FooterBrand({
  name,
  tagline,
  availability,
}: FooterBrandProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col space-y-5 text-center sm:text-left"
    >
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
          {name}
          <span className="text-blue-500">.</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-sm sm:mx-0 mx-auto">
          {tagline}
        </p>
      </div>

      {availability.status && (
        <div className="inline-flex items-center space-x-3 self-center rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 backdrop-blur-md sm:self-start">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <div className="text-left">
            <p className="text-xs font-medium text-emerald-400">
              {availability.label}
            </p>
            <p className="text-[10px] text-slate-400">{availability.subtext}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
