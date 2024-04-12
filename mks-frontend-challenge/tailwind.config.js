/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        custom: "31px 22px",
      },
    },

    colors: {
      blue: "#0F52BA",
      white: "#FFFFFF",
      darkGray: "#373737",
      black: "#000000",
      lightGray: "#2C2C2C",
    },
  },
  plugins: [],
};
