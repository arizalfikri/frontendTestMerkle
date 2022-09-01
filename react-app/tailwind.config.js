module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#54BAB9",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        gray: {
          DEFAULT: "#696969",
        },
      },
      width: {
        base: "480px",
      },
      maxWidth: {
        480: "480px",
      },
      dropShadow: {
        base: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        "1xl": "0px 2px 5px -1px rgba(0,0,0,0.71)",
      },
      opacity: {
        2: "0.02",
      },
    },
  },
  plugins: [],
};
