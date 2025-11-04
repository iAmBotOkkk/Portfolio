import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center space-y-6">
          <div className="animate-slide-down">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-4">
              Bishal Barman
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={18} />
              <span>India,Assam</span>
            </div>
          </div>

          <div className="animate-slide-up delay-200 flex gap-4 justify-center">
            <a
              href="https://github.com/iAmBotOkkk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
            >
              <Github className="text-gray-700 dark:text-gray-300" size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bishal-barman-090227299"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="text-gray-700 dark:text-gray-300" size={24} />
            </a>
            <a
              href="mailto:barmanbishal1234@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-110"
            >
              <Mail className="text-gray-700 dark:text-gray-300" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
