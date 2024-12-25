import { projects } from "@/constants/projects";
import { MdPushPin } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

export default function Projects() {
	return (
		<section className="space-y-8">
			<h2 className="font-rubicDoodle text-2xl text-text [text-shadow:_0_0_1px_currentColor] bg-white w-fit bg-opacity-75">Projects</h2>

			{projects.map((project) => (
				<div
					key={project.name}
					className="relative bg-white rounded-lg p-4 pl-4 rotate-[10deg] shadow-md hover:rotate-0 transition-transform origin-top-left group"
				>
					<div className="absolute -top-2 left-2 -translate-x-1/2 z-10 rotate-0 group-hover:rotate-[10deg] transition-transform">
						<MdPushPin className="w-8 h-8 text-black-800" />
					</div>

					<div className="flex justify-between items-start">
						<div>
							<h3 className="text-xl font-semibold text-text font-rubicDoodle">
								{project.name}
							</h3>
							<p className="text-lg font-comicNue text-text font-bold">{project.description}</p>

						</div>

						<div className="flex flex-col gap-2 items-end">
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-text hover:opacity-70"
							>
								<VscGithub className="w-6 h-6" />
							</a>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
								rel="noopener noreferrer"
								className="text-text hover:opacity-75 text-sm w-16"
							>
									View Live
								</a>
							)}
						</div>
					</div>

					<ul className="mt-4 list-inside space-y-2">
						{project.features.map((feature, index) => (
							<li key={index} className="text-text font-comicNue">
								{feature}
							</li>
						))}
					</ul>

					<div className="mt-4 flex flex-wrap gap-2">
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 text-sm bg-text text-background rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			))}
		</section>
	)
}