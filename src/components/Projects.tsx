import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
	const { t, language } = useLanguage();

	const introductionParagraphs = t("projects.introduction").split("\n\n");

	return (
		<div className="max-w-6xl mx-auto">
			<h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
				{t("projects.title")}
			</h2>
			<div className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-justify hyphens-auto">
				{introductionParagraphs.map((paragraph, index) => (
					<p key={index} className="mb-4">
						{paragraph}
					</p>
				))}
			</div>

			<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<li key={project.id}>
						<article className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="block relative group"
								aria-label={`${project.title} – ${t("projects.github")}`}
							>
								<div className="w-full h-48 flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-gray-700">
									{project.image ? (
										<img
											src={project.image}
											alt=""
											loading="lazy"
											className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
										/>
									) : (
										// Pas encore de capture : une vignette avec le nom du projet.
										<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800">
											<span className="text-3xl font-bold tracking-wide text-white">
												{project.title}
											</span>
										</div>
									)}
								</div>
								<div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 bg-black/50">
									<Github className="text-white" size={20} />
									<span className="text-white text-lg font-semibold">
										{t("projects.github")}
									</span>
								</div>
							</a>
							<div className="p-6 flex flex-col flex-1">
								<h3 className="text-xl font-bold mb-2 dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
									{project.description[language]}
								</p>
								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="mb-4 inline-flex items-center gap-1 self-start text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
									>
										<ExternalLink size={16} />
										{t("projects.demo")}
									</a>
								)}
								<ul className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<li
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</article>
					</li>
				))}
			</ul>

			<p className="mt-12 text-center">
				<a
					href="https://github.com/DamBKZ?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
				>
					<Github size={18} />
					{t("projects.more")}
				</a>
			</p>
		</div>
	);
}
