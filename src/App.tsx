import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import About from "./components/About";
import ProjectCarousel from "./components/ProjectCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-200 py-5">
					<Header />

					<main className="pt-52 px-4">
						<section id="about" className="min-h-[70vh] py-40">
							<div className="container mx-auto">
								<About />
							</div>
						</section>

						<section id="projects" className="min-h-screen py-0">
							<div className="container mx-auto">
								<ProjectCarousel />
							</div>
						</section>

						<section id="contact" className="min-h-screen py-20">
							<div className="container mx-auto">
								<ContactForm />
							</div>
						</section>
					</main>

					<Footer />
				</div>
			</LanguageProvider>
		</ThemeProvider>
	);
}
