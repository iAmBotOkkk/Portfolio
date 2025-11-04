import { Code2, Database, Globe,  Server, } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },

 

  {
    category: 'Other',
    icon: Code2,
    skills: [ 'git&github', 'WebSockets', 'tanstackQuery','zustand', 'UI/UX'],
  },
];

export const TechStack = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center animate-fade-in">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <tech.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {tech.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
