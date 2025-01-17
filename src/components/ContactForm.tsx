import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, FileDown } from "lucide-react";

export default function ContactForm() {
	const { t } = useLanguage();

	return (
		<section className="max-w-2xl mx-auto">
			<h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
				{t("contact.title")}
			</h2>
			<form
				action="mailto:baczkiewicz.damien@gmail.com"
				method="POST"
				encType="text/plain"
				className="space-y-6"
			>
				<section>
					<label
						htmlFor="name"
						className="block text-sm font-medium dark:text-white"
					>
						{t("contact.name")}
					</label>
					<input
						id="name"
						type="text"
						name="name"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</section>
				<section>
					<label
						htmlFor="email"
						className="block text-sm font-medium dark:text-white"
					>
						{t("contact.email")}
					</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</section>
				<section>
					<label
						htmlFor="message"
						className="block text-sm font-medium dark:text-white"
					>
						{t("contact.message")}
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</section>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
				>
					{t("contact.send")}
				</button>
			</form>

			<section className="mt-8 flex justify-center space-x-9 pt-10">
				<a
					href="https://github.com/DamBKZ"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
				>
					<Github size={24} />
				</a>
				<a
					href="https://www.linkedin.com/in/dambkz/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
				>
					<Linkedin size={24} />
				</a>
				<a
					href="/CV-Baczkiewicz-Damien-Développeur-Web.pdf"
					download
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					title="Télécharger mon CV"
				>
					<FileDown size={24} />
				</a>
			</section>
		</section>
	);
}
