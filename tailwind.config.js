/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    fontSize: {
      xs: ["12px", "18px"],
      sm: ["14px", "21px"],
      md: ["16px", "25px"],
      lg: ["18px", "28px"],
      huge: ["20px", "31px"],
    },
    extend: {
      boxShadow: {
        xl: "0px 0px 24px rgba(189, 182, 183, 0.25)",
      },
      colors: {
        opacity: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
