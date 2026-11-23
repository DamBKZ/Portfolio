import { useLanguage } from "../context/LanguageContext";
import TechStack from "./TechStack";

export default function Hero() {
	const { t } = useLanguage();

	return (
		<div className="flex flex-col items-center text-center">
			<img
				src="/images/Profile.webp"
				alt="Damien Baczkiewicz"
				className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 object-cover border-4 border-blue-500 dark:border-blue-400 shadow-lg"
			/>
			<h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-2">
				Damien Baczkiewicz
			</h1>
			<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3">
				{t("developer")}
			</p>
			<p className="text-base md:text-lg italic text-gray-500 dark:text-gray-400 max-w-xl mb-8">
				{t("hero.tagline")}
			</p>
			<TechStack />
		</div>
	);
}
