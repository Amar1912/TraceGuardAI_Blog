/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#18181B',
        secondary: '#71717A',
        border: '#E4E4E7',
        'light-pink': '#FCE7F3',
        pink: '#EC4899',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'article': '760px',
        'site': '1100px',
      }
    },
  },
  plugins: [],
}
