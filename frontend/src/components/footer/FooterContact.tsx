import { motion, type Variants } from "framer-motion";
import { ContactItem } from "@/src/data/footer";

interface FooterContactProps {
  items: ContactItem[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FooterContact({ items }: FooterContactProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        Contact Info
      </h3>
      <address className="mt-5 not-italic space-y-4 max-w-sm sm:mx-0 mx-auto flex flex-col items-center sm:items-start">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Location" ? "_blank" : undefined}
              rel={
                item.label === "Location" ? "noopener noreferrer" : undefined
              }
              className="group flex items-center space-x-3 rounded-lg border border-white/5 bg-white/1 p-2.5 w-full transition-all duration-300 hover:border-blue-500/30 hover:bg-white/3 hover:shadow-[0_0_15px_rgba(59,130,246,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 text-slate-400 transition-colors group-hover:border-blue-500/50 group-hover:text-blue-400">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 group-hover:text-blue-400/80 transition-colors">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </address>
    </motion.div>
  );
}
