import { sqrt } from 'dummy/helpers/sqrt';
import { module, test } from 'qunit';

module('Unit | Helper | sqrt');

test('square root works', function(assert) {
  let result = sqrt([25]);
  assert.equal(result, 5);
});

test('negative square root is NaN', function(assert) {
  let result = sqrt([-10]);
  assert.ok(isNaN(result));
});
