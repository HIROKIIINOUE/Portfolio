import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import { createElement } from "react";
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSentry,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiRevenuecat,
} from "react-icons/si";

export const skillLabels = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "MongoDB",
  "Docker",
  "GitHub Actions",
  "Expo",
  "Sentry",
  "Tailwind CSS",
  "Revenue Cat",
  "Codex",
] as const;

export type SkillLabel = (typeof skillLabels)[number];

const skillIconMap: Record<SkillLabel, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Expo: SiExpo,
  Sentry: SiSentry,
  "Tailwind CSS": SiTailwindcss,
  "Revenue Cat": SiRevenuecat,
  Codex: FaCode,
};

export const renderSkillIcon = (label: SkillLabel) =>
  createElement(skillIconMap[label] ?? FaCode);
