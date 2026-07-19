import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

export const contactConfig = {
  personalInfo: {
    title: "Let's Connect",
    heading: "Have a Project in Mind?",
    description:
      "I'm always interested in discussing new opportunities, freelance projects, startups, GIS applications, and full-stack web solutions.",
  },
  status: {
    isAvailable: true,
    text: "Available for Freelance",
    subtext: "Open to Remote Opportunities",
    resumeUrl: "/resume.pdf",
  },
  cards: [
    {
      id: "email",
      title: "Email",
      value: "hello@dev.com",
      href: "mailto:hello@dev.com",
      icon: FiMail,
      accent: "from-blue-500 to-cyan-400",
    },
    {
      id: "phone",
      title: "Phone",
      value: "+880 1234-567890",
      href: "tel:+8801234567890",
      icon: FiPhone,
      accent: "from-purple-500 to-pink-500",
    },
    {
      id: "location",
      title: "Location",
      value: "Rajshahi, Bangladesh",
      href: "https://maps.google.com",
      icon: FiMapPin,
      accent: "from-emerald-500 to-teal-400",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://linkedin.com/in/username",
      icon: FaLinkedin,
      accent: "from-blue-600 to-blue-400",
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/username",
      href: "https://github.com/username",
      icon: FaGithub,
      accent: "from-gray-400 to-gray-600",
    },
  ],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: FaGithub,
      color: "hover:text-white hover:shadow-white/20",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedin,
      color: "hover:text-blue-400 hover:shadow-blue-500/20",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: FaXTwitter,
      color: "hover:text-sky-400 hover:shadow-sky-400/20",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebook,
      color: "hover:text-blue-500 hover:shadow-blue-500/20",
    },
  ],
};