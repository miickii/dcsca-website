/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#003366',
        'sky-blue': '#7FDBFF',
        'crimson-red': '#DC143C',
        'warm-gray': '#E5E7EB',
      },
      backgroundImage: theme => ({
        'fast-gradient': 'linear-gradient(to bottom, white, #F5F5DC 30%)',
      })
    },
  },
  plugins: [],
};
