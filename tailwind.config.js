/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',  // we can manual trigger dark mode changed - 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
