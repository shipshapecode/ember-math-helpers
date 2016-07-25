import { exp } from 'dummy/helpers/exp';
import { module, test } from 'qunit';

module('Unit | Helper | exp');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = exp(-1);
  assert.equal(result, 0.3678794411714424, 'The Exp helper takes negative values');
  result = exp(0);
  assert.equal(result, 1, 'The Exp helper takes zero as a value');
  result = exp(1);
  assert.equal(result, 2.718281828459045, 'The Exp helper takes regular values and works as well');
});
