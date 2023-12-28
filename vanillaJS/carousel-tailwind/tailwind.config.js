/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'sans-serif']
      },
      keyframes:{
        show: {
          '0%':{
            filter: 'blur(5px)',
            transform: 'translateY(calc(-50% + 75px))'
        },
        '100%': {
            opacity: 1,
            filter: 'blur(0)'
          } 
        } 
      },
      animation: {
        show: 'show 0.75s ease-in-out 0.3s forwards',
      },
    },
  },
  plugins: [],
}

