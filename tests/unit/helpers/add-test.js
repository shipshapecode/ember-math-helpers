import { add } from 'dummy/helpers/add';
import { module, test } from 'qunit';

module('Unit | Helper | add');

test('addition works', function(assert) {
  let result = add([20, 10]);
  assert.equal(result, 30);
});
