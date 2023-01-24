/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe2c55",
        primaryDark: "#ef2a51",
        primaryLight: "#fff3f5",
      },
      fontFamily: {
        figTree: ["var(--font-figTree)"],
      },
    },
  },
  plugins: [],
  important: true,
};
