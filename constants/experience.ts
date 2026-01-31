export type ExperienceItem = {
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
};

export const experiences: ExperienceItem[] = [
  {
    company: "Deloitte",
    role: "Senior Assistant Data Analyst",
    duration: "May 2025 – Dec 2025",
    location: "Hyderabad, India",
    type: "full-time",
    impact: "Promoted within 2 years",
    achievements: [
      "Built scalable PySpark pipelines in Databricks to process 10B+ records for 50+ enterprise clients",
      "Delivered audit readiness via journal entry testing and 1M+ financial record reconciliations",
      "Automated FX revaluations and reconciliations using Python/SQL, saving 80+ manual hours",
      "Created 15+ Tableau/Power BI dashboards to enable real-time fraud analytics and anomaly detection",
      "Led 5+ clinical workstreams developing predictive models to optimize patient outcomes",
      "Mentored 3 analysts and streamlined review cycles to improve delivery speed and accuracy",
    ],
    technologies: ["PySpark", "Databricks", "SQL", "Python", "Power BI", "Tableau", "Alteryx"],
    color: "green",
  },
  {
    company: "Deloitte",
    role: "Data Analyst",
    duration: "Jan 2023 – May 2025",
    location: "Hyderabad, India",
    type: "full-time",
    impact: "Converted from intern to full-time",
    achievements: [
      "Migrated legacy SAS workflows to Spark-native Python achieving a 50% runtime reduction",
      "Built scalable SQL/PySpark pipelines to clean and process 100M+ records for reporting",
      "Implemented Python data quality checks to eliminate 99% of pre-submission formatting and null errors",
      "Developed 10+ ESG dashboards and performed strategic EDA to surface sustainability insights",
    ],
    technologies: ["SAS", "SQL", "Python", "Databricks", "MS Excel"],
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
