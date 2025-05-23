/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        apollo_primary: '#0047AB', // Example Apollo blue
        apollo_secondary: '#FF6F61', // Example Apollo accent
      }
    },
  },
  plugins: [],
};