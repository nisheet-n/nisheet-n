import type { ComponentType } from "react";
import { HiHeart, HiUsers } from "react-icons/hi2";

type IconComponent = ComponentType<{ className?: string }>;

export type LeadershipItem = {
  title: string;
  icon: IconComponent;
  link?: string;
  linkText?: string;
  suffix?: string;
};

export const leadership: LeadershipItem[] = [
  {
    title: "Mentored 2 interns at Deloitte, successfully guiding both to secure full-time positions",
    icon: HiUsers,
  },
  {
    title: "UI/UX Lead at IoT Lab, KIIT University, successfully delivered 18 projects and prototypes",
    icon: HiUsers,
  },
  {
    title: "Official website developer and logo designer for",
    icon: HiHeart,
    linkText: "Sankalp Sewa Ka",
    link: "https://www.sankalpsewaka.org/",
    suffix: " NGO",
  },
  {
    title: "Coordinated educational drives at Rural Immersion Programme for village children, reaching a footfall of 500+",
    icon: HiHeart,
  },
];
