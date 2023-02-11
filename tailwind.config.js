/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0675CE",
          secondary: "#A2D3FB",
          accent: "#0675CE",
          info: "#2E9BF5",
          neutral: "#50E8F2",
          "base-100": "#FFFFFF",
          success: "#3EC70B",
          warning: "#FFCC1D",
          error: "#B00020",
        },
      },
      // "light",
      // // "mytheme",
      // "dark",
    ],
  },
  plugins: [require("daisyui")],
};

// 0081C9
// 5BC0F8
// 86E5FF
// FFC93C

// 4D77FF
// 56BBF1
// 5EE6EB
// F2FA5A
