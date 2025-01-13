import { createContext, useContext, useState } from "react";
import type {
	LanguageContextType,
	ThemeProviderProps,
	Translations,
} from "../lib/definitions";
import frTranslations from "../data/translations/fr.json";
import enTranslations from "../data/translations/en.json";

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: ThemeProviderProps) {
	const [language, setLanguage] = useState<"fr" | "en">("fr");

	const translations: Record<"fr" | "en", Translations> = {
		fr: frTranslations,
		en: enTranslations,
	};

	const toggleLanguage = () => {
		setLanguage(language === "fr" ? "en" : "fr");
	};

	const t = (key: string): string => {
		return translations[language][key] || key;
	};

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
