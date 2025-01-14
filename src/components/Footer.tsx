import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="bg-gray-100 dark:bg-gray-900 py-6">
			<section className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
				<p>Copyright © 2025 | Damien Baczkiewicz | {t("footer.rights")}</p>
			</section>
		</footer>
	);
}
