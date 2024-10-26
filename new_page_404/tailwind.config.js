/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'twinkle': 'twinkle 5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': {
            opacity: 0,
            transform: 'scale(0.5)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}