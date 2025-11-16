import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        helsi: {
          green: '#00A651',
          black: '#111111',
          beige: '#F5F5F7'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px rgba(17, 17, 17, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
