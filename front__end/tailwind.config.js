/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        custom1: ['Oswald', 'italic'],
      },
      colors: {
        darkBG: "#191D28",
        webBlue: "#6ECBCC",
        bGray: "#2E3241"
      },
    },
    colors: {
      ...require('tailwindcss/colors'),
      white: "#FFFFFF",
    },
  },
  plugins: [],
}

