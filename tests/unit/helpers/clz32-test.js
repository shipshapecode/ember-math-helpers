import { clz32 } from 'dummy/helpers/clz32';
import { module, test } from 'qunit';

module('Unit | Helper | clz32');

test('clz32 works', function(assert) {
  const result = clz32([1000]);
  assert.equal(result, 22);
});

