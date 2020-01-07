'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': { allow: ['input', 'render-template', 'svg-jar'] }
  }
};
