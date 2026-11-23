import type { Project } from "../lib/definitions";

// Du plus récent au plus ancien : le premier projet est le plus visible.
export const projects: Project[] = [
	{
		id: 9,
		title: "CESIZEN",
		description: {
			fr: "Application de bien-être et de gestion du stress réalisée au CESI : API Spring Boot sécurisée par JWT, front Angular, le tout conteneurisé avec Docker, avec une CI GitHub Actions et une supervision Prometheus / Grafana. M'a appris à mener une application complète, du code jusqu'au déploiement.",
			en: "Well-being and stress management app built at CESI: a Spring Boot API secured with JWT, an Angular front end, all containerised with Docker, with GitHub Actions CI and Prometheus / Grafana monitoring. Taught me to carry a full application from code to deployment.",
		},
		image: "/images/CESIZEN.webp",
		technologies: ["Java", "Spring Boot", "Angular", "MariaDB", "Docker"],
		github: "https://github.com/DamBKZ/CESIZEN",
	},
	{
		id: 8,
		title: "Intra_Sense",
		description: {
			fr: "Projet final du titre de développeur web, réalisé en équipe : une application de gestion et de suivi des prises de décision. M'a appris à organiser le travail à plusieurs avec Git et à concevoir une base de données relationnelle.",
			en: "Final project for my web developer certification, built as a team: an app to manage and track decision-making. Taught me to organise teamwork with Git and to design a relational database.",
		},
		image: "/images/IntraSense.webp",
		technologies: ["React", "TypeScript", "Tailwind", "Express", "MySQL"],
		github: "https://github.com/AmandineGrardLaurent/Intra_Sense",
	},
	{
		id: 7,
		title: "Todo List",
		description: {
			fr: "Réalisée en 72 h pour apprendre seul Next.js et Drizzle ORM, avec des tests Vitest.",
			en: "Built in 72 hours to teach myself Next.js and Drizzle ORM, with Vitest tests.",
		},
		image: "/images/TodoList.png",
		technologies: ["Next.js", "TypeScript", "Drizzle", "MySQL", "Tailwind"],
		github: "https://github.com/DamBKZ/TodoList",
	},
	{
		id: 6,
		title: "Reunite & Resolve",
		description: {
			fr: "Projet sur le thème post-apocalyptique, réalisé en 30 h lors d'une protojam : l'occasion d'apprendre à livrer quelque chose qui fonctionne, vite.",
			en: "Post-apocalyptic themed project, built in 30 hours during a protojam: a lesson in shipping something that works, fast.",
		},
		image: "/images/Protojam.webp",
		technologies: ["React", "TypeScript", "CSS", "Express"],
		github: "https://github.com/DamBKZ/Reunite-Resolve",
	},
	{
		id: 5,
		title: "Cartocodile",
		description: {
			fr: "Un jeu pour tester ses connaissances en géographie, mon premier projet complet avec un front React et un serveur Express.",
			en: "A game to test your geography knowledge, my first full project with a React front end and an Express server.",
		},
		image: "/images/Cartocodile.webp",
		technologies: ["React", "TypeScript", "Tailwind", "Express"],
		github: "https://github.com/DamBKZ/Projet2-Cartocodile",
		link: "https://projet2-cartocodile-client.vercel.app",
	},
	{
		id: 3,
		title: "My Lego sets",
		description: {
			fr: "Une galerie de mes sets Lego préférés quand j'étais petit.",
			en: "A gallery of my favourite Lego sets from when I was a kid.",
		},
		image: "/images/Lego.webp",
		technologies: ["React", "TypeScript"],
		github: "https://github.com/DamBKZ/My-lego-sets",
		link: "https://my-lego-sets.vercel.app",
	},
];
