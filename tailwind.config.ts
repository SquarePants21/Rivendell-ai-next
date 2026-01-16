import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a5c42",
        secondary: "#1a3a2e",
        accent: "#c49c6c",
        dark: "#0f1b18",
        light: "#f5f1e8",
        "brand-blue": "#007BFF",
        "dark-bg": "#05050A",
        "dark-card": "#0E0E13",
        "light-bg": "#F5F5F7",
        "light-card": "#FFFFFF",
      },
      fontFamily: {
        serif: ["Georgia", "Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        rivendell: "linear-gradient(135deg, #0a5c42 0%, #1a3a2e 100%)",
      },
      backdropBlur: {
        "xl": "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float": "float 10s ease-in-out infinite",
        "play-pulse": "playPulse 2s infinite ease-in-out",
        "spin": "spin 4s linear infinite",
        "input-glow": "input-glow 3s ease-in-out infinite",
        "btn-pulse": "btn-pulse 2s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "25%": { transform: "translateY(-10px) translateX(10px) scale(1.02)" },
          "50%": { transform: "translateY(0px) translateX(-10px) scale(0.98)" },
          "75%": { transform: "translateY(10px) translateX(10px) scale(1.01)" },
        },
        playPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
        spin: {
          "0%": { "--angle": "0deg" } as any,
          "100%": { "--angle": "360deg" } as any,
        },
        "input-glow": {
          "0%, 100%": { "box-shadow": "0 0 10px rgba(0, 123, 255, 0.2)", "border-color": "rgba(0, 123, 255, 0.4)" },
          "50%": { "box-shadow": "0 0 20px rgba(0, 123, 255, 0.5)", "border-color": "rgba(0, 123, 255, 0.8)" },
        },
        "btn-pulse": {
          "0%, 100%": { transform: "translateY(-50%) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-50%) scale(1.1)", opacity: "0.7" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
