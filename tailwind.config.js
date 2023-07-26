/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dodgerblue: "#3b77d7",
        "neutral-5o": "#c2c2c2",
        "neutral-7o": "#757575",
        "dark-blue-filter": "rgba(7, 10, 30, 0.9)",
        "dark-blue-suppressed": "#131f3e",
        "light-grey-secondary": "#898f9e",
        "standard-black": "#000",
        "standard-white": "#fff",
        "arcana-blue": "#4ddcff",
      },
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "public-sans": "'Public Sans'",
        "button-type-1": "Inter",
        "abhaya-libre": "'Abhaya Libre'",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      "9xl": "28px",
      xs: "12px",
      "45xl": "64px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "1100px",
      },
      sm: {
        max: "645px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
