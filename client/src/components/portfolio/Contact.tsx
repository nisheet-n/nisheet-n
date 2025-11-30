import { Mail, Github, Linkedin, Copy, Check, MapPin, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import resumePdf from "@assets/Nisheet_Resume.pdf";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nisheet-n" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nisheet2000" },
  { icon: Globe, label: "Website", href: "https://nisheet.xyz" },
  { icon: FileText, label: "Resume", href: resumePdf },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("nisheet.dev@gmail.com");
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Email copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <a
              href="mailto:nisheet.dev@gmail.com"
              className="font-medium hover:text-primary transition-colors"
            >
              nisheet.dev@gmail.com
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-8 w-8"
              data-testid="button-copy-email"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Hyderabad, India</span>
          </div>
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
