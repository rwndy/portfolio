export interface ThemePalette {
  primary: string;
  secondary: string;
  accent: string;
  mint: string;
  particles: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  label: string;
  level: number;
  color: string;
}

export interface Experience {
  company: string;
  sub?: string;
  loc: string;
  role: string;
  period: string;
  status: "active" | "done";
  highlights: string[];
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
}

export interface Social {
  name: string;
  url: string;
  svgPath: string;
}

export type ThemeKey = "Ember" | "Sunset" | "Arcade";

export interface Tweaks {
  theme: ThemeKey;
  crtEffect: boolean;
  particleCount: number;
}
