// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      height: {
        200: "800px",
        screenMobile: "600px",
        screenTablet: "700px",
      },
      width: {
        infoBox: "500px",
      },
      fontSize: {
        heroSmall: "3rem",
        heroMedium: "5rem",
        heroLarge: "6rem",
        heroHuge: "8rem",
        subtitle: "1.25rem",
        paragraph: "0.875rem",
      },
    },
  },
  plugins: [],
};
