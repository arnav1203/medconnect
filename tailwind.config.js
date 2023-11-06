/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    safelist: ['animate-[fade-in-left_1s_ease-in-out]'],
    extend: {
      animation: {
        'floaty': 'floaty 3s ease-out infinite'
      },
      keyframes: {
        floaty: {
          '50%': { transform: 'translateY(10px)' }
        }
      }
    },
  },
  plugins: [],
}

