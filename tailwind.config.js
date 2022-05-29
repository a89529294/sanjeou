const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.serif], // default font
        athelas: ["Athelas", "serif"],
        playfair: ["Playfair Display", "serif"],
        notosanstc: ["Noto Sans TC", "sans-serif"],
      },
      colors: {
        "primary-red": "#EA1833",
        primary: "#14256A",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
