/** @type {import('tailwindcss').Config} */
const tailwindConfig = require("ui/tailwind.base.config");

module.exports = {
  ...tailwindConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      backgroundImage: {
        hero: "https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg",
      },
    },
  },
};
