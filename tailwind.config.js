/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B00',
          yellow: '#FFB800',
          cream: '#FFF8F0',
          charcoal: '#1A1A1A',
          gray: '#374151',
          blue: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Telugu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
