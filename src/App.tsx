import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
					<Header />

					<main className="pt-16 px-4">
						<section className="py-16 md:py-24">
							<div className="container mx-auto">
								<Hero />
							</div>
						</section>

						<section id="about" className="py-16">
							<div className="container mx-auto">
								<About />
							</div>
						</section>

						<section id="projects" className="py-16">
							<div className="container mx-auto">
								<Projects />
							</div>
						</section>

						<section id="contact" className="py-16 pb-24">
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
