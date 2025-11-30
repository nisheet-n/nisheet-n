import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  company: string;
  role: string;
  previousRole?: string;
  duration: string;
  type: "full-time" | "intern";
  impact: string;
  achievements: string[];
  technologies: string[];
  color: "green" | "orange";
}

const experiences: ExperienceItem[] = [
  {
    company: "Deloitte US-India",
    role: "Analytics Specialist",
    duration: "Aug 2023 – Present",
    type: "full-time",
    impact: "Promoted to Senior Assistant",
    achievements: [
      "Built data processing pipelines using Python and PySpark, handling 10+ Billion records combined over 50+ clients",
      "Improved code maintainability by implementing modern Python practices demonstrating strong Python fundamentals",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions",
      "Received shoutout for performance and eventually promoted to Analytics Specialist Senior Assistant",
    ],
    technologies: ["Python", "PySpark", "Databricks", "SQL", "Alteryx", "Tableau"],
    color: "green",
  },
  {
    company: "Deloitte US-India",
    role: "Winter Intern",
    duration: "Jan 2023 – Mar 2023",
    type: "intern",
    impact: "Converted to full-time offer",
    achievements: [
      "Modernized legacy codebase achieving 50% reduction in runtime through clean code principles and Python optimizations",
    ],
    technologies: ["Python", "Data Processing", "Code Optimization"],
    color: "green",
  },
  {
    company: "HighRadius Corporation",
    role: "Frontend Developer",
    duration: "Jan 2022 – Nov 2022",
    type: "full-time",
    impact: "Reduced development time by 40%",
    achievements: [
      "Engineered a responsive dashboard application using Next.js, React.js, and TypeScript in an agile environment",
      "Reduced development time by 40% by creating 15+ reusable UI components, maintaining consistent design patterns",
      "Enhanced website performance through code splitting, lazy loading, and SEO optimization techniques",
      "Built scalable navigation components and integrated with REST APIs for dynamic data fetching",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "REST APIs", "Agile"],
    color: "orange",
  },
];

const getColorClasses = (color: "green" | "orange") => {
  if (color === "green") {
    return {
      dot: "bg-green-500",
      line: "bg-green-500",
    };
  }
  return {
    dot: "bg-orange-500",
    line: "bg-orange-500",
  };
};

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative" data-testid="section-experience">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-10 w-32 h-32 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 80 L50 20 L80 80" />
          <path d="M30 60 L50 30 L70 60" />
        </svg>
        <svg className="absolute bottom-40 left-10 w-24 h-24 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="25" cy="25" r="15" />
          <circle cx="75" cy="25" r="15" />
          <circle cx="50" cy="70" r="15" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A track record of delivering impactful solutions at leading technology firms.
        </p>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              
              return (
                <div key={index} className="relative pl-10 md:pl-14" data-testid={`experience-item-${index}`}>
                  <div className={`absolute left-1 md:left-3 top-6 w-4 h-4 rounded-full ${colors.dot} border-4 border-background z-10`} />
                  
                  <div className={`absolute left-[7px] md:left-[17px] top-[22px] bottom-[-32px] w-1 ${colors.line} rounded-full`} />
                  
                  <Card className="hover-elevate overflow-visible">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          {exp.previousRole ? (
                            <div className="mb-1">
                              <span className="text-muted-foreground line-through text-base">{exp.previousRole}</span>
                              <h3 className="text-xl font-semibold">{exp.role}</h3>
                            </div>
                          ) : (
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                          )}
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <TrendingUp className={`h-4 w-4 ${exp.color === "green" ? "text-green-500" : "text-orange-500"}`} />
                        <span className={`font-medium ${exp.color === "green" ? "text-green-600 dark:text-green-400" : "text-orange-600 dark:text-orange-400"}`}>{exp.impact}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
