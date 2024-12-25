import { educations } from "@/constants/education";

export default function Education() {
	return (
		<section className="bg-white rounded-lg p-6 shadow-md">
			<h2 className="font-rubicDoodle text-xl font-bold text-text mb-4">Education</h2>
			
			{educations.map((education) => (
				<div 
					key={education.degree + education.school} 
					className="mb-6 last:mb-0 font-comicNue"
				>
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
						<h3 className="font-semibold">
							{education.school}
						</h3>
						<div className="flex flex-col gap-2 text-text">
							<p className="">{education.degree}</p>
							<p className="text-black/75">{education.location}</p>
						</div>
					</div>
					
					{education.cgpa && (
						<p className="mt-2 text-gray-600">
							CGPA: {education.cgpa}
						</p>
					)}
					
					{education.achievements.length > 0 && (
						<ul className="mt-3 list-disc list-inside space-y-1.5">
							{education.achievements.map((achievement, index) => (
								<li key={index} className="text-gray-700">
									{achievement}
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</section>
	)
}