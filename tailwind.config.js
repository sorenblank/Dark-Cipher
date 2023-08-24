/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.vue", "./src/**/*.js, ./src/**/*.jsx, ./src/**/*.ts, ./src/**/*.css, ./src/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
 },
 mode: "jit" 
}

