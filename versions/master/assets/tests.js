'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/editable-templates/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/editable-templates/component.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/ember-cli-clipboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.triggerSuccess = triggerSuccess;
  exports.triggerError = triggerError;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });

    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  };

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }

  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }

  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }

  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }

  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */
  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }

  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireActionByName(component, actionName) {
    let action = component[actionName];

    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define('dummy/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  const keyEvent = function keyEvent(app, attributes, type, element) {
    const event = (attributes || '').split('+').reduce((event, attribute) => {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define("dummy/tests/helpers/range", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = (start, end) => Array.from({ length: end - start + 1 }, (x, idx) => start + idx);
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('dummy/components/editable-templates/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/components/editable-templates/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/not-found.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/not-found.hbs should pass TemplateLint.\n\n');
  });
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/range.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/abs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/abs-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/acos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/acos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/acosh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/acosh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/add-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/asin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/asin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/asinh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/asinh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atan2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atan2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atanh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atanh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cbrt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cbrt-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/ceil-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/ceil-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/clz32-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/clz32-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cosh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cosh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/div-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/div-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/exp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/exp-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/expm1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/expm1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/floor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/floor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/fround-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/fround-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/gcd-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/gcd-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/hypot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/hypot-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/imul-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/imul-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log10-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log10-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log1p-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log1p-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/max-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/max-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/min-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/min-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/mod-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/mod-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/mult-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/mult-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/pow-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/pow-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/random-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/random-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/round-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/round-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sign-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sign-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sqrt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sqrt-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sub-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sub-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/tan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/tan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/tanh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/tanh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/trunc-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/trunc-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/helpers/abs-test', ['dummy/helpers/abs', 'qunit'], function (_abs, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | abs', function () {
    (0, _qunit.test)('absolute value works', function (assert) {
      let result;
      result = (0, _abs.abs)([-1]);
      assert.equal(result, 1);
      result = (0, _abs.abs)([1]);
      assert.equal(result, 1);
    });

    (0, _qunit.test)('absolute value of `null`, empty string, and empty array all equal 0', function (assert) {
      let result;
      result = (0, _abs.abs)([null]);
      assert.equal(result, 0);
      result = (0, _abs.abs)(['']);
      assert.equal(result, 0);
      result = (0, _abs.abs)([[]]);
      assert.equal(result, 0);
    });

    (0, _qunit.test)('absolute value of empty object literal equals `NaN`', function (assert) {
      const result = (0, _abs.abs)([{}]);
      assert.ok(isNaN(result));
    });
  });
});
define('dummy/tests/unit/helpers/acos-test', ['dummy/helpers/acos', 'qunit'], function (_acos, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | acos', function () {
    (0, _qunit.test)('acos works', function (assert) {
      const result = (0, _acos.acos)([1]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/acosh-test', ['dummy/helpers/acosh', 'qunit'], function (_acosh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | acosh', function () {
    (0, _qunit.test)('acosh works', function (assert) {
      const result = (0, _acosh.acosh)([1]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/add-test', ['dummy/helpers/add', 'qunit'], function (_add, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | add', function () {
    (0, _qunit.test)('addition works', function (assert) {
      const result = (0, _add.add)([20, 10]);
      assert.equal(result, 30);
    });

    (0, _qunit.test)('addition of multiple arguments works', function (assert) {
      const result = (0, _add.add)([1, 2, 3, 4, 5]);
      assert.equal(result, 15);
    });
  });
});
define('dummy/tests/unit/helpers/asin-test', ['dummy/helpers/asin', 'qunit'], function (_asin, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | asin', function () {
    (0, _qunit.test)('asin works', function (assert) {
      const result = (0, _asin.asin)([0]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/asinh-test', ['dummy/helpers/asinh', 'qunit'], function (_asinh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | asinh', function () {
    (0, _qunit.test)('asinh works', function (assert) {
      const result = (0, _asinh.asinh)([0]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/atan-test', ['dummy/helpers/atan', 'qunit'], function (_atan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atan', function () {
    (0, _qunit.test)('atan works', function (assert) {
      const result = (0, _atan.atan)([0]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/atan2-test', ['dummy/helpers/atan2', 'qunit'], function (_atan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atan2', function () {
    (0, _qunit.test)('atan2 works', function (assert) {
      const result = (0, _atan.atan2)([0, 1]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/atanh-test', ['dummy/helpers/atanh', 'qunit'], function (_atanh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atanh', function () {
    (0, _qunit.test)('atanh works', function (assert) {
      const result = (0, _atanh.atanh)([0]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/cbrt-test', ['dummy/helpers/cbrt', 'qunit'], function (_cbrt, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cbrt', function () {
    (0, _qunit.test)('cbrt works', function (assert) {
      const result = (0, _cbrt.cbrt)([27]);
      assert.equal(result, 3);
    });
  });
});
define('dummy/tests/unit/helpers/ceil-test', ['dummy/helpers/ceil', 'qunit'], function (_ceil, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | ceil', function () {
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _ceil.ceil)([1]);
      assert.equal(result, 1);

      result = (0, _ceil.ceil)([1.01]);
      assert.equal(result, 2);

      result = (0, _ceil.ceil)([1.5]);
      assert.equal(result, 2);

      result = (0, _ceil.ceil)([1.99]);
      assert.equal(result, 2);

      result = (0, _ceil.ceil)([2]);
      assert.equal(result, 2);
    });
  });
});
define('dummy/tests/unit/helpers/clz32-test', ['dummy/helpers/clz32', 'qunit'], function (_clz, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | clz32', function () {
    (0, _qunit.test)('clz32 works', function (assert) {
      const result = (0, _clz.clz32)([1000]);
      assert.equal(result, 22);
    });
  });
});
define('dummy/tests/unit/helpers/cos-test', ['dummy/helpers/cos', 'qunit'], function (_cos, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cos', function () {
    (0, _qunit.test)('cos works', function (assert) {
      const result = (0, _cos.cos)([0]);
      assert.equal(result, 1);
    });
  });
});
define('dummy/tests/unit/helpers/cosh-test', ['dummy/helpers/cosh', 'qunit'], function (_cosh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cosh', function () {
    (0, _qunit.test)('cosh works', function (assert) {
      const result = (0, _cosh.cosh)([0]);
      assert.equal(result, 1);
    });
  });
});
define('dummy/tests/unit/helpers/div-test', ['dummy/helpers/div', 'qunit'], function (_div, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | div', function () {
    (0, _qunit.test)('division works', function (assert) {
      const result = (0, _div.div)([20, 10]);
      assert.equal(result, 2);
    });

    (0, _qunit.test)('division of multiple arguments works works', function (assert) {
      const result = (0, _div.div)([96, 2, 3, 2, 2, 2, 2]);
      assert.equal(result, 1);
    });
  });
});
define('dummy/tests/unit/helpers/exp-test', ['dummy/helpers/exp', 'qunit'], function (_exp, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | exp', function () {
    (0, _qunit.test)('exp works', function (assert) {
      const result = (0, _exp.exp)([1]);
      assert.equal(result.toFixed(3), 2.718);
    });
  });
});
define('dummy/tests/unit/helpers/expm1-test', ['dummy/helpers/expm1', 'qunit'], function (_expm, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | expm1', function () {
    (0, _qunit.test)('expm1 works', function (assert) {
      const result = (0, _expm.expm1)([1]);
      assert.equal(result.toFixed(3), 1.718);
    });
  });
});
define('dummy/tests/unit/helpers/floor-test', ['dummy/helpers/floor', 'qunit'], function (_floor, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | floor', function () {
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _floor.floor)([1]);
      assert.equal(result, 1);

      result = (0, _floor.floor)([1.01]);
      assert.equal(result, 1);

      result = (0, _floor.floor)([1.5]);
      assert.equal(result, 1);

      result = (0, _floor.floor)([1.99]);
      assert.equal(result, 1);

      result = (0, _floor.floor)([2]);
      assert.equal(result, 2);
    });
  });
});
define('dummy/tests/unit/helpers/fround-test', ['dummy/helpers/fround', 'qunit'], function (_fround, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | fround', function () {
    (0, _qunit.test)('fround works', function (assert) {
      const result = (0, _fround.fround)([1.337]);
      assert.equal(result, 1.3370000123977661);
    });
  });
});
define('dummy/tests/unit/helpers/gcd-test', ['dummy/helpers/gcd', 'qunit', 'ember-qunit'], function (_gcd, _qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | gcd', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.module)('Two integers', function () {
      (0, _qunit.test)('computing gcd for a larger and smaller integer', function (assert) {
        assert.equal((0, _gcd.gcd)([100, 48]), 4);
        assert.equal((0, _gcd.gcd)([100, 0]), 100);
      });

      (0, _qunit.test)('computing gcd for a smaller and larger integer', function (assert) {
        assert.equal((0, _gcd.gcd)([48, 100]), 4);
        assert.equal((0, _gcd.gcd)([48, 0]), 48);
      });

      (0, _qunit.test)('computing gcd for the absolute value of two integers ', function (assert) {
        assert.equal((0, _gcd.gcd)([-100, 48]), 4);
        assert.equal((0, _gcd.gcd)([-100, -48]), 4);
        assert.equal((0, _gcd.gcd)([100, -48]), 4);
        assert.equal((0, _gcd.gcd)([0, -48]), 48);
      });
    });

    (0, _qunit.module)('Edge-case inputs', function () {
      (0, _qunit.test)('returning 0 by default', function (assert) {
        const result = (0, _gcd.gcd)([]);

        assert.equal(result, 0);
      });

      (0, _qunit.test)('reflecting back single-integer inputs', function (assert) {
        const result = (0, _gcd.gcd)([48]);

        assert.equal(result, 48);
      });

      (0, _qunit.test)('handling numeric strings', function (assert) {
        const result = (0, _gcd.gcd)(['2', '4']);

        assert.equal(result, 2);
      });
    });
  });
});
define('dummy/tests/unit/helpers/hypot-test', ['dummy/helpers/hypot', 'qunit'], function (_hypot, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | hypot', function () {
    (0, _qunit.test)('hypot works', function (assert) {
      const result = (0, _hypot.hypot)([3, 4, 5]);
      assert.equal(result, 7.0710678118654755);
    });
  });
});
define('dummy/tests/unit/helpers/imul-test', ['dummy/helpers/imul', 'qunit'], function (_imul, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | imul', function () {
    (0, _qunit.test)('imul works', function (assert) {
      const result = (0, _imul.imul)([0xfffffffe, 5]);
      assert.equal(result, -10);
    });
  });
});
define('dummy/tests/unit/helpers/log-e-test', ['dummy/helpers/log-e', 'qunit'], function (_logE, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | logE', function () {
    (0, _qunit.test)('logE works', function (assert) {
      const result = (0, _logE.logE)([0.5]);
      assert.equal(result.toFixed(3), -0.693);
    });
  });
});
define('dummy/tests/unit/helpers/log10-test', ['dummy/helpers/log10', 'qunit'], function (_log, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log10', function () {
    (0, _qunit.test)('log10 works', function (assert) {
      const result = (0, _log.log10)([2]);
      assert.equal(result.toFixed(3), 0.301);
    });
  });
});
define('dummy/tests/unit/helpers/log1p-test', ['dummy/helpers/log1p', 'qunit'], function (_log1p, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log1p', function () {
    (0, _qunit.test)('log1p works', function (assert) {
      const result = (0, _log1p.log1p)([0.5]);
      assert.equal(result.toFixed(3), 0.405);
    });
  });
});
define('dummy/tests/unit/helpers/log2-test', ['dummy/helpers/log2', 'qunit'], function (_log, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log2', function () {
    (0, _qunit.test)('log2 works', function (assert) {
      const result = (0, _log.log2)([2]);
      assert.equal(result, 1);
    });
  });
});
define('dummy/tests/unit/helpers/max-test', ['dummy/helpers/max', 'qunit'], function (_max, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | max', function () {
    (0, _qunit.test)('max works', function (assert) {
      assert.equal((0, _max.max)([1, 2, 3, 5, 6, 42, 3, 6, 7]), 42, 'accepts multiple arguments');

      assert.equal((0, _max.max)([42]), 42, 'accepts one argument');

      assert.equal((0, _max.max)([]), Number.NEGATIVE_INFINITY, 'accepts zero arguments');
    });
  });
});
define('dummy/tests/unit/helpers/min-test', ['dummy/helpers/min', 'qunit'], function (_min, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | min', function () {
    (0, _qunit.test)('min works', function (assert) {
      assert.equal((0, _min.min)([3, 2, 3, 5, 6, 42, 3, 6, 7]), 2, 'accepts multiple arguments');

      assert.equal((0, _min.min)([42]), 42, 'accepts one argument');

      assert.equal((0, _min.min)([]), Infinity, 'accepts zero arguments');
    });
  });
});
define('dummy/tests/unit/helpers/mod-test', ['dummy/helpers/mod', 'qunit'], function (_mod, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | mod', function () {
    (0, _qunit.test)('modulus works', function (assert) {
      const result = (0, _mod.mod)([20, 10]);
      assert.equal(result, 0);
    });

    (0, _qunit.test)('modulus of multiple arguments works', function (assert) {
      const result = (0, _mod.mod)([10, 7, 2]);
      assert.equal(result, 1);
    });
  });
});
define('dummy/tests/unit/helpers/mult-test', ['dummy/helpers/mult', 'qunit'], function (_mult, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | mult', function () {
    (0, _qunit.test)('multiplication works', function (assert) {
      const result = (0, _mult.mult)([20, 10]);
      assert.equal(result, 200);
    });

    (0, _qunit.test)('multiplication of multiple arguments works', function (assert) {
      const result = (0, _mult.mult)([2, 2, 2, 2, 2, 3]);
      assert.equal(result, 96);
    });
  });
});
define('dummy/tests/unit/helpers/pow-test', ['dummy/helpers/pow', 'qunit'], function (_pow, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | pow', function () {
    (0, _qunit.test)('pow works', function (assert) {
      const result = (0, _pow.pow)([7, 2]);
      assert.equal(result, 49);
    });

    (0, _qunit.test)('negative base works', function (assert) {
      const result = (0, _pow.pow)([-7, 2]);
      assert.equal(result, 49);
    });

    (0, _qunit.test)('negative exponent works', function (assert) {
      const result = (0, _pow.pow)([2, -2]);
      assert.equal(result, 0.25);
    });
  });
});
define('dummy/tests/unit/helpers/random-test', ['dummy/helpers/random', 'dummy/tests/helpers/range', 'qunit'], function (_random, _range, _qunit) {
  'use strict';

  const { floor } = Math;
  const SAMPLE_SIZE = 100;
  const PRECISION = 6;

  // 💡 Because precise decimals aren't zero-padded, we can
  // tolerate some percentage of failures when dealing with decimal length
  const TOLERANCE = 0.25; // 75% pass-rate

  let randVal, satisfied, passCount, message;

  (0, _qunit.module)('Unit | Helper | random', function () {
    function isPassing(passCount, sampleSize, toleranceRatio) {
      return passCount >= floor(sampleSize * (1 - toleranceRatio));
    }

    function numDecimals(floatingPointNum) {
      return floatingPointNum.toPrecision().split('.')[1].length;
    }

    (0, _qunit.test)('no positional arguments', function (assert) {
      message = 'defaults to returning the whole numbers of either 0 or 1';

      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)();
        satisfied = randVal === 0 || randVal === 1;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

      message = 'returns a number between 0 and 1, with decimal precision specified by `decimals`';

      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)({ decimals: PRECISION });

        satisfied = randVal > 0 && randVal < 1 && numDecimals(randVal) <= PRECISION;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
    });

    (0, _qunit.test)('one positional argument', function (assert) {
      message = 'returns a random whole number between 0 and 42, inclusive';

      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)([42]);

        satisfied = randVal >= 0 && randVal <= 42;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

      message = 'returns a random number between 0 and a single positional arg, with decimal precision specified by `decimals`';
      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)([42], { decimals: PRECISION });

        satisfied = randVal > 0 && randVal < 42 && numDecimals(randVal) <= PRECISION;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
    });

    (0, _qunit.test)('two positional arguments', function (assert) {
      message = 'returns a random whole number between two upper and lower bound postional args, inclusive';
      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)([1797, 21]);

        satisfied = randVal >= 21 && randVal <= 1797;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

      message = 'returns a random number between two upper and lower bound postional args, with decimal precision specified by `decimals`';
      passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(acc => {
        randVal = (0, _random.random)([21, 1797], { decimals: PRECISION });

        satisfied = randVal >= 21 && randVal <= 1797 && numDecimals(randVal) <= PRECISION;

        return satisfied ? acc + 1 : acc;
      }, 0);

      assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
    });

    (0, _qunit.test)('bounding `decimals` between 0 and 20', function (assert) {
      randVal = (0, _random.random)([42], { decimals: 100 });

      satisfied = randVal > 0 && randVal < 42 && numDecimals(randVal) <= 20;

      assert.ok(satisfied);
    });
  });
});
define('dummy/tests/unit/helpers/round-test', ['dummy/helpers/round', 'qunit'], function (_round, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | round', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {

      assert.equal((0, _round.round)([20.49]), 20, 'It rounds values with a decimal place less than .5 down');

      assert.equal((0, _round.round)([20.5]), 21, 'It rounds values with a decimal place greater than or equal to .5 up');

      assert.equal((0, _round.round)([-20.5]), -20, 'It rounds negative numbers up appropriately');

      assert.equal((0, _round.round)([-20.51]), -21, 'It rounds negative numbers down appropriately');

      assert.equal((0, _round.round)([42]), 42, 'When given a whole number, the result stays the same');

      assert.equal((0, _round.round)([35.855], { decimals: 2 }), 35.86, 'It rounds to a given number of decimal places');

      assert.equal((0, _round.round)([123456], { exp: 3 }), 123000, 'It rounds to a given power of ten');
    });
  });
});
define('dummy/tests/unit/helpers/sign-test', ['dummy/helpers/sign', 'qunit'], function (_sign, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sign', function () {
    (0, _qunit.test)('it works', function (assert) {

      assert.equal((0, _sign.sign)([-5]), -1, 'Negative returns -1');

      assert.equal((0, _sign.sign)([5]), 1, 'Positive returns 1');

      assert.equal(String((0, _sign.sign)(['foo'])), 'NaN', 'Invalid returns NaN');
    });
  });
});
define('dummy/tests/unit/helpers/sin-test', ['dummy/helpers/sin', 'qunit'], function (_sin, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sin', function () {
    (0, _qunit.test)('sin works', function (assert) {
      const result = (0, _sin.sin)([0]);
      assert.equal(result, 0);
    });
  });
});
define('dummy/tests/unit/helpers/sqrt-test', ['dummy/helpers/sqrt', 'qunit'], function (_sqrt, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sqrt', function () {
    (0, _qunit.test)('square root works', function (assert) {
      const result = (0, _sqrt.sqrt)([25]);
      assert.equal(result, 5);
    });

    (0, _qunit.test)('negative square root is NaN', function (assert) {
      const result = (0, _sqrt.sqrt)([-10]);
      assert.ok(isNaN(result));
    });
  });
});
define('dummy/tests/unit/helpers/sub-test', ['dummy/helpers/sub', 'qunit'], function (_sub, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sub', function () {
    (0, _qunit.test)('subtraction works', function (assert) {
      const result = (0, _sub.sub)([20, 10]);
      assert.equal(result, 10);
    });

    (0, _qunit.test)('subtraction of multiple arguments works', function (assert) {
      const result = (0, _sub.sub)([5, 4, 2, -9]);
      assert.equal(result, 8);
    });
  });
});
define('dummy/tests/unit/helpers/tan-test', ['dummy/helpers/tan', 'qunit'], function (_tan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | tan', function () {
    (0, _qunit.test)('tan works', function (assert) {
      const result = (0, _tan.tan)([1]);
      assert.equal(result.toFixed(3), 1.557);
    });
  });
});
define('dummy/tests/unit/helpers/tanh-test', ['dummy/helpers/tanh', 'qunit'], function (_tanh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | tanh', function () {
    (0, _qunit.test)('tanh works', function (assert) {
      const result = (0, _tanh.tanh)([1]);
      assert.equal(result.toFixed(3), 0.762);
    });
  });
});
define('dummy/tests/unit/helpers/trunc-test', ['dummy/helpers/trunc', 'qunit'], function (_trunc, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | trunc', function () {
    (0, _qunit.test)('trunc works', function (assert) {
      let result;
      result = (0, _trunc.trunc)([13.37]);
      assert.equal(result, 13);
      result = (0, _trunc.trunc)([0.123]);
      assert.equal(result, 0);
      result = (0, _trunc.trunc)([-1.123]);
      assert.equal(result, -1);
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
