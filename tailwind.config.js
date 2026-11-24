/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfcf8',
          100: '#faf6ec',
          200: '#f3ecd6',
          300: '#ebdfbe',
        },
        mint: {
          50: '#f0f7f3',
          100: '#d9ebe0',
          200: '#b5d8c4',
          300: '#8cc0a3',
          400: '#6aa884',
          500: '#4f8e6b',
          600: '#3c7355',
          700: '#2f5a43',
          800: '#244535',
          900: '#1b3328',
        },
        teal: {
          50: '#eef4f3',
          100: '#d6e4e1',
          200: '#aec9c4',
          300: '#82aaa3',
          400: '#5d8c84',
          500: '#457069',
          600: '#355a54',
          700: '#2a4742',
          800: '#213733',
          900: '#192925',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f5e9c8',
          200: '#ecd49a',
          300: '#e0bb66',
          400: '#d4a63e',
          500: '#c08f2a',
          600: '#a07422',
          700: '#7e5a1e',
          800: '#5c421a',
          900: '#3f2d12',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
