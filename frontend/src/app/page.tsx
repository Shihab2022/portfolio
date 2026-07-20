/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hero } from "../components/sections/hero/Hero";
import { heroSectionData } from "../data/hero";
import MySkills from "../components/sections/Skills/mySkills";
import ProfessionalTimeline from "../components/sections/ProfessionalTimeline/ProfessionalTimeline";
import Navbar from "../components/sections/hero/navbar";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-linear-to-br/decreasing from-[#0F172A] via-[#111827] to-[#2563EB]/20">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 right-0 h-px " />
          <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-100  blur-[120px] rounded-full" />
          <div className="absolute bottom-12 left-10 w-72 h-72  blur-[80px] rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80  rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370b_1px,transparent_1px),linear-gradient(to_bottom,#1f29370b_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        </div>
        <Navbar />
        <Hero data={heroSectionData as any} />
        <MySkills />
        <ProfessionalTimeline />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
