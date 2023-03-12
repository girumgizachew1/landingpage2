/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
      
  ],
  theme: {
    extend: {      rotate: {
      '20': '20deg',
      '25': '25deg',
    }},
  },
  plugins: [],
}
