import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./locales/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#23272f",
        muted: "#68707d",
        line: "#dfe3e8",
        paper: "#f7f8fa",
        accent: "#4b6f91",
        "accent-soft": "#e7eef5",
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(35, 39, 47, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
