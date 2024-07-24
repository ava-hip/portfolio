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
    'max-w',
    'text-',
    'm-',
    'p'
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '728px',
        xl: '728px',
        '2xl': '1024px',
      },
      padding: '1rem'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

