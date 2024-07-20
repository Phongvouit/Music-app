import type { Config } from "tailwindcss";
import {blackA, violet} from "@radix-ui/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet
      }
    },
  },
  plugins: [],
};
export default config;
