import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FE3EB4",
          yellow: "#FFE71A",
          green: "#44D62C",
          dark: "#000000",
          card: "#111111",
          border: "#222222",
        },
      },
      fontFamily: {
        sans: ["National-Regular", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["National-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
