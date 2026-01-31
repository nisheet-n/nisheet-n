import { HiAcademicCap, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiDatabricks, SiUdemy, SiAlteryx, SiLeetcode } from "react-icons/si";
import { certifications } from "@/constants/certifications";

const iconMap = {
  databricks: SiDatabricks,
  udemy: SiUdemy,
  alteryx: SiAlteryx,
  leetcode: SiLeetcode,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-muted/30 py-16 md:py-20" data-testid="section-certifications">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-10 left-12 h-24 w-24 text-amber-500/5 dark:text-amber-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M9 12h6l2 6-5-2-5 2 2-6z" />
        </svg>
        <svg className="absolute bottom-16 right-16 h-20 w-20 text-rose-500/5 dark:text-rose-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l3 6 6 .5-4.5 4 1.5 6-6-3-6 3 1.5-6L3 9.5 9 9z" />
        </svg>
        <svg className="absolute top-12 right-20 h-20 w-20 text-amber-500/5 dark:text-amber-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <HiAcademicCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold md:text-4xl">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon];
            return (
              <div
                key={cert.title}
                className="hover-elevate overflow-visible rounded-xl border border-border/50 bg-card"
                data-testid={`certification-item-${index}`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-lg bg-muted p-3 ${cert.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold leading-tight">{cert.title}</h3>
                        <a
                          href={cert.credentialUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`shrink-0 rounded-md bg-muted p-1.5 hover-elevate ${
                            !cert.credentialUrl ? "pointer-events-none opacity-40" : ""
                          }`}
                          aria-label="View Credential"
                          data-testid={`link-credential-${index}`}
                        >
                          <HiArrowTopRightOnSquare className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.year && <span className="text-xs text-muted-foreground">{cert.year}</span>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
