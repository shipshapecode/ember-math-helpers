import { div } from 'dummy/helpers/div';
import { module, test } from 'qunit';

module('Unit | Helper | div');

test('division works', function(assert) {
  let result = div([20, 10]);
  assert.equal(result, 2);
});

test('division of multiple arguments works works', function(assert) {
  let result = div([96, 2, 3, 2, 2, 2, 2]);
  assert.equal(result, 1);
});
