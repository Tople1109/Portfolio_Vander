/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind which files to scan for utility classes
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // Add the plugin here
  plugins: [require("@tailwindcss/aspect-ratio")],
};
