/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodybg: '#f6f6f6',
        themeColor: '#0866ff',
      },
    },
  },
  plugins: [require('daisyui')],
};
