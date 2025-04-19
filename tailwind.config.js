// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greydark: "#1a1a1a",
      },
      spacing: {
        480: "1920px",
        125: "500px",
      },
    },
  },
  plugins: [],
};
