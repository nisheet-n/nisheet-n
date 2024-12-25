'use client'

import { workExperience } from "@/constants/workExperience";
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

export default function Experience() {
	const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

	const toggleExpand = (id: string) => {
		setExpandedItems(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	return (
		<section className="space-y-8">
			<h2 className="font-rubicDoodle text-2xl text-text [text-shadow:_0_0_1px_currentColor] bg-white w-fit bg-opacity-75">Experience</h2>
			
			{workExperience.map((experience) => (
				<div key={experience.company + experience.position} className="bg-white rounded-lg p-4 pl-4 shadow-md">
					<div className="flex justify-between items-start">
						<div>
							<h3 className="text-xl font-comicNue text-text font-bold">
								{experience.position}
							</h3>
							<p className="text-lg font-semibold text-text font-rubicDoodle">{experience.company}</p>
						</div>
						<div className="text-text text-sm font-comicNue">
							{experience.startDate} - {experience.endDate || 'Present'}
						</div>
					</div>
					
					{(experience.achievements.length > 0 || experience.skills.length > 0) && (
						<>
							<button 
								onClick={() => toggleExpand(experience.company + experience.position)}
								className="flex items-center ml-auto mr-0"
							>
								<FiChevronDown 
									className={`w-5 h-5 transition-transform ${
										expandedItems[experience.company + experience.position] ? 'rotate-180' : ''
									}`}
								/>
							</button>
							
							<div className={`transition-all duration-300 overflow-hidden ${
								expandedItems[experience.company + experience.position] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
							}`}>
								{experience.achievements.length > 0 && (
									<ul className="mt-4 list-inside space-y-2">
										{experience.achievements.map((achievement, index) => (
											<li key={index} className="text-text font-comicNue">
												{achievement}
											</li>
										))}
									</ul>
								)}
								
								{experience.skills.length > 0 && (
									<div className="mt-4 flex flex-wrap gap-2">
										{experience.skills.map((skill) => (
											<span 
												key={skill}
												className="px-3 py-1 text-sm bg-text text-background rounded-full"
											>
												{skill}
											</span>
										))}
									</div>
								)}
							</div>
						</>
					)}
				</div>
				))}
		</section>
	)
}