import { atan2 } from 'dummy/helpers/atan2';
import { module, test } from 'qunit';

module('Unit | Helper | atan2');

test('atan2 works', function(assert) {
  const result = atan2([0, 1]);
  assert.equal(result, 0);
});

