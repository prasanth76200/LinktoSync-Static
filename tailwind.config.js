
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#64748B",
        accent: "#22D3EE",
      },
      fontFamily: {
        priFont: ["Nunito Sans", "sans-serif"],
        secFont: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        '3xl': '1920px', // Adding an extra-large breakpoint for very large screens
        '4xl': '2560px', // Adding an ultra-wide breakpoint
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "3rem",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    container: true,
  },
  safelist: [
    'bg-primary', 'text-secondary', 'p-4',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus', 'responsive'],
      textColor: ['group-hover', 'focus-visible', 'responsive'],
      padding: ['responsive'], // Allows responsive padding utilities
      margin: ['responsive'], // Allows responsive margin utilities
      display: ['responsive'], // Enables responsive display utilities (block, flex, etc.)
    },
  },
};

