/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use the `class` strategy so adding/removing the `dark` class on <html>
  // will toggle dark styles at runtime.
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
