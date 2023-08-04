/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'Portable':{'max':'1024px'}, //It is used to display in 'Landscape' View for all touch devices.
        'Tablet':{'max':'769px','min':'426px'}, //This is for 'Tablets' devices.
        'MobileLarge':{'max':'426px','min':'321px'}, //This is for 'Large Mobiles' devices.
        'MobileSmall':{'max':'321px'} //This is for 'Small Mobiles' devices.
      },
      backgroundColor:{
        'White':'hsl(0, 0%, 100%)',
        'GrayishBlue':'hsl(220, 15%, 55%)',
        'LightGray':'hsl(212, 45%, 89%)',
        'DarkBlue':'hsl(218, 44%, 22%)'
      },
      colors:{
        'White':'hsl(0, 0%, 100%)',
        'GrayishBlue':'hsl(220, 15%, 55%)',
        'LightGray':'hsl(212, 45%, 89%)',
        'DarkBlue':'hsl(218, 44%, 22%)'
      },
      fontFamily:{
        'Outfit':['Outfit','sans-serif']
      }
    },
  },
  plugins: [],
}

