/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/main.js",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins', 'sans-serif'],
      'display': ['Oswald'],
      'body': ['"poppins"'],
    },

    extend: {
      screens: {
        'sm': '375px',  // Custom small screen size
        'md': '768px',  // Custom medium screen size
        'lg': '1024px', // Custom large screen size
        'xl': '1280px', // Custom extra-large screen size
      },
    }
  },
  plugins: [],
}

