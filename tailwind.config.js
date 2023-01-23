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
  // important: true,
  // corePlugins: {
  //   preflight: false,
  // },
};
