module.exports = {
  content: ['./index.html', './views/index.ejs', './public/main.js',],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
