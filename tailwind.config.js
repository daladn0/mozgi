/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-backwards": "spin-backwards 2s linear infinite",
      },
      keyframes: {
        "spin-backwards": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      colors: {
        primary: "#373737",
        yellow: "#FFCB46",
      },
    },
  },
  plugins: [],
};
