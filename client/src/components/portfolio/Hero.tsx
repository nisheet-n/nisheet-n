import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import profileImage from "../../../../assets/images/ProfileImage.jpg";
import codeGraffiti from "../../../../assets/images/anime_code_graffiti_art.png";
import resumePdf from "../../../../assets/Nisheet_Resume.pdf";

const socialLinks = [
  { icon: EnvelopeIcon, href: "mailto:nisheet.dev@gmail.com", label: "Email", isBrand: false },
  { icon: GitHubIcon, href: "https://github.com/nisheet-n", label: "GitHub", isBrand: true },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/nisheet2000", label: "LinkedIn", isBrand: true },
  { icon: DocumentTextIcon, href: resumePdf, label: "Resume", isBrand: false },
];

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-8 pt-16 overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="absolute bottom-0 left-0 w-full h-48">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-transparent z-10" />
          <img 
            src={codeGraffiti} 
            alt="" 
            className="w-full h-full object-cover opacity-15 pointer-events-none"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-gradient-to-br from-primary/20 to-primary/5">
              <img 
                src={profileImage} 
                alt="Nisheet" 
                className="w-full h-full object-cover"
                data-testid="img-avatar"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Nisheet
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
              Data Analyst with 3 years of experience in Big Data architecture and Visual Analytics. Expert in building scalable ETL pipelines for 10B+ records and delivering high-performance solutions for Fortune 500 clients. Proficient in PySpark, Databricks, and SQL, with a background in frontend development for data-driven UIs. Bachelor of Technology in Computer Science with 9.16 CGPA.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
              <Button size="lg" onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-view-work">
                View Experience
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:nisheet.dev@gmail.com" data-testid="button-contact">
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={`link-social-${link.label.toLowerCase()}`}
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.querySelector("#experience");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </button>
    </section>
  );
}
