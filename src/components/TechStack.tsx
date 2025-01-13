import { technologies } from "../data/technologies";

export default function TechStack() {
	const firstRow = technologies.slice(0, 5);
	const secondRow = technologies.slice(5);

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex items-center space-x-6">
				{firstRow.map((tech) => (
					<img
						key={tech.name}
						src={tech.icon}
						alt={tech.name}
						title={tech.name}
						className="w-8 h-8 transition-transform hover:scale-110"
					/>
				))}
			</div>
			<div className="flex items-center space-x-6">
				{secondRow.map((tech) => (
					<img
						key={tech.name}
						src={tech.icon}
						alt={tech.name}
						title={tech.name}
						className="w-8 h-8 transition-transform hover:scale-110"
					/>
				))}
			</div>
		</div>
	);
}
