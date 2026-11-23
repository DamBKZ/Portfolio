import type { FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, FileDown, Mail } from "lucide-react";

const EMAIL = "baczkiewicz.damien@gmail.com";

const inputClass =
	"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white";

export default function ContactForm() {
	const { t } = useLanguage();

	// Un formulaire en action="mailto:" + POST n'est pas fiable selon les navigateurs.
	// On construit nous-mêmes le lien mailto avec un objet et un corps pré-remplis.
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "");
		const email = String(data.get("email") ?? "");
		const message = String(data.get("message") ?? "");

		const subject = `${t("contact.subject")} – ${name}`;
		const body = `${message}\n\n${name}\n${email}`;

		window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};

	return (
		<div className="max-w-2xl mx-auto">
			<h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
				{t("contact.title")}
			</h2>
			<p className="text-gray-600 dark:text-gray-300 text-center mb-8">
				{t("contact.intro")}
			</p>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium dark:text-white">
						{t("contact.name")}
					</label>
					<input id="name" type="text" name="name" autoComplete="name" required className={inputClass} />
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium dark:text-white">
						{t("contact.email")}
					</label>
					<input id="email" type="email" name="email" autoComplete="email" required className={inputClass} />
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium dark:text-white">
						{t("contact.message")}
					</label>
					<textarea id="message" name="message" rows={5} required className={inputClass} />
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
				>
					{t("contact.send")}
				</button>
			</form>

			<ul className="mt-12 flex justify-center gap-9">
				<li>
					<a href={`mailto:${EMAIL}`} aria-label="Email" title={EMAIL} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
						<Mail size={24} />
					</a>
				</li>
				<li>
					<a href="https://github.com/DamBKZ" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
						<Github size={24} />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/dambkz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
						<Linkedin size={24} />
					</a>
				</li>
				<li>
					<a
						href="/CV-Damien-Baczkiewicz.pdf"
						download="CV Damien Baczkiewicz.pdf"
						aria-label={t("contact.cv")}
						title={t("contact.cv")}
						className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>
						<FileDown size={24} />
					</a>
				</li>
			</ul>
		</div>
	);
}
