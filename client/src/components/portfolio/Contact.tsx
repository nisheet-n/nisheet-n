import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import resumePdf from "../../../../assets/Nisheet_Resume.pdf";

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/nisheet-n" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/nisheet2000" },
  { icon: EnvelopeIcon, label: "Email", href: "mailto:nisheet.dev@gmail.com" },
  { icon: DocumentTextIcon, label: "Resume", href: resumePdf },
];

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/30" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <EnvelopeIcon className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              asChild
              data-testid={`button-social-${link.label.toLowerCase()}`}
            >
              <a 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
