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
    }
  },
  plugins: [],
}

