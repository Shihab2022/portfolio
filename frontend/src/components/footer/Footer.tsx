"use client";
import { motion } from "framer-motion";
import FooterNavigation from "./FooterNavigation";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterCTA from "./FooterCTA";
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
      {/* Premium Background Layers */}

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <FooterBrand
            name={footerData.name}
            tagline={footerData.tagline}
            availability={footerData.availability}
          />
          <FooterNavigation links={footerData.navigationLinks} />
          {/* <FooterContact items={footerData.contactInfo} /> */}
        </div>

        {/* Dynamic Social & CTA Middle Row Layout */}
        {/* <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-slate-800/60 pt-12 lg:flex-row">
          <FooterSocial socials={footerData.socialLinks} />
          <FooterCTA />
        </div> */}

        {/* Bottom Metadata & Legal Bar */}
        <FooterBottom name={footerData.name} techStack={footerData.techStack} />
      </motion.div>
    </footer>
  );
}
