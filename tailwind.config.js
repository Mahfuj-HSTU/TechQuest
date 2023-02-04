/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        // mytheme: {
        //   primary: "#184C7D",
        //   secondary: "#4195D7",
        //   accent: "#E4EEFA",
        //   neutral: "#3D4451",
        //   "base-100": "#FFFFFF",
        //   info: "#2D6CA1",
        //   success: "#3EC70B",
        //   warning: "#FFCC1D",
        //   error: "#B00020",
        // },
      },
      "light",
      // "mytheme",
      "dark",
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
