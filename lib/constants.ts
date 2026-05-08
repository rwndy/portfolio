import type {
  ThemePalette, ThemeKey, NavItem, Skill,
  Experience, Project, Social, Tweaks,
} from "./types";

export const THEMES: Record<ThemeKey, ThemePalette> = {
  Ember: {
    primary: "#FF6B35", secondary: "#FFBE0B", accent: "#FF3366", mint: "#3DFFA0",
    particles: ["#FF6B35", "#FFBE0B", "#FF3366", "#FF8C42"],
  },
  Sunset: {
    primary: "#E84855", secondary: "#FF9B71", accent: "#FFD23F", mint: "#7BC67E",
    particles: ["#E84855", "#FF9B71", "#FFD23F", "#FF7F50"],
  },
  Arcade: {
    primary: "#FFD23F", secondary: "#FF6B6B", accent: "#9B5DE5", mint: "#00F5D4",
    particles: ["#FFD23F", "#FF6B6B", "#9B5DE5", "#F77F00"],
  },
};

export const DEFAULT_TWEAKS: Tweaks = {
  theme: "Arcade",
  crtEffect: true,
  particleCount: 60,
};

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "quests", label: "QUESTS" },
  { id: "projects", label: "LOOT" },
  { id: "connect", label: "CONNECT" },
];

export const SKILLS: Skill[] = [
  { label: "React / Next.js", level: 95, color: "var(--primary)" },
  { label: "TypeScript", level: 92, color: "var(--secondary)" },
  { label: "JavaScript", level: 95, color: "var(--primary)" },
  { label: "Tailwind CSS", level: 90, color: "var(--accent)" },
  { label: "Redux / Zustand", level: 88, color: "var(--secondary)" },
  { label: "Jest / Testing", level: 85, color: "var(--mint)" },
  { label: "React Native", level: 75, color: "var(--primary)" },
  { label: "GraphQL", level: 70, color: "var(--accent)" },
  { label: "Vue.js", level: 75, color: "var(--secondary)" },
  { label: "SwiftUI (iOS)", level: 45, color: "var(--mint)" },
];

export const EXTRA_SKILLS = [
  "Docker", "CI/CD", "Git", "MongoDB", "PostgreSQL", "Express.js",
  "NestJS", "Zod", "React Hook Form", "React Query", "SASS",
  "Styled Components", "MUI", "REST APIs", "WebSocket", "HTML5", "CSS3",
] as const;

export const EXPERIENCE: Experience[] = [
  {
    company: "Bank Saqu", sub: "Astra Financial × WeLab",
    loc: "Jakarta, Indonesia", role: "Frontend Engineer",
    period: "Nov 2024 – Present", status: "active",
    highlights: [
      "Architected CFT AML Portal Web from scratch with React, & TypeScript",
      "Established security standards including CSP and XSS mitigation for banking compliance",
      "Primary frontend technical POC across product, backend & stakeholder teams",
    ],
  },
  {
    company: "RCTI+", loc: "Jakarta, Indonesia",
    role: "Software Engineer (Frontend)", period: "Dec 2022 – Nov 2024", status: "done",
    highlights: [
      "Owned high-traffic features — news+, short+, hot+ — with Next.js & Redux",
      "Revamped live chat system with React (Vite) & WebSocket for real-time performance",
      "Reduced production bugs ~40% through Jest, SonarLint & Sentry integration",
      "Integrated Google Publisher Tags & VAST video ads for platform monetization",
    ],
  },
  {
    company: "Resync Digital", loc: "Auckland, NZ (Remote)",
    role: "Senior React Developer", period: "Apr 2022 – Nov 2022", status: "done",
    highlights: [
      "Led frontend modernization migrating to Next.js, Redux & Tailwind CSS",
      "Designed scalable architecture using Atomic Design principles",
      "Mentored developers and established team-wide engineering standards",
    ],
  },
  {
    company: "Indo Teknologi Cemerlang", loc: "Jakarta, Indonesia",
    role: "Frontend Engineer", period: "Jan 2021 – Apr 2022", status: "done",
    highlights: [
      "Built foundational frontend architecture for web & mobile with Next.js & React Native",
      "Created reusable component libraries reducing design-to-development friction",
    ],
  },
  {
    company: "Talenta Informasi Teknologi", loc: "Semarang, Indonesia",
    role: "Frontend Developer", period: "Feb 2020 – Aug 2020", status: "done",
    highlights: [
      "Delivered full-stack web platform (SIBA Online) with Next.js & Express.js",
      "Integrated Google Directions API for location-based navigation features",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "React VAST Player",
    desc: "Open-source React library for VAST video ad integration, published on npm.",
    tech: ["React", "VAST", "npm", "Open Source"],
    link: "https://www.npmjs.com/package/react-vast-player",
  },
  {
    title: "Scrumdinger",
    desc: "iOS app built with SwiftUI for managing scrum meetings with timer & participant tracking.",
    tech: ["SwiftUI", "iOS", "Swift"],
    link: "https://github.com/rwndy/scrumdinger",
  },
  {
    title: "iOS Recipe App",
    desc: "Recipe browsing application for iOS — an exercise in SwiftUI and API integration.",
    tech: ["SwiftUI", "iOS", "REST API"],
    link: "https://github.com/rwndy/exercise-ios-recipe",
  },
];

export const SOCIALS: Social[] = [
  {
    name: "GITHUB", url: "https://github.com/rwndy",
    svgPath: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
  },
  {
    name: "LINKEDIN", url: "https://linkedin.com/in/riwandi",
    svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "TWITTER", url: "https://twitter.com/bbguenaik",
    svgPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];
