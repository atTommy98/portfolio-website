import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        swap1: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(200%)" },
          "80%": {transform: "translateY(100%)"},
          "100%": {transform: "translateY(0%)"},
        },
        swap2: {
          "0%": { transform: "translateY(-100%)" },
          "20%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
          "80%": {transform: "translateY(0%)"},
          "100%": {transform: "translateY(-100%)"},
        },
        swap3: {
          "0%": { transform: "translateY(-200%)" },
          "20%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0%)" },
          "80%": {transform: "translateY(-100%)"},
          "100%": {transform: "translateY(-200%)"},
        },
      },
      animation: {
        wiggle: "wiggle 150ms ease-in-out",
        swap1: "swap1 10s infinite ease-in-out",
        swap2: "swap2 10s infinite ease-in-out",
        swap3: "swap3 10s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
