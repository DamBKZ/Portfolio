import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCarousel() {
	const { t } = useLanguage();

	const introductionParagraphs = t("projects.introduction").split("\n\n");

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="max-w-4xl mx-auto px-4">
			<h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
				{t("projects.title")}
			</h2>
			<section className="text-gray-600 dark:text-gray-300 text-justify mb-12 max-w-3xl mx-auto">
				{introductionParagraphs.map((paragraph) => (
					<p key={paragraph.slice(0, 20)} className="mb-4">
						{paragraph}
					</p>
				))}
			</section>
			<Slider {...settings}>
				{projects.map((project) => (
					<section key={project.id} className="px-2">
						<section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="block relative group"
							>
								<section className="w-full h-64 flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-gray-700">
									<img
										src={project.image}
										alt={project.title}
										className="w-auto h-full object-contain"
									/>
								</section>
								<section className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
									<span className="text-white text-lg font-semibold">
										Voir sur GitHub
									</span>
								</section>
							</a>
							<section className="p-6">
								<h3 className="text-xl font-bold mb-2 dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{project.description}
								</p>
								<section className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</section>
							</section>
						</section>
					</section>
				))}
			</Slider>
		</section>
	);
}
