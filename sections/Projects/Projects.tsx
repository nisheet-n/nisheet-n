import { HiArrowTopRightOnSquare, HiCheck, HiCodeBracketSquare, HiGlobeAsiaAustralia } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-muted/30 py-16 md:py-20" data-testid="section-projects">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute right-16 top-8 h-40 w-40 text-purple-500/5 dark:text-purple-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3h6" />
          <path d="M10 3v4l-4 8a4 4 0 0 0 3.6 5h4.8a4 4 0 0 0 3.6-5l-4-8V3" />
        </svg>
        <svg className="absolute bottom-10 left-10 h-28 w-28 text-cyan-500/5 dark:text-cyan-400/10" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6" cy="10" r="3" />
          <circle cx="15" cy="7" r="2.5" />
          <circle cx="16" cy="15" r="4" />
        </svg>
        <svg className="absolute top-20 left-24 h-20 w-20 text-emerald-500/5 dark:text-emerald-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h8M8 14h5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <HiCodeBracketSquare className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="hover-elevate overflow-visible rounded-xl border border-border/50 bg-card"
              data-testid={`project-card-${index}`}
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted"
                          data-testid={`button-github-${index}`}
                        >
                          <SiGithub className="h-4 w-4" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted"
                          data-testid={`button-live-${index}`}
                        >
                          <HiArrowTopRightOnSquare className="h-4 w-4" />
                        </a>
                      )}
                      {project.logsUrl && (
                        <a
                          href={project.logsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Project Logs"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted"
                          data-testid={`button-logs-${index}`}
                        >
                          <HiGlobeAsiaAustralia className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{project.longDescription}</p>
                </div>

                <ul className="mb-4 space-y-1.5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <HiCheck className="mt-1 h-3 w-3 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/60 bg-secondary/70 px-2.5 py-1 text-xs font-medium text-foreground/90"
                    >
                      {tech}
                    </span>
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
