module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./src/components/**/*.res",
    "./src/layouts/**/*.res",
    "./src/*.res",
  ],
  daisyui: {
    styled: true,
    themes: ["halloween"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  purge: {
    content: [
      "./src/components/**/*.res",
      "./src/layouts/**/*.res",
      "./src/*.res",
    ],
  },
};
