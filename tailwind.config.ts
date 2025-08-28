import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      fontFamily: {
        univia: ['"Univia Pro"', "Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          midnight: "#0B1023",
          indigo: "#1F3B8A",
          electric: "#2B6CFF",
          glow: "#13B8FF",
          orange: "#FF7A00",
        },
        ink: {
          900: "#EAEFFB",
          800: "#C9D4EA",
          600: "#A3B1C9",
          400: "#7A86A0",
          200: "#4D5870",
          100: "#2D3447",
        },
        success: "#16C784",
        warn: "#FFB020",
        danger: "#FF4D4D",
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(1200px 600px at 20% 0%, rgba(19,184,255,0.18), transparent 60%), radial-gradient(900px 500px at 80% -10%, rgba(43,108,255,0.2), transparent 55%)",
      },
      boxShadow: {
        brand: "0 10px 25px rgba(0,0,0,0.35)",
        glow: "0 0 0 8px rgba(43,108,255,0.12)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
       keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
