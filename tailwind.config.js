/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize : {
      xxs: '10px',
      semixs: '11px',
      small: '12px'
    },
    extend: {
      brightness: {},
      colors: {},
    },
  },
  plugins: [],
};
