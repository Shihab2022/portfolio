import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export interface TechBadge {
  name: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ContactItem {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: IconType;
  label: string;
  href: string;
}

export interface FooterData {
  name: string;
  tagline: string;
  availability: {
    status: boolean;
    label: string;
    subtext: string;
  };
  navigationLinks: NavigationLink[];
  contactInfo: ContactItem[];
  socialLinks: SocialLink[];
  techStack: TechBadge[];
}

export const footerData: FooterData = {
  name: "Alex Morgan",
  tagline:
    "Building scalable, high-performance web applications with modern technologies and exceptional user experiences.",
  availability: {
    status: true,
    label: "Available for Freelance",
    subtext: "Open to Remote Opportunities",
  },
  navigationLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  contactInfo: [
    {
      icon: FiMail,
      label: "Email",
      value: "hello@alexmorgan.dev",
      href: "mailto:hello@alexmorgan.dev",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+1 (555) 234-5678",
      href: "tel:+15552345678",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com",
    },
  ],
  socialLinks: [
    { icon: FaGithub, label: "GitHub", href: "https://github.com" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: FaXTwitter, label: "Twitter / X", href: "https://twitter.com" },
    { icon: FaDribbble, label: "Dribbble", href: "https://dribbble.com" },
    { icon: FiMail, label: "Email", href: "mailto:hello@alexmorgan.dev" },
  ],
  techStack: [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
  ],
};
