/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#CF161C",
        200: "#980C10",
      },
      secondary: "#FFFAF0",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#95989A",
      textColor: "#333333",
      transparent: "transparent",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        abril: ["Abril Fatface", "latin"],
      }
    },
  },
  plugins: [],
};
