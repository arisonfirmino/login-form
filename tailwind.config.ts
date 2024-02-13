import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#37465b",
        "dark-bg": "#212b38",
        "cyan": "#5affe7",
        "purple": "#726eff",
      },
      boxShadow: {
        "cyan-shadow": "3px 3px 5px #5affe7",
      },
    },
  },
  plugins: [],
};
export default config;
