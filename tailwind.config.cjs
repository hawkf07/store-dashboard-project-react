/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,css,html}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui:{
    themes:["light"]
  }
};
