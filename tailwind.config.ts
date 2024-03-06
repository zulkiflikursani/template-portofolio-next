import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgb(255, 180, 0)",
        black: {
          "100": "#a6a6a6",
          "200": "#999999",
          "300": "#333333",
          "400": "#262626",
          "500": "#000000",
        },
        // white :{

        // }
      },
    },
  },
  plugins: [],
};
export default config;
