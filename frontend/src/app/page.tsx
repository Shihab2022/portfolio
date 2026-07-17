/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hero } from "../components/sections/hero/Hero";
import { heroSectionData } from "../data/hero";
import MySkills from "../components/sections/Skills/mySkills";
export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-linear-to-br/decreasing from-[#0F172A] via-[#111827] to-[#2563EB]/20">
        <Hero data={heroSectionData as any} />
        <MySkills />
      </div>
    </>
  );
}
