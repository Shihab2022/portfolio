export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

export interface FloatingIconData {
  iconName: string;
  xOffset: number; // Percent value matching hero positioning rules
  yOffset: number; // Percent value matching hero positioning rules
  duration: number;
}

export interface AboutData {
  name: string;
  role: string;
  story: string;
  mission: string;
  vision: string;
  goals: string[];
  differentiation: string;
  highlights: HighlightCard[];
  values: ValueItem[];
  floatingIcons: FloatingIconData[];
}
