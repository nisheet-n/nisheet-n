import { WrenchScrewdriverIcon, CodeBracketIcon, SwatchIcon, Cog6ToothIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { 
  PythonIcon, 
  TypeScriptIcon, 
  ReactIcon, 
  NextJsIcon, 
  TailwindIcon, 
  DjangoIcon, 
  GitIcon, 
  GitHubIcon, 
  FigmaIcon, 
  SparkIcon, 
  TableauIcon, 
  DatabricksIcon,
  DatabaseIcon 
} from "@/components/BrandIcons";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

interface SkillCategory {
  title: string;
  icon: IconComponent;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; icon?: IconComponent; featured?: boolean }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Data & Analytics",
    icon: ChartBarIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "PySpark", icon: SparkIcon, featured: true },
      { name: "Databricks", icon: DatabricksIcon, featured: true },
      { name: "Alteryx" },
      { name: "SAS" },
      { name: "MS Excel" },
      { name: "Tableau", icon: TableauIcon },
      { name: "PowerBI" },
    ],
  },
  {
    title: "Languages",
    icon: CodeBracketIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Python", icon: PythonIcon, featured: true },
      { name: "SQL", icon: DatabaseIcon, featured: true },
      { name: "TypeScript", icon: TypeScriptIcon },
    ],
  },
  {
    title: "Web Development",
    icon: CodeBracketIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "React.js", icon: ReactIcon, featured: true },
      { name: "Next.js", icon: NextJsIcon, featured: true },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "REST APIs" },
      { name: "Django", icon: DjangoIcon },
    ],
  },
  {
    title: "Tools",
    icon: Cog6ToothIcon,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "Git", icon: GitIcon, featured: true },
      { name: "GitHub", icon: GitHubIcon },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Co-Pilot" },
    ],
  },
  {
    title: "Design",
    icon: SwatchIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Figma", icon: FigmaIcon, featured: true },
      { name: "Adobe XD" },
      { name: "UI/UX" },
      { name: "Responsive Design" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative" data-testid="section-skills">
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
        <div className="flex items-center gap-3 mb-8">
          <WrenchScrewdriverIcon className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`group relative rounded-xl border ${category.borderColor} dark:border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20`}
              data-testid={`skill-category-${index}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${category.bgColor} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 transition-opacity duration-300 group-hover:opacity-80`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        skill.featured 
                          ? `${category.bgColor} ${category.borderColor} border` 
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                    >
                      {skill.icon && (
                        <skill.icon className={`h-4 w-4 ${skill.featured ? category.color : 'text-muted-foreground'}`} />
                      )}
                      <span className={`text-sm ${skill.featured ? 'font-medium' : ''}`}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
