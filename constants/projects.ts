import { projectProps } from "@/types";

export const projects: projectProps[] = [
	{
		name: "GrandLine - Anime Streaming Platform",
		description: "A modern streaming platform built with Next.js and TypeScript",
		techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
		features: [
			"Developed a streaming platform using Next.js App Router with Server Components",
			"Engineered custom video player with HLS streaming support and integrated dynamic content carousels using Swiper.js",
			"Implemented real-time search with debouncing and loading states using React hooks and Suspense boundaries",
			"Developed reusable UI components with TypeScript interfaces, ensuring type safety and maintainable codebase",
			"Enhanced user experience with optimized image loading, custom fonts, and smooth page transitions",
			"Built consistent layout and theme using Tailwind CSS with custom utility classes and component-based styling",
			"Maintained clean version control with semantic commits and pull request workflow"
		],
		link: "https://thegrandline.vercel.app/anime",
		githubLink: "https://github.com/nisheet-n/grandline"
	},
	{
		name: "Password Generator",
		description: "A secure password generation web application",
		techStack: ["Django", "Python", "JavaScript"],
		features: [
			"Built a web application for generating secure passwords with customizable parameters",
			"Implemented RESTful API endpoints in Django for password generation logic",
			"Created responsive UI with modern design patterns"
		],
		githubLink: "https://github.com/nisheet-n/password-generator"
	}
]

