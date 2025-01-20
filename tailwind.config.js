/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", // we can manual trigger dark mode changed - 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        "gradient-y": "gradientY 3s ease-in-out infinite",
      },
      keyframes: {
        gradientY: {
          "0%": {
            backgrounPosition: "0 100%",
          },
          "100%": {
            backgroundPosition: "0 0",
          },
        },
      },
    },
  },
  plugins: [],
};
