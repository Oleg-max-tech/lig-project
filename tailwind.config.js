// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        beige: "#e6dcd8",
      },
      spacing: {
        480: "1920px",
        125: "500px",
      },
    },
  },
  plugins: [],
};
