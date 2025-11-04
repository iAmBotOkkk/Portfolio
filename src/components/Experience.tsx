import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'NRL',
    position: 'Software Developer Intern',
    period: '2024',
    description: 'Developed a feedback system named S.A.T.U.R.N of their existing  Assest management & call logging system. ',
    achievements: [
      'It helps their engineers to get a comprehensive feedback.',
      'It helps in improving their efficiency',
      
    ],
  },
 
];

export const Experience = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center animate-fade-in">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
