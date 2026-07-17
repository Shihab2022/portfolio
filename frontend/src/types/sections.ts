import { ActionLink, MediaAsset } from "./common";

export interface FloatingTechIcon {
  name: string;
  iconName: string; // Dynamic mapping name for Lucide or React Icons
  xOffset: number; // Target grid boundary percentage
  yOffset: number;
  duration: number; // Animation duration offset
}

export interface HeroData {
  availability: {
    status: "available" | "busy" | "hiring";
    text: string;
  };
  greeting: string;
  name: string;
  titles: string[]; // For infinite cycling text reveal loops
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  metrics: {
    yearsOfExperience: number;
    completedProjects: number;
  };
  biographyShort: string;
  avatar: MediaAsset;
  ctas: ActionLink[];
  floatingIcons: FloatingTechIcon[];
}
