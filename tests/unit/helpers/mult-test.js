import { mult } from 'dummy/helpers/mult';
import { module, test } from 'qunit';

module('Unit | Helper | mult');

test('multiplication works', function(assert) {
  let result = mult([20, 10]);
  assert.equal(result, 200);
});

test('multiplication of multiple arguments works', function(assert) {
  let result = mult([2, 2, 2, 2, 2, 3]);
  assert.equal(result, 96);
});
