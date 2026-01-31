import { HiChartBar, HiCog6Tooth, HiSwatch, HiWrenchScrewdriver } from "react-icons/hi2";
import { skillCategories } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20" data-testid="section-skills">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute right-10 top-10 hidden h-32 w-32 text-teal-500/5 dark:text-teal-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 7l-4 5 4 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5l-2 14" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-20 left-10 hidden h-24 w-24 text-violet-500/5 dark:text-violet-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="5" />
        </svg>
        <svg className="absolute top-24 left-28 hidden h-20 w-20 text-amber-500/5 dark:text-amber-400/10 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12h18" />
          <path d="M12 3v18" />
          <path d="M6 7h12M6 17h12" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <HiWrenchScrewdriver className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative rounded-xl border ${category.borderColor} bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:border-border dark:hover:shadow-black/20`}
              data-testid={`skill-category-${index}`}
            >
              <div className={`absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full ${category.bgColor} blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-80`} />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className={`rounded-lg p-2.5 ${category.bgColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${
                        skill.featured
                          ? `${category.bgColor} ${category.borderColor} border`
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      {skill.icon && (
                        <skill.icon className={`h-4 w-4 ${skill.featured ? category.color : "text-muted-foreground"}`} />
                      )}
                      <span className={`text-sm ${skill.featured ? "font-medium" : ""}`}>{skill.name}</span>
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
