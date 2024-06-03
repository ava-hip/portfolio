/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'underline',
    'decoration-blue-500',
    'hover:bg-blue-500',
    {pattern: /to-+/},
    {pattern: /from-+/},
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

