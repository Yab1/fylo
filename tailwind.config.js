/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonials": "hsl(219, 30%, 18%)",
        "accent-cyan": "hsl(176, 68%, 64%)",
        "accent-blue": "hsl(198, 60%, 50%)",
        "accent-light-red": "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
