export interface educationProps {
	school: string;
	degree: string;
	location: string;
	cgpa?: string;
	achievements: string[];
}

export interface workExperienceProps {
	position: string;
	company: string;
	location: string;
	isWorking: boolean;
	startDate: string;
	endDate?: string;
	skills: string[];
	achievements: string[];
}

export interface projectProps {
	name: string;
	description: string;
	link?: string;
	githubLink: string;
	techStack: string[];
	features: string[];
	image?: string;
}
