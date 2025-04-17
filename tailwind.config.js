// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      spacing: {
        300: "1200",
        74: "300px",
        50: "200px",
      },
    },
  },
  plugins: [],
};
