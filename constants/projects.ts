export type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  logsUrl?: string;
};

export const projects: Project[] = [
  {
    title: "GrandLine",
    description: "Anime Streaming Platform",
    longDescription:
      "An anime streaming platform showcasing advanced React patterns, server-side rendering, and real-time features.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "Swiper.js"],
    highlights: [
      "Server Components with Next.js App Router",
      "Custom HLS video player with adaptive streaming",
      "Real-time search with debouncing",
      "Continuous deployment with Vercel",
    ],
    githubUrl: "https://github.com/nisheet-n/grandline",
    liveUrl: "https://thegrandline.vercel.app/anime",
  },
  {
    title: "Converslaytion",
    description: "Slayyy your next interview with Converslaytion",
    longDescription:
      "AI-powered mock interviews with personalized feedback, voice-based conversations, and resume-aware question generation.",
    technologies: ["Next.js", "React", "TailwindCSS", "Firebase", "VAPI", "PWA"],
    highlights: [
      "Voice-based interviews with real-time AI conversation",
      "Personalized questions based on role, skills, and experience",
      "Detailed feedback reports with actionable improvements",
      "Resume upload with auto-detected skills and suggested role",
    ],
    githubUrl: "https://github.com/nisheet-n/converslaytion",
    liveUrl: "https://converslaytion.vercel.app/",
  },
  {
    title: "Paris Olympics 2024 Dashboard",
    description: "Data Analytics Dashboard",
    longDescription:
      "An interactive analytics dashboard visualizing Paris Olympics 2024 data with comprehensive insights on events, athletes, and medal standings.",
    technologies: ["Databricks", "Tableau", "Python", "PySpark", "SQL"],
    highlights: [
      "Built data pipelines in Databricks for ETL processing",
      "Created interactive Tableau dashboards with drill-down capabilities",
      "Visualized medal counts, athlete performance, and country statistics",
      "Real-time data refresh with optimized query performance",
    ],
    liveUrl: "https://public.tableau.com/views/ParisOlympic2024-WinningForAnotherFlag/Overview",
    logsUrl: "/Paris_Olympic_Data_Preparation.html",
  },
  {
    title: "Muso",
    description: "Free Music Anywhere",
    longDescription:
      "A lightweight music streaming web app with playlist support, offline caching, and a responsive player UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "YT Music"],
    highlights: [
      "Responsive music player with playlist management",
      "Offline caching using Service Workers",
      "Seamless playback with background audio controls",
      "Adaptive layout optimized for mobile",
    ],
    liveUrl: "https://playmuso.vercel.app/",
    githubUrl: "https://github.com/nisheet-n/muso",
  },
];
