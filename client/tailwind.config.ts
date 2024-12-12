import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sourceSans)", "sans-serif"],
        "sf-pro": ["var(--sf-pro-display)", "Helvetica", "sans-serif"],
        sangavyThinItalic: "var(--sangavy-thinitalic)",
        sangavyLight: "var(--sangavy-light)",
        sangavyLightItalic: "var(--sangavy-lightitalic)",
        sangavyExtraLight: "var(--sangavy-extralight)",
        sangavyRegular: "var(--sangavy-regular)",
        sangavyRegularItalic: "var(--sangavy-regularitalic)",
        sangavyMedium: "var(--sangavy-medium)",
        sangavySemiBold: "var(--sangavy-semibold)",
        sangavySemiBoldItalic: "var(--sangavy-semibolditalic)",
        sangavyBold: "var(--sangavy-bold)",
        sangavyBoldItalic: "var(--sangavy-bolditalic)",
        sangavyExtraBold: "var(--sangavy-extrabold)",
        sangavyExtraBoldItalic: "var(--sangavy-extrabolditalic)",
        sangavyBlack: "var(--sangavy-black)",
        sangavyBlackItalic: "var(--sangavy-blackitalic)",
        sangavyExtraBlack: "var(--sangavy-extrablack)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
