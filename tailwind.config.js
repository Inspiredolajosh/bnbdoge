module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 400: "#e6f85e" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        white: {
          A700_7f: "#ffffff7f",
          A700_33: "#ffffff33",
          A700_19: "#ffffff19",
          A700: "#ffffff",
        },
        blue_gray: { 200: "#bdbfd4" },
        gray: { 900: "#191a28", "900_d8": "#1a1b2fd8" },
      },
      fontFamily: { spacegrotesk: "Space Grotesk" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
