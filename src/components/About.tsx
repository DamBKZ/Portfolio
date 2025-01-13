import { useLanguage } from "../context/LanguageContext";

export default function About() {
	const { t } = useLanguage();

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
				{t("about.title")}
			</h2>
			<p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-justify">
				{t("about.description")}
			</p>
		</>
	);
}
