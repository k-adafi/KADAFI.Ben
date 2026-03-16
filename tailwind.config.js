/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f59e0b',
          dark: '#3b82f6',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wave: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '50%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(0.8)', opacity: '0.7' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '70%': { width: '85%' },
          '100%': { width: '100%' },
        }
      },
      backgroundColor: {
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
        },
        dark: {
          primary: '#111827',
          secondary: '#1f2937',
        }
      }
    },
  },
  plugins: [],
};