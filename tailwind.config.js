// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
      },
      maxWidth: { 480: "1920px" },
      maxHeight: { 125: "500px" },
    },
  },
  plugins: [],
};
