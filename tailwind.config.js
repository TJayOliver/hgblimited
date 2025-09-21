/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "300px" }, // ≤300px
        sm: { min: "301px", max: "479px" }, // 301–479px
        md: "480px", // ≥480px
        lg: "976px",
        xl: "1440px",
        xxl: "1609px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // make Roboto the default “sans”
      },
    },
  },
};
