/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      extend: {
        colors: {
          primary: '#FF0000',
          secondary: '#F3C300',
          accent: '#FFFFFF',
          background: '#262626',
          text: '#FFFFFF',
          border: '#FF0000',
        },
      },
    },
  plugins: [],
}
