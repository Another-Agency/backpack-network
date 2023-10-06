import { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bl_steel: {
          ualert: "#FF00C7",
          bluish: "#97B1FA",
          charyo: "#1F1F1F",
          graish: "#D9D9D9",
          notpurp: "#F9F8FC",
        },
      },
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.bl_steel.graish"
        )}, 50px, ${theme("colors.bl_steel.charyo")} 50%)`,
        steel: `linear-gradient(90deg, #1f1f1f, #f9f8fc, #1f1f1f)`,
      }),

      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),

      width: {
        "38": "9.5rem",
        "80": "20rem",
        "112": "28rem",
        "135": "33.75rem",
        "137": "34.25rem",
        "150": "37.5rem",
        "152": "38rem",
      },
      height: {
        "38": "9.5rem",
        "80": "20rem",
        "112": "28rem",
        "135": "33.75rem",
        "137": "34.25rem",
        "150": "37.5rem",
        "152": "38rem",
      },
      spacing: {
        "38": "9.5rem",
        "80": "20rem",
        "112": "28rem",
        "135": "33.75rem",
        "137": "34.25rem",
        "150": "37.5rem",
        "152": "38rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} as Config;
