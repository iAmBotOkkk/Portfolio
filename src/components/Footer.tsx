import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="px-6 py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Bishal
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};
