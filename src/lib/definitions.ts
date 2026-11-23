export type Language = "fr" | "en";

export type Project = {
	id: number;
	title: string;
	description: Record<Language, string>;
	image?: string;
	technologies: string[];
	link?: string;
	github?: string;
};

export type Technology = {
	name: string;
	icon: string;
	// Icône noire : on l'inverse en mode sombre pour qu'elle reste visible.
	invertOnDark?: boolean;
};

export type ThemeContextType = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

export type ProviderProps = {
	children: React.ReactNode;
};

export type LanguageContextType = {
	language: Language;
	toggleLanguage: () => void;
	t: (key: string) => string;
};

export type Translations = {
	[key: string]: string;
};
