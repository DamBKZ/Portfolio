import type { Project } from "../lib/definitions";

export const projects: Project[] = [
	{
		id: 1,
		title: "Le Juste Prix - C'est plus, c'est moins",
		description:
			"Petit projet en JS pour deviner un nombre compris entre 1 et 100",
		image: "/images/Juste-prix.png",
		technologies: ["JavaScript"],
		github: "https://github.com/DamBKZ/Le-juste-prix",
	},
	{
		id: 2,
		title: "La machine à café",
		description:
			"Un distributeur de thé ou de café qui fonctionne sans monnaie ;)",
		image: "/images/café.png",
		technologies: ["JavaScript"],
		github: "https://github.com/DamBKZ/Machine-cafe",
	},
	{
		id: 3,
		title: "My Lego sets",
		description: "Voici un aperçu de mes sets Lego préférés étant petit",
		image: "/images/Lego.png",
		technologies: ["React", "TypeScript"],
		github: "https://github.com/DamBKZ/My-lego-sets",
	},
	{
		id: 4,
		title: "Trombinoscope",
		description: "Premier projet de la formation à la Wild Code School",
		image: "/images/P1.png",
		technologies: ["HTML", "CSS", "JavaScript"],
		github: "https://github.com/DamBKZ/Trombinoscope",
	},
	{
		id: 5,
		title: "Cartocodile",
		description: "Projet de jeu de Géographie",
		image: "/images/Cartocodile.png",
		technologies: ["React", "TypeScript", "TailwindCSS", "Express"],
		github: "https://github.com/DamBKZ/Projet2-Cartocodile",
	},
	{
		id: 6,
		title: "Reunite & Resolve",
		description: "Projet post-apocalyptique réalisé en 30 heures",
		image: "/images/Protojam.png",
		technologies: ["React", "TypeScript", "CSS", "Express"],
		github: "https://github.com/DamBKZ/Reunite-Resolve",
	},
	{
		id: 7,
		title: "Todo List",
		description: "Projet réalisé en 72h pour apprendre Next.JS et Drizzle ORM",
		image: "/images/TodoList.png",
		technologies: ["React", "TypeScript", "CSS", "MySQL", "Express"],
		github: "https://github.com/DamBKZ/TodoList",
	},
	{
		id: 8,
		title: "Intra_Sense",
		description:
			"Projet final pour le titre de développeur web, gestion de prise de décisions",
		image: "/images/IntraSense.png",
		technologies: ["React", "TypeScript", "Tailwind", "MySQL", "Express"],
		github: "https://github.com/AmandineGrardLaurent/Intra_Sense",
	},
];
