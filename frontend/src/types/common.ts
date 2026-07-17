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
