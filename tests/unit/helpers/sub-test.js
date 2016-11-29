import { sub } from 'dummy/helpers/sub';
import { module, test } from 'qunit';

module('Unit | Helper | sub');

test('subtraction works', function(assert) {
  const result = sub([20, 10]);
  assert.equal(result, 10);
});

test('subtraction of multiple arguments works', function(assert) {
  const result = sub([5, 4, 2, -9]);
  assert.equal(result, 8);
});
