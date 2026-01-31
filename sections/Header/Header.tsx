 "use client";

import Image from "next/image";
import { HiArrowDown, HiDocumentText, HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socialLinks = [
  { icon: HiEnvelope, href: "mailto:nisheet.dev@gmail.com", label: "Email" },
  { icon: SiGithub, href: "https://github.com/nisheet-n", label: "GitHub" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/nisheet2000", label: "LinkedIn" },
  { icon: HiDocumentText, href: "/Nisheet_Resume.pdf", label: "Resume" },
];

export default function Header() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-8 md:px-8 md:pt-24 md:pb-10"
      data-testid="section-hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-56 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-3xl dark:bg-blue-500/28" />
        <div className="absolute bottom-0 left-0 h-48 w-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/50 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative">
            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl md:h-64 md:w-64">
              <Image
                src="/images/ProfileImage.jpg"
                alt="Nisheet"
                width={256}
                height={256}
                sizes="(min-width: 768px) 256px, 192px"
                priority
                className="h-full w-full object-cover"
                data-testid="img-avatar"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Nisheet
              </span>
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Data Analyst with 3 years of experience in Big Data architecture and Visual Analytics. Expert in building scalable ETL pipelines for 10B+ records and delivering high-performance solutions for Fortune 500 clients. Proficient in PySpark, Databricks, and SQL, with a background in frontend development for data-driven UIs. Bachelor of Technology in Computer Science with 9.16 CGPA.
            </p>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-view-work"
              >
                View Experience
              </button>
              <a
                href="mailto:nisheet.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                data-testid="button-contact"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted"
                  aria-label={link.label}
                  data-testid={`link-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          const element = document.querySelector("#experience");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition hover:text-foreground"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <HiArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
