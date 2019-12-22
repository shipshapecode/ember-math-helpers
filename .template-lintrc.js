'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': { allow: ['render-template', 'svg-jar'] }
  }
};
