import { createContext, useContext, useState, useEffect } from "react";
import type { ThemeContextType, ProviderProps } from "../lib/definitions";
import { readPreference, savePreference } from "../lib/storage";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): boolean {
	const saved = readPreference("darkMode");
	if (saved !== null) return saved === "true";
	// Pas de choix enregistré : on suit le réglage du système.
	return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export function ThemeProvider({ children }: ProviderProps) {
	const [darkMode, setDarkMode] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((current) => {
			savePreference("darkMode", String(!current));
			return !current;
		});
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
