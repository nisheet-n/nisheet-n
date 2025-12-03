import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiDatabricks, SiUdemy, SiAlteryx, SiLeetcode } from "react-icons/si";

interface CertificationItem {
  title: string;
  issuer: string;
  icon: typeof SiDatabricks;
  iconColor: string;
  credentialUrl?: string;
  year?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Get Started with SQL Analytics and BI on Databricks",
    issuer: "Databricks",
    icon: SiDatabricks,
    iconColor: "text-[#FF3621]",
    credentialUrl: "https://drive.google.com/file/d/1K7-ddGDTpRxg1pwMGGx-93xmyP2CHj7a/view?usp=sharing",
  },
  {
    title: "Transform Data with Spark",
    issuer: "Databricks",
    icon: SiDatabricks,
    iconColor: "text-[#FF3621]",
    credentialUrl: "https://drive.google.com/file/d/1xB6qU2Xv3PnVUgeqXkBwkPLWhAB_EKuz/view?usp=sharing",
  },
  {
    title: "Top SQL 50 Badge",
    issuer: "LeetCode",
    icon: SiLeetcode,
    iconColor: "text-[#FFA116]",
    credentialUrl: "https://leetcode.com/u/nisheet2000/",
  },
  {
    title: "Introduction to Alteryx",
    issuer: "Alteryx",
    icon: SiAlteryx,
    iconColor: "text-[#0078C0]",
    credentialUrl: "https://drive.google.com/file/d/1wgAyw-v0Md9FbOGoRK3dH7gT87tUV0xS/view?usp=sharing",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    icon: SiUdemy,
    iconColor: "text-[#A435F0]",
    credentialUrl: "",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-20 bg-muted/30 relative" data-testid="section-certifications">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-16 left-16 w-28 h-28 text-primary/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 15 L50 50 L75 50" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-16 right-16 w-20 h-20 text-primary/5" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-visible hover-elevate border-border/50 dark:border-border"
              data-testid={`certification-item-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${cert.iconColor}`}>
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm leading-tight">{cert.title}</h3>
                      <a
                        href={cert.credentialUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-md bg-muted hover-elevate shrink-0 ${!cert.credentialUrl ? "pointer-events-none opacity-40" : ""}`}
                        aria-label="View Credential"
                        data-testid={`link-credential-${index}`}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    {cert.year && (
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
