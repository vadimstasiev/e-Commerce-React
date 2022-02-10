module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, //or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '547px',
      // => @media (min-width: 547px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    extend: {
      colors: {
        primary: "#03045e",
        blue: {
          450: '#0077b6'
        }
      }
    },
  },
  plugins: [],
}