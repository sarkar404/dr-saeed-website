import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1f3a",
        blue: "#0b5ea8",
        cyan: "#11b8d8",
        aqua: "#7be3ee",
        emerald: "#2e9d76",
        amber: "#c98722",
        paper: "#f6f9fc",
        line: "#d7e2ee"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 184, 216, 0.18)",
        card: "0 18px 50px rgba(7, 17, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

