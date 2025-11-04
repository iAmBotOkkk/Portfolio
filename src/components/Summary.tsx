export const Summary = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white animate-fade-in">
          About Me
        </h2>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
          <p>
            Passionate Full Stack Developer building scalable web applications.
            Specialized in React, TypeScript, and Node.js with a strong focus on creating exceptional user experiences.
          </p>
          <p>
            I love solving complex problems and turning ideas into elegant, efficient solutions.
            When I'm not coding, you'll find me having coffee
          </p>
        </div>
      </div>
    </section>
  );
};
