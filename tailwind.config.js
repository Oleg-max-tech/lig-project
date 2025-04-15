// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        red: "#FF0000",
      },
      maxWidth: {
        266: "1063px",
      },
    },
  },
  plugins: [],
};
