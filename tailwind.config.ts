import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('../../public/assets/banner.png')",
      },
    },
    colors: {
      dark: "#000",
    },
    borderRadius: {
      md: "5px",
      lg: "8px",
      xl: "12px",
      "2xl": "24px",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
