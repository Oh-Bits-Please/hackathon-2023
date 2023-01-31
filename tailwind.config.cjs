/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'prussian-blue': '#0B3954',
      'seaweed': '#087E8B',
      'beau-blue': '#BFD7EA',
      'orange': '#FF5A5F',
      'red': '#C81D25'
    }
  },
  plugins: [],
};
