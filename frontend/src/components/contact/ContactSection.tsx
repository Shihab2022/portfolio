"use client";

import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none -z-10 select-none">
        <div className="absolute top-[20%] left-[-10%] w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-125 sm:w-175 h-125 sm:h-175 rounded-full bg-purple-600/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-4 w-full">
            <ContactInfo />
          </div>

          <div className="lg:col-span-6 w-full space-y-6">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
