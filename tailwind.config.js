/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        animation: {
            fadeIn: "fadeIn 0.5s ease-in-out forwards",
            pop: "pop 0.3s ease-in-out",
            slideDown: "slideDown 0.3s ease-in-out forwards",
            slideIn: "slideIn 0.3s ease-in-out",
        },
        keyframes: {
            fadeIn: {
                from: { opacity: 0, transform: "translateY(10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
            },
            pop: {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.2)" },
                "100%": { transform: "scale(1)" },
            },
            slideDown: {
              from: { height: "0px", opacity: 0 },
              to: { height: "auto", opacity: 1 },
          },
          slideIn: {
              from: { transform: "translateX(-100%)", opacity: 0 },
              to: { transform: "translateX(0)", opacity: 1 },
          },
        },
    },
  },
  plugins: [],
};