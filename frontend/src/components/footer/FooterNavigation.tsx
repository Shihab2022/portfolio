import React from "react";
import { motion } from "framer-motion";
import { NavigationLink } from "@/src/data/footer";

interface FooterNavigationProps {
  links: NavigationLink[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FooterNavigation({ links }: FooterNavigationProps) {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div variants={itemVariants} className="text-center sm:text-left">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        Quick Links
      </h3>
      <nav aria-label="Footer Navigation" className="mt-5">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:max-w-xs sm:mx-0 mx-auto max-w-60">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="group relative inline-flex items-center text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] rounded px-1 py-0.5"
              >
                <span>{link.label}</span>
                {/* Micro-Interaction Neon Underline & Glow */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
