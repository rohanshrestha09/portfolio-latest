/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontSize: {
            '12xl': ['210px', 1],
            '11xl': ['170px', 1],
            '10xl': ['140px', 1],
            '9xl': ['120px', 1],
            '8xl': ['96px', 1],
            '7xl': ['72px', 1],
            '6xl': ['60px', 1],
            '5xl': ['48px', 1],
            '4xl': ['36px', '40px'],
            '3xl': ['30px', '36px'],
            '2xl': ['24px', '32px'],
            xl: ['20px', '28px'],
            lg: ['18px', '28px'],
         },
         borderRadius: {
            md: '6px',
            lg: '8px',
            xl: '12px',
            '2xl': '16px',
         },
      },
   },
   plugins: [],
};
