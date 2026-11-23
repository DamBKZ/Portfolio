import { useLanguage } from "../context/LanguageContext";

export default function About() {
	const { t } = useLanguage();

	const descriptionParagraphs = t("about.description").split("\n\n");

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
				{t("about.title")}
			</h2>
			{descriptionParagraphs.map((paragraph, index) => (
				<p
					// Le texte est statique : l'index est une clé suffisante ici.
					key={index}
					className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed text-justify hyphens-auto"
				>
					{paragraph}
				</p>
			))}
		</>
	);
}
