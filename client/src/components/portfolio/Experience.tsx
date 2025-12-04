import { BriefcaseIcon, CalendarIcon, ArrowTrendingUpIcon, ChatBubbleLeftIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedInIcon } from "@/components/BrandIcons";
import { useState, useEffect } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  previousRole?: string;
  duration: string;
  location: string;
  type: "full-time" | "intern";
  impact: string;
  achievements: string[];
  technologies: string[];
  color: "green" | "orange";
}

interface ShoutoutItem {
  message: string;
  from: string;
  position: string;
  date: string;
  linkedin: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Deloitte US-India",
    role: "Senior Assistant Analytics Specialist",
    duration: "May 2025 – Present",
    location: "Hyderabad, India",
    type: "full-time",
    impact: "Promoted within 2 years",
    achievements: [
      "Built data processing pipelines using Python and PySpark, handling 10+ Billion records combined over 50+ clients",
      "Delivered audit readiness via journal entry testing and 1M+ financial record reconciliation",
      "Automated reconciliations, FX revaluations & audit checks via Python/SQL with full coverage",
      "Created 10+ Tableau/Power BI dashboards, enabling real-time data-driven decisions for audit teams",
      "Flagged financial anomalies through trend analysis using PowerBI to support fraud analytics",
      "Received Spot Award for simplifying complex data into clear, actionable insights",
    ],
    technologies: ["Python", "PySpark", "SQL", "Databricks", "Power BI", "MS Excel", "Tableau", "Alteryx"],
    color: "green",
  },
  {
    company: "Deloitte US-India",
    role: "Analytics Specialist",
    duration: "Jan 2023 – May 2025",
    location: "Hyderabad, India",
    type: "full-time",
    impact: "Converted from intern to full-time",
    achievements: [
      "Modernized legacy codebase achieving 50% reduction in runtime through clean code principles and Python optimizations",
      "Built scalable SQL/PySpark pipelines to clean and process 100M+ records for reporting",
      "Validated data completeness using SAS & Python, ensuring financial audit accuracy",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions",
    ],
    technologies: ["Python", "PySpark", "SQL", "SAS", "Databricks", "MS Excel"],
    color: "green",
  },
  {
    company: "HighRadius Corporation",
    role: "Frontend Developer",
    duration: "Jan 2022 – Nov 2022",
    location: "Bhubaneswar, India",
    type: "full-time",
    impact: "Reduced development time by 40%",
    achievements: [
      "Engineered a responsive dashboard application using Next.js, React.js, and TypeScript in an agile environment",
      "Reduced development time by 40% by creating 15+ reusable UI components, maintaining consistent design patterns",
      "Enhanced website performance through code splitting, lazy loading, and SEO optimization techniques",
      "Built scalable navigation components and integrated with REST APIs for dynamic data fetching",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "REST APIs", "Agile"],
    color: "orange",
  },
];

const shoutouts: ShoutoutItem[] = [
  { 
    message: "Thank you for the great work! Doesn't feel like working with an intern anymore. The pace at which you learnt things, came up to level is so commendable. Thank you for learning things in so ease and exhibiting them in perfection. You were so open to take up any work and much reliable person. Looking forward to seeing you soon as full time professional. All the best for future endeavours. THANK YOU!",
    from: "Pavithra Munugala",
    position: "Senior 3+",
    date: "March 4, 2023",
    linkedin: "https://www.linkedin.com/in/pavithra-munugala-cfe-a734a574/"
  },
  { 
    message: "Nisheet has good technical skills and is able to pick up new analytics well, with some guidance.",
    from: "Krishna Tushara Yerubandi",
    position: "Senior Manager 2",
    date: "June 28, 2024",
    linkedin: "https://www.linkedin.com/in/krishna-tushara-y-88a2a43a/"
  },
  { 
    message: "He has demonstrated strong technical skills, problem-solving capabilities, commitment to high quality and shown interest in learning new things.",
    from: "Akhila Porumamilla",
    position: "Senior 2",
    date: "June 28, 2024",
    linkedin: "https://www.linkedin.com/in/porumamilla-akhila-9a6621121/"
  },
  { 
    message: "Nisheet has been doing very good when it comes to handling and delivering of his engagements. He is a great professional with strong work ethics. Throughout his day, he wears different hats as he takes active participation in interacting with the engagement teams to solve their queries, to delivering engagements. There is always a room for improvement so I would ask him to keep striving for more, believe in his ideas and implement those in the process. I wish him all the best for his future.",
    from: "Karan Sharma",
    position: "Manager 2",
    date: "August 23, 2024",
    linkedin: "https://www.linkedin.com/in/karan-sharma-cfe-336a7b18b/"
  },
  { 
    message: "Nisheet has significantly improved in understanding of the project's requirements, providing insights on the process and data. It is important for him to continue this progress.",
    from: "Sunil Kumar Pathipati",
    position: "Senior 1",
    date: "November 15, 2024",
    linkedin: "https://www.linkedin.com/in/sunilpathipati1996/"
  },
  { 
    message: "You have shown tremendous responsibility and brilliant technical skills on both Databricks conversion as well as the deliverables. I am so grateful for all the support and hardwork you have contributed. Thank you for everything! You are brilliant! :D",
    from: "Sonia Simlai",
    position: "Senior 2",
    date: "November 26, 2024",
    linkedin: "https://www.linkedin.com/in/soniasimlai/"
  },
  { 
    message: "He is excelling in his work, demonstrating strong commitment and an impressive understanding of engagement-specific custom requests. He can keep this going and looking forward to see him step in to further responsibilities.",
    from: "Sunil Kumar Pathipati",
    position: "Senior 1",
    date: "February 28, 2025",
    linkedin: "https://www.linkedin.com/in/sunilpathipati1996/"
  },
  { 
    message: "Nisheet displays exemplary technical skills and strives to automate tasks and make programs as efficient as possible, reducing manual effort and hours incurred. He has been able to manage multiple complex tasks, delivering with quality in a timely manner. He is great at communicating and prioritizing tasks. He can focus on self-reviews and debugging by paying more attention to detail. He should also work on honing his functional knowledge, as he can take up more responsibilities and start communicating with audit teams and leading engagements.",
    from: "Sonia Simlai",
    position: "Senior 2",
    date: "February 28, 2025",
    linkedin: "https://www.linkedin.com/in/soniasimlai/"
  },
  { 
    message: "Nisheet has been doing a good job in managing and delivering the clients he has been working on while maintaining quality and timely delivery. I would suggest him to start asking leads for some smaller engagements where he can start leading the clients from start to end.",
    from: "Aman Pandey",
    position: "Senior 2",
    date: "May 16, 2025",
    linkedin: "https://www.linkedin.com/in/aman-pandey-49817618a/"
  },
  { 
    message: "Nisheet has been a reliable team member. He has delivered high quality work consistently and in a time. He displays commitment in the project/client work that he does and also has a good technical knowledge.",
    from: "Shivani Kosa",
    position: "Senior 2",
    date: "August 22, 2025",
    linkedin: "https://www.linkedin.com/in/kosa-shivani-a2956916a/"
  },
];

const getColorClasses = (color: "green" | "orange") => {
  if (color === "green") {
    return {
      dot: "bg-green-500",
      line: "bg-green-500",
    };
  }
  return {
    dot: "bg-orange-500",
    line: "bg-orange-500",
  };
};

export function Experience() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const totalReal = shoutouts.length;
  const extendedShoutouts = [
    shoutouts[totalReal - 1],
    ...shoutouts,
    shoutouts[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === totalReal + 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalReal);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
  }, [currentSlide, totalReal]);

  return (
    <section id="experience" className="py-16 md:py-20 relative" data-testid="section-experience">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-10 w-32 h-32 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 80 L50 20 L80 80" />
          <path d="M30 60 L50 30 L70 60" />
        </svg>
        <svg className="absolute bottom-40 left-10 w-24 h-24 text-primary/5 hidden md:block" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="25" cy="25" r="15" />
          <circle cx="75" cy="25" r="15" />
          <circle cx="50" cy="70" r="15" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <BriefcaseIcon className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              
              return (
                <div key={index} className="relative pl-10 md:pl-14" data-testid={`experience-item-${index}`}>
                  <div className={`absolute left-0 md:left-2 top-6 w-5 h-5 rounded-full ${colors.dot} border-4 border-background z-10`} />
                  
                  <div className={`absolute left-[8px] md:left-[16px] top-[24px] bottom-[-56px] w-1 ${colors.line} rounded-full`} />
                  
                  <Card className="hover-elevate overflow-visible">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          {exp.previousRole ? (
                            <div className="mb-1">
                              <span className="text-muted-foreground line-through text-base">{exp.previousRole}</span>
                              <h3 className="text-xl font-semibold">{exp.role}</h3>
                            </div>
                          ) : (
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                          )}
                          <p className={`font-medium ${exp.color === "green" ? "text-green-600 dark:text-green-400" : "text-orange-600 dark:text-orange-400"}`}>{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{exp.impact}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-baseline gap-2">
                            <span className="text-primary shrink-0 text-xs">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 testimonial-carousel">
          <div className="overflow-hidden rounded-xl">
            <div 
              className={`flex gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ 
                '--slide-index': currentSlide
              } as React.CSSProperties}
            >
              {extendedShoutouts.map((shoutout, index) => {
                const isActive = index === currentSlide;
                return (
                <div 
                  key={index} 
                  className={`testimonial-slide flex-shrink-0 transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.92]'
                  }`}
                  data-testid={`shoutout-slide-${index}`}
                >
                  <div className={`relative overflow-hidden rounded-xl p-6 h-full flex flex-col justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/25 shadow-xl' 
                      : 'bg-card border border-border/50'
                  }`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                    <ChatBubbleLeftIcon className="absolute bottom-4 right-4 h-12 w-12 text-primary/15 dark:text-primary/30" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold border-2 border-primary/20">
                            {shoutout.from.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{shoutout.from}</p>
                            <p className="text-xs text-muted-foreground">{shoutout.position} at Deloitte</p>
                          </div>
                        </div>
                        <a 
                          href={shoutout.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
                          data-testid={`linkedin-${shoutout.from.split(' ')[0].toLowerCase()}`}
                        >
                          <LinkedInIcon className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <p className="text-sm leading-relaxed text-foreground/85 mb-2">
                        {shoutout.message}
                      </p>
                      <p className="text-xs text-muted-foreground/70 text-right">{shoutout.date}</p>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {shoutouts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === (currentSlide - 1 + totalReal) % totalReal 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
