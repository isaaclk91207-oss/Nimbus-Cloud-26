/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['DM Sans', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          900: '#020d1a',
          800: '#041322',
          700: '#061a2e',
          600: '#0a2540',
        },
      },
      animation: {
        'float':       'float 8s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 2.5s infinite',
        'fade-up':     'fadeUp 0.65s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-16px) rotate(3deg)' },
          '66%':      { transform: 'translateY(8px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(14,165,233,0.4)' },
          '50%':      { opacity: '0.8', boxShadow: '0 0 0 6px rgba(14,165,233,0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brand-lg': '0 20px 60px rgba(14,165,233,0.12)',
        'brand-xl': '0 8px 30px rgba(14,165,233,0.4)',
        'plan':     '0 25px 60px rgba(3,105,161,0.35)',
      },
    },
  },
  plugins: [],
}
