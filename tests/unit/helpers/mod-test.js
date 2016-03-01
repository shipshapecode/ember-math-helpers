import { mod } from 'dummy/helpers/mod';
import { module, test } from 'qunit';

module('Unit | Helper | mod');

test('modulus works', function (assert) {
  let result = mod([20, 10]);
  assert.equal(result, 0);
});
