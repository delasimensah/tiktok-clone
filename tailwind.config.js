/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figTree: ["var(--font-figTree)"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
