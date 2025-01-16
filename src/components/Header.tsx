import { Link } from "react-scroll";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import TechStack from "./TechStack";

export default function Header() {
	const { t, toggleLanguage } = useLanguage();
	const { darkMode, toggleDarkMode } = useTheme();

	return (
		<header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
			<section className="container mx-auto px-4 py-6">
				<section className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
					<section className="justify-self-center md:justify-self-start">
						<TechStack />
					</section>

					<section className="flex flex-col items-center text-center">
						<img
							src="/images/Profile.jpg"
							alt="Damien Baczkiewicz"
							className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover border-4 border-blue-500 dark:border-blue-400 shadow-lg"
						/>
						<h1 className="text-2xl md:text-3xl font-bold dark:text-white mb-1">
							DAMIEN BACZKIEWICZ
						</h1>
						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
							{t("developer")}
						</p>
					</section>

					<nav className="flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-6">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-250}
							duration={500}
							className="cursor-pointer text-sm md:text-base hover:text-blue-600 dark:text-white"
						>
							{t("about")}
						</Link>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-300}
							duration={500}
							className="cursor-pointer text-sm md:text-base hover:text-blue-600 dark:text-white"
						>
							{t("projects")}
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-250}
							duration={500}
							className="cursor-pointer text-sm md:text-base hover:text-blue-600 dark:text-white"
						>
							{t("contact")}
						</Link>

						<button
							type="button"
							onClick={toggleDarkMode}
							className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							{darkMode ? <Sun className="text-white" /> : <Moon />}
						</button>

						<button
							type="button"
							onClick={toggleLanguage}
							className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							<Languages className={darkMode ? "text-white" : ""} />
						</button>
					</nav>
				</section>
			</section>
		</header>
	);
}
