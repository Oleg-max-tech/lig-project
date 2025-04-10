// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
      },
      spacing: {
        480: "1920px", // для ширини і висоти
        125: "500px", // для висоти та інших відступів
      },
      maxWidth: {
        480: "1920px", // для ширини
      },
      maxHeight: {
        125: "500px", // для висоти
      },
    },
  },
  plugins: [],
};
