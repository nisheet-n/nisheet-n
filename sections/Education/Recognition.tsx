import { HiCheckBadge, HiSparkles } from "react-icons/hi2";
import { recognitions } from "@/constants/recognitions";

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-6 md:py-8" data-testid="section-recognition">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute left-10 top-6 h-24 w-24 text-amber-500/5 dark:text-amber-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3h8v5a4 4 0 0 1-8 0V3z" />
          <path d="M6 21h12M9 21l1-4h4l1 4" />
          <path d="M6 6H4a3 3 0 0 0 3 3M18 6h2a3 3 0 0 1-3 3" />
        </svg>
        <svg className="absolute bottom-6 right-12 h-20 w-20 text-rose-500/5 dark:text-rose-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
        </svg>
        <svg className="absolute top-14 right-24 h-20 w-20 text-amber-500/5 dark:text-amber-400/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 4h10v4l-5 3-5-3V4z" />
          <path d="M9 11l3 2 3-2v6H9z" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HiCheckBadge className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Recognition</p>
            <h2 className="text-2xl font-semibold">Awards & Highlights</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {recognitions.map((award, index) => (
            <div
              key={index}
              className={`group flex items-start gap-3 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
                award.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/60 bg-card/80 hover:border-primary/20"
              }`}
              data-testid={`award-item-${index}`}
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  award.highlight ? "bg-primary" : "bg-muted-foreground/40"
                }`}
              />
              <div className="text-sm text-foreground/90">
                <p className="font-medium text-foreground">{award.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
