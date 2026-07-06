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
        brand: {
          orange: '#FF6B00',
          secondary: '#F97316',
          yellow: '#FFB800',
          cream: '#FFF8F2',
          bg: '#FFF8F2',
          charcoal: '#111827',
          dark: '#111827',
          gray: '#374151',
          blue: '#3B82F6',
          border: '#F3F4F6',
          success: '#22C55E',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        sans: ['Inter', 'Noto Sans Telugu', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFF8F2 0%, #FFEDE0 50%, #FFF8F2 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B00 0%, #F97316 100%)',
        'dark-gradient': 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'card': '0 8px 32px rgba(0,0,0,0.08)',
        'orange': '0 8px 32px rgba(255,107,0,0.25)',
        'orange-lg': '0 16px 48px rgba(255,107,0,0.30)',
        'glass': '0 8px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)',
        'hover': '0 20px 60px rgba(0,0,0,0.12)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 1s infinite',
        'float-slow': 'float 6s ease-in-out 0.5s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px rgba(255,107,0,0.3)' },
          '100%': { textShadow: '0 0 40px rgba(255,107,0,0.7), 0 0 80px rgba(255,107,0,0.3)' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
