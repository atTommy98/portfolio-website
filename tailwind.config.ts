import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        'center': "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        grow: {
          from: { scale: "1" },
          to: { scale: "1.05" },
        },
      },
      animation: {
        wiggle: "wiggle 150ms ease-in-out",
        border: "border 4s ease infinite",
        grow: "grow 300ms ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
