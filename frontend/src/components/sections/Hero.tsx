/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between px-8 md:px-24 bg-background text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Shihab Uddin
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Full Stack Web Developer
        </h2>
        <p className="text-textMuted max-w-lg text-lg">
          I build scalable, high-performance web applications with beautiful
          user experiences.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="bg-gradient-primary px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
            Hire Me ↗
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-md font-medium hover:bg-white/5 transition">
            View Projects ⌘
          </button>
        </div>

        {/* Social Links - use standard icon libraries like lucide-react or react-icons */}
        <div className="flex gap-4 pt-8 items-center">
          <span className="text-sm text-textMuted">Connect with me</span>
          {/* Add social icon anchor tags here */}
        </div>
      </div>

      {/* Right Content - Image & Badges */}
      <div className="hidden md:block relative w-1/2 h-[600px]">
        {/* Placeholder for the central portrait */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl absolute" />
          {/* Replace src with actual image */}
          <Image
            src="/portrait.png"
            alt="Developer"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-1/4 left-10 z-20 bg-surface/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 flex items-center gap-2">
          <span>⚛️</span>{" "}
          <span className="text-sm font-medium text-white">React</span>
        </div>
        <div className="absolute bottom-1/4 right-10 z-20 bg-surface/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 flex items-center gap-2">
          <span>🔷</span>{" "}
          <span className="text-sm font-medium text-white">TypeScript</span>
        </div>
      </div>
    </section>
  );
}
