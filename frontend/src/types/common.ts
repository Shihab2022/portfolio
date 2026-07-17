export interface ActionLink {
  label: string;
  href: string;
  icon?: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  isExternal: boolean;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataUrl?: string;
}

// types/portfolio.ts

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  years: number;
  icon: string; // react-icons/si key
  color: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools";
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  duration: string;
  current: boolean;
  responsibilities: string[];
  achievements: string[];
  techUsed: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "saas" | "infrastructure" | "mobile" | "web3";
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  challenges: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide key
  gradient: string;
}
