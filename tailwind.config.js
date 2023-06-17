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
        secondary: "#6f5CF1",
        info: "#317C82",
      },
    },
  },
  plugins: [],
};
