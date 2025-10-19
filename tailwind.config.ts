import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nocta: {
          bg: "#17142B",      // deep indigo top
          bg2: "#2A1B45",     // rich purple bottom
          pink: "#FF59C7",    // button gradient start
          purple: "#4C5AF7",  // button gradient end
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        display: ["ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(230,83,179,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      backgroundImage: {
        "nocta-gradient":
          "linear-gradient(135deg, #FF59C7 0%, #7B5DF4 50%, #4C5AF7 100%)",
      },
    },
  },
  plugins: [],
};

export default config;


