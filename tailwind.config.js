/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgColor:'rgb(var(--bg-color))',
        surface:'rgb(var(--surface-color))',
        lightSurface:'rgb(var(--light-surface))',
        darkerBg:'rgb(var(--darker-bg))',
        primary:'rgb(var(--primary-color))',
        cta:'rgb(var(--cta-color))',
      }
    },
    container:{
      center:true,
      padding:1
    }
  },
  plugins: [],
}

