/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["cupcake"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#F98A05",
    //       secondary: "#1E9146",
    //       accent: "#B4B4B4",
    //       neutral: "#000000",
    //       "base-100": "#ffffff",
    //       info: "#E5FFFDCC",
    //       success: "#C2DEDC",
    //       warning: "#FFF2E4",
    //       error: "#F1D3B4",
    //     },
    //   },
    themes: [
      {
        mytheme: {
          primary: "#A64AC9",
          secondary: "#FCCD04",
          accent: "#17E9E0",
          neutral: "#222629",
          "base-100": "#FFF2E4",
          info: "#FFB48F",
          success: "#75B772",
          warning: "#FFF2E4",
          error: "#FF9398",
        },
      },
    ],
    darkTheme: "", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
