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
            '8xl': ['96px', 1],
            '7xl': ['72px', 1],
            '5xl': ['48px', 1],
            lg: ['18px', '28px'],
            xl: ['20px', '28px'],
         },
         borderRadius: {
            md: '6px',
            lg: '8px',
            xl: '12px',
         },
      },
   },
   plugins: [],
};
