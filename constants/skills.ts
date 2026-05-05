import type { ComponentType } from "react";
import {
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  SwatchIcon,
} from "@/components/icons/CategoryIcons";

type SVGIconComponent = ComponentType<{ className?: string }>;

export type SkillCategory = {
  title: string;
  icon: SVGIconComponent;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; icon?: string; featured?: boolean }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & BI",
    icon: ChartBarIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "PySpark", icon: "/svg/python.svg", featured: true },
      { name: "Databricks", icon: "/svg/databricks.svg", featured: true },
      { name: "Tableau", icon: "/svg/tableau.svg", featured: true },
      { name: "Power BI" },
      { name: "Alteryx", icon: "/svg/alteryx.svg" },
      { name: "MS Excel" },
    ],
  },
  {
    title: "Languages",
    icon: CodeBracketIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Python", icon: "/svg/python.svg", featured: true },
      { name: "SQL", featured: true },
      { name: "TypeScript", icon: "/svg/typescript.svg" },
    ],
  },
  {
    title: "Web Development",
    icon: CodeBracketIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "React.js", icon: "/svg/react.svg", featured: true },
      { name: "Next.js", icon: "/svg/nextjs.svg", featured: true },
      { name: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
      { name: "REST APIs" },
      { name: "Django", icon: "/svg/django.svg" },
    ],
  },
  {
    title: "Tools",
    icon: CogIcon,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "Git", icon: "/svg/git.svg", featured: true },
      { name: "GitHub", icon: "/svg/github.svg" },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: CloudIcon,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    skills: [
      { name: "Azure Databricks" },
      { name: "AWS", icon: "/svg/aws.svg" },
      { name: "MongoDB", icon: "/svg/mongodb.svg" },
      { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
      { name: "Node.js", icon: "/svg/nodejs.svg" },
    ],
  },
  {
    title: "Design",
    icon: SwatchIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Figma", icon: "/svg/figma.svg", featured: true },
      { name: "Adobe XD" },
      { name: "UI/UX" },
      { name: "Responsive Design" },
    ],
  },
];
