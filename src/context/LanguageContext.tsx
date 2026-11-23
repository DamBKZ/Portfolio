import { createContext, useContext, useEffect, useState } from "react";
import type {
	Language,
	LanguageContextType,
	ProviderProps,
	Translations,
} from "../lib/definitions";
import { readPreference, savePreference } from "../lib/storage";
import frTranslations from "../data/translations/fr.json";
import enTranslations from "../data/translations/en.json";

const translations: Record<Language, Translations> = {
	fr: frTranslations,
	en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

function getInitialLanguage(): Language {
	return readPreference("language") === "en" ? "en" : "fr";
}

export function LanguageProvider({ children }: ProviderProps) {
	const [language, setLanguage] = useState<Language>(getInitialLanguage);

	useEffect(() => {
		document.documentElement.lang = language;
		savePreference("language", language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((current) => (current === "fr" ? "en" : "fr"));
	};

	const t = (key: string): string => translations[language][key] ?? key;

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
