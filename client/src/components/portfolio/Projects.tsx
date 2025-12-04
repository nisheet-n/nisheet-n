import { CodeBracketSquareIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/BrandIcons";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "GrandLine",
    description: "Anime Streaming Platform",
    longDescription: "A production-ready streaming platform showcasing advanced React patterns, server-side rendering, and real-time features.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "Swiper.js", "HLS.js"],
    highlights: [
      "Server Components with Next.js App Router",
      "Custom HLS video player with adaptive streaming",
      "Real-time search with debouncing",
      "Continuous deployment with Vercel",
    ],
    githubUrl: "https://github.com/nisheet-n",
  },
  {
    title: "Paris Olympics 2024 Dashboard",
    description: "Data Analytics Dashboard",
    longDescription: "An interactive analytics dashboard visualizing Paris Olympics 2024 data with comprehensive insights on events, athletes, and medal standings.",
    technologies: ["Databricks", "Tableau", "Python", "SQL", "Data Analytics"],
    highlights: [
      "Built data pipelines in Databricks for ETL processing",
      "Created interactive Tableau dashboards with drill-down capabilities",
      "Visualized medal counts, athlete performance, and country statistics",
      "Real-time data refresh with optimized query performance",
    ],
  },
  {
    title: "Password Generator",
    description: "Secure Password Web App",
    longDescription: "A security-focused web application demonstrating RESTful API design and modern frontend practices.",
    technologies: ["Django", "Python", "JavaScript", "REST APIs"],
    highlights: [
      "RESTful API architecture with Django",
      "Customizable password generation",
      "Clipboard integration with fallback",
      "Responsive and accessible design",
    ],
    githubUrl: "https://github.com/nisheet-n",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-muted/30 relative" data-testid="section-projects">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-10 right-20 w-40 h-40 text-primary/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="15" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-28 h-28 text-primary/5" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 50 L50 10 L90 50 L50 90 Z" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketSquareIcon className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-visible hover-elevate border-border/50 dark:border-border"
              data-testid={`project-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild data-testid={`button-github-${index}`}>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.longDescription}</p>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <CheckIcon className="h-3 w-3 mt-1 text-primary shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
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
