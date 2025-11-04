import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Summary />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;