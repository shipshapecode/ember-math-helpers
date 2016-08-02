/* globals blanket, module */

let options = {
  modulePrefix: 'ember-math-helpers',
  filter: '//.*ember-math-helpers/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer(moduleName) {
        let expression = /^ember-math-helpers/;
        return `${moduleName.replace(expression, 'addon')}.js`;
      }
    }
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
