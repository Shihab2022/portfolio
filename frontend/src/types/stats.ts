import { FloatingIconData } from "./about";

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface StatsData {
  metrics: StatItem[];
  floatingIcons: FloatingIconData[];
}
