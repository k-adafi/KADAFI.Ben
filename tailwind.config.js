/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-yellow': 'var(--accent-yellow)',
        'accent-yellow-dark': 'var(--accent-yellow-dark)',
        primary: {
          light: '#f59e0b',
          dark: '#3b82f6',
        },
        resume: {
          bg: 'var(--resume-bg)',
          'bg-card': 'var(--resume-bg-card)',
          text: 'var(--resume-text)',
          'text-secondary': 'var(--resume-text-secondary)',
          primary: 'var(--resume-primary)',
          'primary-light': 'var(--resume-primary-light)',
          'sidebar-from': 'var(--resume-sidebar-from)',
          'sidebar-to': 'var(--resume-sidebar-to)',
        },
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
      },
      borderColor: {
        light: 'var(--border-light)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
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
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(235, 179, 8, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(235, 179, 8, 0.6)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg-smooth': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(235, 179, 8, 0.3)',
        'glow-dark': '0 0 20px rgba(251, 191, 36, 0.2)',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
      }
    },
  },
  plugins: [],
};