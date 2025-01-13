export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
};

export type Technology = {
  name: string;
  icon: string;
};

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type LanguageContextType = {
  language: 'fr' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

export type Translations = {
  [key: string]: string;
};