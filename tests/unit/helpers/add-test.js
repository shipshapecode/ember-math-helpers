import { add } from 'dummy/helpers/add';
import { module, test } from 'qunit';

module('Unit | Helper | add');

test('addition works', function(assert) {
  const result = add([20, 10]);
  assert.equal(result, 30);
});

test('addition of multiple arguments works', function(assert) {
  const result = add([1, 2, 3, 4, 5]);
  assert.equal(result, 15);
});
