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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "50px",   // custom screen size for extra small devices
        sm: "100px",   // default small devices
        md: "768px",   // default medium devices
        lg: "1024px",  // default large devices
        xl: "1280px",  // default extra-large devices
        '2xl': "1536px", // custom extra-large screen size
      },
    },
  },
 
  
  plugins: [],
};
export default config;
