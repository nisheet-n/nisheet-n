import { HiAcademicCap } from "react-icons/hi2";

const education = [
  {
    institution: "KIIT University, Bhubaneswar",
    degree: "B.Tech in Computer Science",
    cgpa: "9.16",
    cgpaLabel: "CGPA",
    period: "2019 – 2023",
    highlight: "Top 5%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative pt-16 pb-6 md:pt-20 md:pb-6" data-testid="section-education">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute right-20 top-20 h-36 w-36 text-blue-500/5 dark:text-blue-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 6h18v12H3z" />
          <path d="M7 10h10M7 14h6" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-20 left-20 h-24 w-24 text-rose-500/5 dark:text-rose-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 8l10-5 10 5-10 5-10-5z" />
          <path d="M6 12v4c0 1 3 2 6 2s6-1 6-2v-4" />
        </svg>
        <svg className="absolute top-10 left-10 h-20 w-20 text-emerald-500/5 dark:text-emerald-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 6h14v12H5z" />
          <path d="M8 9h8M8 12h5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <HiAcademicCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">Education</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="hover-elevate overflow-visible rounded-xl border border-border/50 bg-card"
              data-testid={`education-item-${index}`}
            >
              <div className="p-6">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-semibold">{edu.institution}</h3>
                  {edu.highlight && (
                    <span className="shrink-0 rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                      {edu.highlight}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{edu.degree}</p>

                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary md:text-5xl">{edu.cgpa}</span>
                  <span className="text-sm text-muted-foreground">{edu.cgpaLabel}</span>
                </div>

                {edu.period && <span className="text-sm text-muted-foreground">{edu.period}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
