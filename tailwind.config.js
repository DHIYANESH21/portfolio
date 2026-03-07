/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        pixelify: ['"Pixelify Sans"', 'cursive'],
      },
      colors: {
        navy: {
          900: '#050d1a',
          800: '#0a1628',
          700: '#0f1f3d',
          600: '#142852',
        },
        'pixel-green': '#4ade80',
        'pixel-blue': '#60a5fa',
        'pixel-orange': '#fb923c',
        'pixel-gray': '#cbd5e1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'cloud': 'cloud 30s linear infinite',
        'cloud-slow': 'cloud 50s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cloud: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px))' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0px #000',
        'pixel-green': '4px 4px 0px #166534',
        'pixel-blue': '4px 4px 0px #1e40af',
        'pixel-orange': '4px 4px 0px #9a3412',
        'pixel-sm': '2px 2px 0px #000',
        'pixel-lg': '6px 6px 0px #000',
        'glow-green': '0 0 20px rgba(74, 222, 128, 0.4)',
        'glow-blue': '0 0 20px rgba(96, 165, 250, 0.4)',
      },
    },
  },
  plugins: [],
}
