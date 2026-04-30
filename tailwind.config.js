/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1434cb',
          dark: '#0f2ca1',
          light: '#3b5dd9',
        },
        secondary: {
          DEFAULT: '#7c1411',
          dark: '#5a0f0d',
          light: '#a31a16',
        },
        accent: {
          DEFAULT: '#019fe3',
          dark: '#0180b8',
          light: '#33b3e8',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1434cb 0%, #019fe3 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7c1411 0%, #a31a16 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(20, 52, 203, 0.95) 0%, rgba(1, 159, 227, 0.95) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(20, 52, 203, 0.3)',
        'glow-red': '0 0 20px rgba(124, 20, 17, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};