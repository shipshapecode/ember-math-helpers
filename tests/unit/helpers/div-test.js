import { div } from 'dummy/helpers/div';
import { module, test } from 'qunit';

module('Unit | Helper | div');

test('division works', function(assert) {
  let result = div([20, 10]);
  assert.equal(result, 2);
});
