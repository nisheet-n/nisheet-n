import { GraduationCap, Award, Trophy, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EducationItem {
  institution: string;
  degree: string;
  cgpa?: string;
  cgpaLabel?: string;
  period?: string;
  highlight?: string;
}

interface AwardItem {
  title: string;
  icon: typeof Trophy;
  highlight?: boolean;
}

interface LeadershipItem {
  title: string;
  icon: typeof Trophy;
  link?: string;
  linkText?: string;
  suffix?: string;
}

const education: EducationItem[] = [
  {
    institution: "KIIT University, Bhubaneswar",
    degree: "B.Tech in Computer Science",
    cgpa: "9.16",
    cgpaLabel: "CGPA",
    period: "2019 – 2023",
    highlight: "Top 5%",
  },
  {
    institution: "Delhi Public School, Patna",
    degree: "CBSE Class Xth & XIIth",
    cgpa: "10",
    cgpaLabel: "CGPA in Class Xth",
    highlight: "Perfect score",
  },
];

const awards: AwardItem[] = [
  { title: "Awarded for handling large-scale data processing for a client having 1Billion+ records at Deloitte", icon: Trophy, highlight: true },
  { title: "All India Eastern Zonal Finalist at Tata Crucible Hackathon for developing Parimargin, a geolocation-based track solution", icon: Trophy },
  { title: "Earned Scholar's Memento and 4 Scholar badges for consistent academic excellence over 4+ years", icon: Award },
  { title: "Secured first division in Fine Arts (Painting) at Pracheen Kala Kendra, as well as 2nd place in Art Competition", icon: Award },
];

const leadership: LeadershipItem[] = [
  { title: "Mentored 2 interns at Deloitte, successfully guiding both to secure full-time positions", icon: Users },
  { title: "UI/UX Lead at IoT Lab, KIIT University, successfully delivered 18 projects and prototypes", icon: Users },
  { title: "Official website developer and logo designer for", icon: Heart, linkText: "Sankalp Sewa Ka", link: "https://www.sankalpsewaka.org/", suffix: " NGO" },
  { title: "Coordinated educational drives at Rural Immersion Programme for village children, reaching a footfall of 500+", icon: Heart },
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-20 relative" data-testid="section-education">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-20 w-36 h-36 text-primary/5" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z" />
        </svg>
        <svg className="absolute bottom-20 left-20 w-24 h-24 text-primary/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 10 L50 90 M10 50 L90 50" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Education</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-visible hover-elevate border-border/50 dark:border-border" data-testid={`education-item-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold">{edu.institution}</h3>
                  {edu.highlight && (
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {edu.highlight}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-3">{edu.degree}</p>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">{edu.cgpa}</span>
                  <span className="text-muted-foreground text-sm">{edu.cgpaLabel}</span>
                </div>
                
                {edu.period && (
                  <span className="text-muted-foreground text-sm">{edu.period}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {leadership.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-md bg-card border border-border/50 dark:border-border"
                  data-testid={`leadership-item-${index}`}
                >
                  <item.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">
                    {item.title}
                    {item.link && item.linkText && (
                      <>
                        {" "}
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          {item.linkText}
                        </a>
                        {item.suffix}
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Recognition</h2>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-md ${
                    award.highlight ? "bg-primary/10 border border-primary/20" : "bg-card border border-border/50 dark:border-border"
                  }`}
                  data-testid={`award-item-${index}`}
                >
                  <award.icon className={`h-4 w-4 mt-0.5 shrink-0 ${award.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm">{award.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
