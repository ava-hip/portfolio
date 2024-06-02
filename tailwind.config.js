/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'biscuiterie': "url('assets/img/projects/biscuiterie.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

