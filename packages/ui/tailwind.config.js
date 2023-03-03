/** @type {import('tailwindcss').Config} */
const tailwindBaseConfig = require('./tailwind.base.config');

module.exports = {
  ...tailwindBaseConfig,
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
}
