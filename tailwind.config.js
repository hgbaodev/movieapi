/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-seri"],
      },
      colors: {
        primary: "#F62682",
      },
    },
  },
  plugins: [],
};
