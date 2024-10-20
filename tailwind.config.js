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
        sans: ['Noto Sans', 'Roboto', 'Open Sans', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mono: ['Courier', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark': '#181C14',
        'night': "#0A0C08",
        "smoky": "#0D0F05",
        'dimgray': "#616363",
        'platinum': "#DBDBDB",
        "light": "#FCFCFC",
        'neutral': '#E9EFEC',
        'vanilla': "#D0DB97",
        "beige": "#F1F5E0",
        "azure": "#CDDEDF",
        "lighter-blue": '#A5CBE7',
        'light-blue': '#AED4E6',
        'red': '#B3001B',
        'light-green': '#87CCB2',
        'emerald': "#84C28D",
        'green': '#037971',
        "carribean-green": "#03635D",
        'dark-green': '#023C38',
        'turquoise': '#06DBCD',
      },

    },
  },
  plugins: [],
};