/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hero } from "../components/sections/hero/Hero";
import { heroSectionData } from "../data/hero";
import MySkills from "../components/sections/Skills/mySkills";
import ProfessionalTimeline from "../components/sections/ProfessionalTimeline/ProfessionalTimeline";
import Navbar from "../components/sections/hero/navbar";
export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-linear-to-br/decreasing from-[#0F172A] via-[#111827] to-[#2563EB]/20">
        <Navbar />
        <Hero data={heroSectionData as any} />
        <MySkills />
        <ProfessionalTimeline />
      </div>
    </>
  );
}
