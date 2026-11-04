/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF6EC',
          100: '#F6EEDF',
          200: '#EFE2CC',
          300: '#E3D2B4',
        },
        forest: {
          50: '#EFF3EF',
          600: '#2C5A3E',
          700: '#1E4630',
          800: '#163726',
          900: '#10291C',
          950: '#0B1E14',
        },
        terracotta: {
          50: '#FBF0EB',
          100: '#F6DFD5',
          200: '#EFC6B5',
          400: '#C96A45',
          500: '#B9542F',
          600: '#9E4524',
        },
        saffron: {
          300: '#EFCB84',
          400: '#E5B45F',
          500: '#D69B34',
        },
        ink: '#1C231B',
        muted: '#6B6558',
        line: '#E5DAC7',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['Fraunces', 'Noto Sans Telugu', 'Georgia', 'serif'],
        sans: ['Inter', 'Noto Sans Telugu', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(28, 35, 27, 0.35)',
        drawer: '0 -12px 48px -12px rgba(11, 30, 20, 0.35)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sheet-in': {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'sheet-in': 'sheet-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
