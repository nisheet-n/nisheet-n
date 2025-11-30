import { Wrench, Code, Palette, Settings, BarChart3, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiPython, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiDjango,
  SiGit,
  SiGithub,
  SiFigma,
  SiApachespark,
  SiTableau,
  SiDatabricks
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; icon?: IconType | LucideIcon | ComponentType<{ className?: string }> }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL" },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Django", icon: SiDjango },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "PySpark", icon: SiApachespark },
      { name: "Databricks", icon: SiDatabricks },
      { name: "Tableau", icon: SiTableau },
      { name: "MS Excel" },
      { name: "PowerBI" },
      { name: "Alteryx" },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD" },
      { name: "Responsive Design" },
      { name: "UI/UX" },
    ],
  },
  {
    title: "Tools",
    icon: Settings,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Co-Pilot" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative" data-testid="section-skills">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-10 right-10 w-32 h-32 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="10" width="80" height="80" rx="10" />
          <rect x="25" y="25" width="50" height="50" rx="5" />
          <rect x="40" y="40" width="20" height="20" rx="2" />
        </svg>
        <svg className="absolute bottom-20 left-10 w-24 h-24 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-visible hover-elevate" data-testid={`skill-category-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted text-sm"
                    >
                      {skill.icon && <skill.icon className="h-3.5 w-3.5 text-muted-foreground" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
