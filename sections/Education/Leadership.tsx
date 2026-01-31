import { HiBolt, HiUserGroup } from "react-icons/hi2";
import { leadership } from "@/constants/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="relative pt-6 pb-3 md:pt-8 md:pb-3" data-testid="section-leadership">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute right-16 top-6 h-24 w-24 text-sky-500/5 dark:text-sky-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M14 18c.4-1.6 1.9-2.8 3.7-3" />
        </svg>
        <svg className="absolute bottom-6 left-10 h-20 w-20 text-emerald-500/5 dark:text-emerald-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 4h12v16H6z" />
          <path d="M9 8h6M9 12h4" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-20 left-28 h-20 w-20 text-violet-500/5 dark:text-violet-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v6M8 7h8" strokeLinecap="round" />
          <rect x="6" y="9" width="12" height="12" rx="2" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HiUserGroup className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Leadership</p>
            <h2 className="text-2xl font-semibold">Ownership & Mentorship</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm transition hover:border-primary/30 hover:bg-card hover:shadow-md"
              data-testid={`leadership-item-${index}`}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
              <div className="text-sm text-foreground/90">
                <p className="font-medium text-foreground">
                  {item.title}
                  {item.link && item.linkText && (
                    <>
                      {" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.linkText}
                      </a>
                      {item.suffix}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
