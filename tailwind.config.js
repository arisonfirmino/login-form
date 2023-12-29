/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "container-color": "#37465b",
        "bg-color": "#212b38",
        "title-color": "#5affe7",
        "text-color": "#726eff",
      },
      boxShadow: {
        "box-shadow": "3px 3px 5px #5affe7",
      },
    },
  },
  plugins: [],
};
