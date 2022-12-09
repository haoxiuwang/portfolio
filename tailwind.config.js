/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
       colors: {
          neutral:"hsla(var(--n)/1)",
          primary:"hsla(var(--p)/1)",
          "neutral\-content":"hsla(var(--nc)/1)",
          "primary\-content":"hsla(var(--pc)/1)",
          "base\-content" :"hsla(var(--bc)/1)",
          "base\-100":"hsla(var(--b1)/1)"
       }
   }
}
