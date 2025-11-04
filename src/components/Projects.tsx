import { Github } from 'lucide-react';

const projects = [
  {
    title: 'SkillFitAI',
    description: 'SkillfitAi is an open-source, AI-powered system designed to match a users resume or CV with relevant job listings from a constantly updated database. By extracting key skills from your document, it provides job suggestions along with an accuracy percentage to indicate the quality of the match.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/iAmBotOkkk/SkillFitAI',
  },
  {
    title: 'StreamChamp',
    description: '',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-purple-500 to-pink-500',
  },
 
];

export const Projects = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-linear-to-r ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
