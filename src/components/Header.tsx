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
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-3 items-center">
					<div className="justify-self-start">
						<TechStack />
					</div>

					<div className="justify-self-center flex flex-col items-center">
						<img
							src="/src/images/profile.jpg"
							alt="Damien Baczkiewicz"
							className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-500 dark:border-blue-400 shadow-lg"
						/>
						<h1 className="text-3xl font-bold dark:text-white mb-2">
							DAMIEN BACZKIEWICZ
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							{t("developer")}
						</p>
					</div>

					<nav className="justify-self-end flex items-center space-x-6">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-250}
							duration={500}
							className="cursor-pointer hover:text-blue-600 dark:text-white"
						>
							{t("about")}
						</Link>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-300}
							duration={500}
							className="cursor-pointer hover:text-blue-600 dark:text-white"
						>
							{t("projects")}
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-250}
							duration={500}
							className="cursor-pointer hover:text-blue-600 dark:text-white"
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
				</div>
			</div>
		</header>
	);
}
