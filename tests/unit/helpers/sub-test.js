import { sub } from 'dummy/helpers/sub';
import { module, test } from 'qunit';

module('Unit | Helper | sub');

test('subtraction works', function(assert) {
  let result = sub([20, 10]);
  assert.equal(result, 10);
});
