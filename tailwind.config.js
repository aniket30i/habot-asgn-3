/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-theme": "#EDE6DC",
      },
      screens: {
        xxs: "300px",
        xs: "375px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
