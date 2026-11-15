import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FDFBF7", // Sandalwood / Warm Khadi Linen
          subtle: "#F7F3EB",  // Himalayan Riverbed Mist
          card: "#FFFFFF",
          warm: "#FAF6EE",
        },
        forest: {
          DEFAULT: "#18281F", // Deep Himalayan Deodar Canopy
          dark: "#111D16",    // Sacred Midnight Pine
          elevated: "#1E3328",
          card: "#16251D",
          light: "#EAF2EC",   // Subtle pine tint
          border: "#2A4435",
        },
        gold: {
          DEFAULT: "#C59B4B", // Antique Temple Brass / Alpine Sunrise
          hover: "#A88237",
          light: "#F7F1E1",
          border: "#DFC790",
        },
        bark: {
          DEFAULT: "#4A3728", // Deodar Bark Umber
          light: "#F3EDE6",
        },
        ink: {
          DEFAULT: "#191C1A", // Carbon Charcoal Ink (AAA Contrast)
          secondary: "#474D49",
          muted: "#767E79",
          onDark: "#FDFBF7",
          onDarkMuted: "#B8C2BC",
        },
        waGreen: {
          DEFAULT: "#25D366",
          hover: "#1EBE5D",
          light: "#E8F8EE",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        heritage: "0 4px 20px -2px rgba(24, 40, 31, 0.06)",
        heritageHover: "0 12px 32px -4px rgba(24, 40, 31, 0.12)",
        goldGlow: "0 4px 24px rgba(197, 155, 75, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
