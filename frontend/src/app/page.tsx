/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutSection from "../components/sections/About";
import ContactForm from "../components/sections/Contact";
import { Hero } from "../components/sections/hero/Hero";
import { heroSectionData } from "../data/data";
export default function Home() {
  return (
    <>
      <Hero data={heroSectionData as any} />
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <ProjectCard /> */}
      <ContactForm />
    </>
  );
}
