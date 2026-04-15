import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#4ade80",
          dark: "#22c55e",
          deep: "#16a34a",
        },
        grey: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
          pale: "#e5e7eb",
          bg: "#f9fafb",
        },
        dark: {
          DEFAULT: "#111827",
          2: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
