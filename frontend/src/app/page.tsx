import AboutSection from "../components/sections/About";
import ContactForm from "../components/sections/Contact";
import HeroSection from "../components/sections/Hero";
import ProjectCard from "../components/sections/ProjectCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ProjectCard /> */}
      <ContactForm />
    </>
  );
}
