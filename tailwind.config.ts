import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        thulir: {
          primary: '#1F7A2E',
          accent: '#36E000',
          forest: '#0F2B14',
          sand: '#F4EFE5',
          ivory: '#FFFDF8',
          charcoal: '#222222'
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'var(--font-tamil)', 'sans-serif'],
        tamil: ['var(--font-tamil)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(15, 43, 20, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
