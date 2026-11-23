import { technologies } from "../data/technologies";

export default function TechStack() {
	// 16 icônes : 2 lignes de 8 sur grand écran, 4 lignes de 4 sur mobile.
	return (
		<ul className="grid grid-cols-4 sm:grid-cols-8 gap-5 justify-items-center">
			{technologies.map((tech) => (
				<li key={tech.name}>
					<img
						src={tech.icon}
						alt={tech.name}
						title={tech.name}
						className={`w-9 h-9 transition-transform hover:scale-110 ${tech.invertOnDark ? "dark:invert" : ""}`}
					/>
				</li>
			))}
		</ul>
	);
}
