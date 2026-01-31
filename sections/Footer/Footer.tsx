import { HiDocumentText, HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { socialLinks } from "@/constants/socialLinks";

const iconMap = {
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  Email: HiEnvelope,
  Resume: HiDocumentText,
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-border bg-muted/30 py-8 md:py-10"
      data-testid="section-contact"
    >
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <div className="mx-auto mb-5 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact me</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Want to collaborate or chat? Reach out anytime.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm text-foreground transition hover:bg-muted"
                data-testid={`button-social-${link.label.toLowerCase()}`}
              >
                {Icon ? <Icon className="h-4 w-4" /> : null}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-6 text-xs text-muted-foreground">
          Based in India • Open to remote opportunities
        </div>
      </div>
    </footer>
  );
}
