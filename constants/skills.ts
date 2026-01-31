import type { ComponentType } from "react";
import {
  SiAlteryx,
  SiAmazonwebservices,
  SiDatabricks,
  SiDjango,
  SiFigma,
  SiGithub,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import { HiChartBar, HiCloud, HiCodeBracket, HiCog6Tooth, HiSwatch } from "react-icons/hi2";

type IconComponent = ComponentType<{ className?: string }>;

export type SkillCategory = {
  title: string;
  icon: IconComponent;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; icon?: IconComponent; featured?: boolean }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & BI",
    icon: HiChartBar,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "PySpark", icon: SiPython, featured: true },
      { name: "Databricks", icon: SiDatabricks, featured: true },
      { name: "Tableau", icon: SiTableau, featured: true },
      { name: "Power BI" },
      { name: "Alteryx", icon: SiAlteryx },
      { name: "MS Excel" },
    ],
  },
  {
    title: "Languages",
    icon: HiCodeBracket,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Python", icon: SiPython, featured: true },
      { name: "SQL", featured: true },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Web Development",
    icon: HiCodeBracket,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "React.js", icon: SiReact, featured: true },
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "REST APIs" },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Tools",
    icon: HiCog6Tooth,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "Git", icon: SiGit, featured: true },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: HiCloud,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    skills: [
      { name: "Azure Databricks" },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Design",
    icon: HiSwatch,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Figma", icon: SiFigma, featured: true },
      { name: "Adobe XD" },
      { name: "UI/UX" },
      { name: "Responsive Design" },
    ],
  },
];
