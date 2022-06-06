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
        bauhaus: "#404040",
        "white-smoke": "#f5f5f5",
        iron: "#5e5e5e",
        "stonewall-gray": "#c1c1c1",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      gridTemplateColumns: {
        "product-grid": "repeat(auto-fill, minmax(250px, 1fr))",
        "catalog-grid": "repeat(auto-fill, minmax(350px, 1fr))",
        "achievement-grid": "repeat(auto-fill, minmax(500px, 1fr))",
      },
    },
  },
  plugins: [],
};
