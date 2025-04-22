// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      translate: {
        30: "30%",
      },
    },
  },
  plugins: [],
};
