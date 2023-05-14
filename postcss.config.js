const option = {
   unitToConvert: 'px',
   viewportWidth: 1440,
   unitPrecision: 5,
   propList: ['*'],
   viewportUnit: 'vw',
   fontViewportUnit: 'vw',
   selectorBlackList: [],
   minPixelValue: 1,
   mediaQuery: false,
   replace: true,
   exclude: undefined,
   include: undefined,
   landscape: false,
   landscapeUnit: 'vw',
   landscapeWidth: 568,
}; // Base designer size; 360px by default

module.exports = {
   plugins: {
      tailwindcss: {},
      'postcss-px-to-viewport': option,
      autoprefixer: {},
   },
};
