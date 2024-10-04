const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        body: ['"Montserrat"', ...fontFamily.sans],
        mono: ['"Courier"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Inter', 'Open Sans', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mono: ['Courier', 'monospace'],
      },
      colors: {
        'neutral': '#E9EFEC',
        'dark': '#181C14',
        'light-blue': '#AED4E6',
        "lighter-blue": '#A5CBE7',
        'light-green': '#87CCB2',
        'red': '#B3001B',
        'green': '#037971',
        'turquoise': '#06DBCD',
      },

    },
  },
  plugins: [],
};