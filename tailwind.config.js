/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "text-color": "#971C25",
      },
    },
    fontSize: {
      h1: "100px",
      "h1-tablet": "80px",
      "h1-mobile": "40px",
      h2: "75px",
      "h2-mobile": "50px",
      h3: "25px",
      "h3-mobile": "18px",
      p: "16px",
      "p-mobile": "14px",
    },
  },
  plugins: [],
};
