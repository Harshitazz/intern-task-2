/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-svg': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221440%22 height=%22449%22%3E%3Cpath fill=%22%23F1F5FE%22 fill-rule=%22evenodd%22 d=%22M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z%22/%3E%3C/svg%3E')",
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'tahiti':'#9ca3af',
        'dblue':'#3c4873',
        'moneycolour':'hsl(227, 35%, 25%)',
        'light':'hsl(224, 65%, 95%)'
      },
      fontSize: {
        'small-size': '8px', // Adjust '2rem' to your desired custom font size
      }
    },
  },
  plugins: [],
}

