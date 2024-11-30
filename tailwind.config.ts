import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        andSky:"#C3EBFA",
        andSkyLight:"#EDF9FD",
        andPurple:"#CFCEFF",
        andPurpleLight:"#F1F0FF",
        andYellow:"#F1E27C",
        andYellowLight:"#FAE27C",
        

      },
    },
  },
  plugins: [],
} satisfies Config;
