/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redColor: "#F27457",
        darkColor: "#272626",
        bgColor: "#192626",
        greenColor: "#0D5051",
        purpleColor: "#6C5AD4",
      },
    },
  },
  plugins: [],
};
