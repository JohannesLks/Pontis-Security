/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#B32222',
        white: '#ffffff',
        secondary: '#B32222',
        red: '#cf0909',
        green: {
          DEFAULT: '#498315',
          dark: '#498315',
        },
        gray: {
          lighter: '#FAF7F3',
          light: '#323232',
          dark: '#010717',
          txt: '#4c4d56',
        },
        'gray-100': '#f7fafc',
        'gray-200': '#edf2f7',
        'gray-300': '#e2e8f0',
        'gray-400': '#cbd5e0',
        'gray-500': '#a0aec0',
        'gray-600': '#718096',
        'gray-700': '#4a5568',
        'gray-800': '#2d3748',
        'gray-900': '#1a202c',
        'indigo-300': '#a3bffa',
        'indigo-500': '#667eea',
        'indigo-600': '#5a67d8',
        'indigo-700': '#4c51bf',
        'indigo-800': '#434190',
        'green-400': '#68d391',
        'green-500': '#48bb78',
        'red-pontis': '#B32222',
        'red-pontis-hover': '##490D0D',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#e2e8f0',
        'gray-300': '#e2e8f0',
        'gray-600': '#718096',
        'indigo-300': '#a3bffa',
        'indigo-700': '#4c51bf',
      },
      ringColor: {
        'indigo-200': '#c3dafe',
        'indigo-700': '#4c51bf',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '3xl': '1.875rem', // Adjusted for smaller screens
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
