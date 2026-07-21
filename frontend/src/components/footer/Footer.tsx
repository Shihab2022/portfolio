"use client";
import { motion } from "framer-motion";
import FooterNavigation from "./FooterNavigation";
// import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import { footerData } from "@/src/data/footer";
import FooterBrand from "./FooterBrand";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  px-6 pt-20 pb-12 text-slate-400 md:px-12 lg:px-24">
      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          <FooterBrand
            name={footerData.name}
            tagline={footerData.tagline}
          />
          <FooterNavigation links={footerData.navigationLinks} />
        </div>
        <FooterBottom name={footerData.name} techStack={footerData.techStack} />
      </motion.div>
    </footer>
  );
}
