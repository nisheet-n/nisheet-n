 "use client";

import { HiBriefcase, HiMapPin, HiCalendar, HiArrowTrendingUp } from "react-icons/hi2";
import { experiences } from "@/constants/experience";

const getColorClasses = (color: "green" | "orange") => {
  if (color === "green") {
    return {
      dot: "bg-green-500",
      line: "bg-green-500",
      text: "text-green-600 dark:text-green-400",
    };
  }
  return {
    dot: "bg-orange-500",
    line: "bg-orange-500",
    text: "text-orange-600 dark:text-orange-400",
  };
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-20" data-testid="section-experience">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute right-10 top-16 hidden h-32 w-32 text-indigo-500/5 dark:text-indigo-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 12h18" />
        </svg>
        <svg className="absolute bottom-36 left-10 hidden h-24 w-24 text-emerald-500/5 dark:text-emerald-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
        <svg className="absolute bottom-10 right-24 hidden h-20 w-20 text-amber-500/5 dark:text-amber-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 5h8v5a4 4 0 0 1-8 0V5z" />
          <path d="M6 19h12M9 19l1-4h4l1 4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <HiBriefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              return (
                <div key={index} className="relative pl-10 md:pl-14" data-testid={`experience-item-${index}`}>
                  <div className={`absolute left-0 top-6 h-7 w-7 rounded-full border-4 border-background ${colors.dot} md:left-2`} />

                  <div className={`absolute left-[12px] top-[52px] bottom-[-56px] w-1 rounded-full ${colors.line} md:left-[20px]`} />

                  <div className="hover-elevate overflow-visible rounded-xl border border-border/70 bg-card/90 backdrop-blur-sm shadow-sm">
                    <div className="p-6">
                      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          {exp.previousRole ? (
                            <div className="mb-1">
                              <span className="text-base text-muted-foreground line-through">{exp.previousRole}</span>
                              <h3 className="text-xl font-semibold">{exp.role}</h3>
                            </div>
                          ) : (
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                          )}

                          <p className={`mt-2 text-sm font-medium ${colors.text}`}>{exp.company}</p>
                        </div>

                        <div className="flex flex-col items-start text-left md:items-end md:text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <HiCalendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                            <HiMapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 flex items-center gap-2 text-sm">
                        <HiArrowTrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{exp.impact}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-baseline gap-2 text-sm text-foreground/80">
                            <span className="shrink-0 text-xs text-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
