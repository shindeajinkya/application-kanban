import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          "00": "#FFFFFF",
          50: "#FAFBFC",
          200: "#E1E4E8",
          300: "#D1D5DA",
          400: "#959DA5",
          500: "#6A737D",
          700: "#444D56",
          "1k": "#0D0D0D",
        },
        green: {
          100: "#E2F5EA",
          400: "#219653",
        },
        red: {
          "00": "#FFEAEA",
          100: "#FFEAEA",
          300: "#EB5757",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
export default config;
