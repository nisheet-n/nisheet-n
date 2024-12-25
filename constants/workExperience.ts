import { workExperienceProps } from "@/types";

export const workExperience: workExperienceProps[] = [
	{
		position: "Data Analyst",
		company: "Deloitte US-India",
		location: "India",
		isWorking: true,
		startDate: "Aug 2023",
		skills: ["Python", "PySpark", "Data Processing"],
		achievements: [
			"Built data processing pipelines using Python and PySpark, handling 10+ Billion records, combined over 50+ clients",
			"Improved code maintainability by implementing modern Python practices demonstrating strong Python fundamentals",
			"Collaborated with cross-functional teams to translate business requirements into technical solutions"
		],
	},
	{
		position: "Winter Intern",
		company: "Deloitte US-India",
		location: "India",
		isWorking: false,
		startDate: "Jan 2023",
		endDate: "Mar 2023",
		skills: ["Python", "Code Optimization"],
		achievements: [
			"Modernized legacy codebase by implementing clean code principles, achieving 50% reduction in runtime",
			"Collaborated with senior developers to improve code maintainability and preparing documentation"
		],
	},
	{
		position: "Frontend Developer",
		company: "HighRadius Corporation",
		location: "India",
		isWorking: false,
		startDate: "Jan 2022",
		endDate: "Nov 2022",
		skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
		achievements: [
			"Engineered a responsive dashboard application using Next.js, React.js, and TypeScript in an agile environment",
			"Reduced development time by 40% by creating 15+ reusable UI components",
			"Enhanced website performance through code splitting, lazy loading, and SEO optimization techniques",
			"Built scalable navigation components and integrated with REST APIs for dynamic data fetching"
		],
	}
];
