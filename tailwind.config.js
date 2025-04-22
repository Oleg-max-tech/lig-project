// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseDark: "#1a1a1a",
        red: "#FF0000",
      },
      maxWidth: {
        266: "1064px",
        100: "400px",
      },
    },
  },
  plugins: [],
};
