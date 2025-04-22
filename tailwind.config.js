export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      spacing: {
        "1/10": "10%",
        0.15: "15%",
        0.25: "25%",
        0.9: "90%",
        125: "500px",
        150: "600px",
        175: "700px",
        200: "800px",
      },
      fontSize: {
        3.5: "14px",
        5: "20px",
        12: "48px",
        20: "80px",
        24: "96px",
        32: "128px",
        132: "132px",
      },
    },
  },
  plugins: [],
};
