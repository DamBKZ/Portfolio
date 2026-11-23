import { Link, animateScroll } from "react-scroll";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// Hauteur du header fixe, utilisée pour décaler le défilement vers les sections.
export const HEADER_OFFSET = -72;

const sections = ["about", "projects", "contact"] as const;

export default function Header() {
	const { t, language, toggleLanguage } = useLanguage();
	const { darkMode, toggleDarkMode } = useTheme();

	return (
		<header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
				<button
					type="button"
					onClick={() => animateScroll.scrollToTop({ duration: 500 })}
					className="flex items-center gap-2 font-bold dark:text-white"
				>
					<img src="/Logo.png" alt="" className="w-8 h-8" />
					<span className="hidden sm:inline">Damien Baczkiewicz</span>
				</button>

				<nav className="flex items-center gap-3 sm:gap-6">
					{sections.map((section) => (
						<Link
							key={section}
							to={section}
							spy={true}
							smooth={true}
							offset={HEADER_OFFSET}
							duration={500}
							activeClass="text-blue-600 dark:text-blue-400"
							className="cursor-pointer text-sm sm:text-base hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
						>
							{t(section)}
						</Link>
					))}

					<button
						type="button"
						onClick={toggleDarkMode}
						aria-label={t("theme.toggle")}
						title={t("theme.toggle")}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
					>
						{darkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>

					<button
						type="button"
						onClick={toggleLanguage}
						aria-label={t("language.toggle")}
						title={t("language.toggle")}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white flex items-center gap-1 text-sm font-medium"
					>
						<Languages size={20} />
						<span className="uppercase">{language === "fr" ? "en" : "fr"}</span>
					</button>
				</nav>
			</div>
		</header>
	);
}
