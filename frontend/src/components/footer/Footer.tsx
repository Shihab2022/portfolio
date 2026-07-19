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
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Border Gradient Glow */}
        <div className="absolute top-0 left-0 right-0 h-px " />
        {/* Soft Radial Neon Glow */}
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-100  blur-[120px] rounded-full" />
        {/* Secondary Blur Circles */}
        <div className="absolute bottom-12 left-10 w-72 h-72 bg-blue-500/3 blur-[80px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/3 blur-[90px] rounded-full" />
        {/* Fine Tech Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370b_1px,transparent_1px),linear-gradient(to_bottom,#1f29370b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

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
          <FooterContact items={footerData.contactInfo} />
        </div>

        {/* Dynamic Social & CTA Middle Row Layout */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-slate-800/60 pt-12 lg:flex-row">
          <FooterSocial socials={footerData.socialLinks} />
          <FooterCTA />
        </div>

        {/* Bottom Metadata & Legal Bar */}
        <FooterBottom name={footerData.name} techStack={footerData.techStack} />
      </motion.div>
    </footer>
  );
}
