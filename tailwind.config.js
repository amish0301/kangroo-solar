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
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      transformOrigin: {
        "rotate-y-180": "rotateY(180deg)",
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
