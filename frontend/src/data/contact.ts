import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";

export const contactConfig = {
  personalInfo: {
    title: "Career Opportunities",
    heading1: "Let's ",
    heading2: " Connect",
    description:
      "I am actively seeking full-time engineering roles where I can help scale web architectures, optimize GIS platforms, and deliver clean, high-performance web solutions.",
  },
  status: {
    isAvailable: true,
    text: "Actively Seeking Full-Time Roles",
    subtext: "Open to Remote",
    resumeUrl: "/resume.pdf",
  },
  cards: [
    {
      id: "location",
      title: "Location",
      value: "Rajshahi, Bangladesh",
      href: "https://www.google.com/maps/place/Rajshahi",
      icon: FiMapPin,
      accent: "from-emerald-500 to-teal-400",
      colorTheme: {
        accent: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        node: "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] group-hover:scale-130",
        borderGlow: "from-blue-600 via-cyan-400 to-indigo-600",
      },
    },
    {
      id: "email",
      title: "Email",
      value: "uddinmdshihab452@gmail.com",
      href: "mailto:uddinmdshihab452@gmail.com",
      icon: FiMail,
      accent: "from-blue-500 to-cyan-400",
      colorTheme: {
        accent: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        node: "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] group-hover:scale-130",
        borderGlow: "from-blue-600 via-cyan-400 to-indigo-600",
      },
    },
    {
      id: "phone",
      title: "Phone",
      value: "+880 1778825868",
      href: "tel:+8801778825868",
      icon: FiPhone,
      accent: "from-purple-500 to-pink-500",
      colorTheme: {
        accent: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        node: "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] group-hover:scale-130",
        borderGlow: "from-blue-600 via-cyan-400 to-indigo-600",
      },
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: "+880 1778825868",
      href: "tel:+8801778825868",
      icon: FaWhatsapp,
      accent: "from-emerald-500 to-teal-400",
      colorTheme: {
        accent: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        node: "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] group-hover:scale-130",
        borderGlow: "from-blue-600 via-cyan-400 to-indigo-600",
      },
    },

    // {
    //   id: "github",
    //   title: "GitHub",
    //   value: "github.com/Shihab2022",
    //   href: "https://github.com/Shihab2022",
    //   icon: FaGithub,
    //   accent: "from-gray-400 to-gray-600",
    //   colorTheme: {
    //     accent: "text-blue-400",
    //     badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    //     node: "bg-blue-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] group-hover:scale-130",
    //     borderGlow: "from-blue-600 via-cyan-400 to-indigo-600",
    //   },
    // },
  ],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Shihab2022",
      icon: FaGithub,
      color: "hover:text-white hover:shadow-white/20",
    },
    {
      name: "LinkedIn",
      href: "www.linkedin.com/in/shihab2023",
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
      href: "https://www.facebook.com/mdshihab.uddin.92372446",
      icon: FaFacebook,
      color: "hover:text-blue-500 hover:shadow-blue-500/20",
    },
  ],
};
