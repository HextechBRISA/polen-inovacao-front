/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wobble: 'wobble 1s ease-in-out',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-25%) rotate(-5deg)' },
          '30%': { transform: 'translateX(20%) rotate(3deg)' },
          '45%': { transform: 'translateX(-15%) rotate(-3deg)' },
          '60%': { transform: 'translateX(10%) rotate(2deg)' },
          '75%': { transform: 'translateX(-5%) rotate(-1deg)' },
        },
      },
      screens: {
        'xs': {'max': '500px'},
        'sm': {'max': '900px'},
        'lg': {'min': '1200px'},
        'xl': {'min': '1300px'},
      },
      boxShadow: {
        'custom': '0px 4px 8px rgba(0, 0, 0, 0.4)', 
      },
      backgroundImage: {
        'gradient-colors': 'linear-gradient(to bottom, rgba(238, 122, 60, 0), rgba(234, 94, 83, 1))',
      },
    },
  },
  plugins: [],
}
