import { useLanguage } from "../context/LanguageContext";

export default function About() {
	const { t } = useLanguage();

	const descriptionParagraphs = t("about.description").split("\n\n");

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
				{t("about.title")}
			</h2>
			{descriptionParagraphs.map((paragraph) => (
				<p
					key={paragraph.slice(0, 20)}
					className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-justify mb-4"
				>
					{paragraph}
				</p>
			))}
		</>
	);
}
